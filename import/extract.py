"""
Extraction d'une sauvegarde FM26 (.fm) pour l'outil d'import du site.

Tourne dans le navigateur (Pyodide, dans import/worker.js) et s'appuie sur
fmsave (https://github.com/rhiever/fmsave, licence MIT) pour lire le fichier.
Ne fait que lire : renvoie des données brutes en JSON, la mise en forme
au format seasons-*.js est faite côté JavaScript (import/import.js).
"""

import json
from collections import defaultdict

import fmsave

FRIENDLY_DB_IDS = {104551}

_save = None


def open_save(path):
    global _save
    _save = fmsave.open(path)
    info = _save.info
    clubs = [
        [c.uid, c.name, c.short_name, c.nation_id, c.reputation or 0]
        for c in _save.clubs()
        if c.teams
    ]
    return json.dumps({
        "info": {
            "game": info.game,
            "build": info.build,
            "date": info.game_date.isoformat() if info.game_date else None,
            "name": info.save_name,
        },
        "clubs": clubs,
    })


def _first_team_id(club):
    teams = sorted((t for t in club.teams if not t.is_affiliate), key=lambda t: t.slot)
    return teams[0].team_id if teams else None


def _season_start(d):
    return d.year if d.month >= 7 else d.year - 1


def extract(club_uid):
    save = _save
    club_uid = int(club_uid)
    clubs = {c.uid: c for c in save.clubs()}
    club = clubs[club_uid]
    team_id = _first_team_id(club)

    in_game = save.info.game_date
    competitions = {c.id: c for c in save.competitions()}
    stages = {s.id: s for s in save.stages()}

    all_fixtures = list(save.fixtures())
    own = [f for f in all_fixtures if team_id in (f.home_team_id, f.away_team_id) and f.date]
    if not own:
        return json.dumps({"error": "Aucun match trouvé pour ce club dans la sauvegarde."})

    # Saison courante = celle de la date en jeu (sinon celle du dernier match joué)
    if in_game:
        season = _season_start(in_game)
    else:
        season = _season_start(max(f.date for f in own if f.played))
    own = [f for f in own if _season_start(f.date) == season]

    own_stage_ids = {f.stage_id for f in own if f.stage_id is not None}
    own_comp_ids = {f.competition_id for f in own if f.competition_id is not None}

    # Toutes les rencontres des phases jouées par le club (pour recalculer les classements)
    by_stage = defaultdict(list)
    for f in all_fixtures:
        if f.stage_id in own_stage_ids and f.date and _season_start(f.date) == season:
            by_stage[f.stage_id].append(f)

    # Nations présentes dans chaque compétition → national ou continental
    comp_nations = defaultdict(set)
    for f in all_fixtures:
        if f.competition_id in own_comp_ids and f.date and _season_start(f.date) == season:
            for uid in (f.home_club_uid, f.away_club_uid):
                if uid in clubs:
                    comp_nations[f.competition_id].add(clubs[uid].nation_id)

    def fx(f, full=False):
        row = {
            "date": f.date.isoformat(),
            "comp": f.competition_id,
            "stage": f.stage_id,
            "ri": f.round_index,
            "h": f.home_team_id,
            "a": f.away_team_id,
            "hn": f.home_club_short_name or f.home_club_name,
            "an": f.away_club_short_name or f.away_club_name,
            "hg": f.home_goals,
            "ag": f.away_goals,
            "played": f.played,
        }
        if full:
            row["neutral"] = f.is_neutral_venue
        return row

    stage_info = {}
    for sid in own_stage_ids:
        s = stages.get(sid)
        fixtures = by_stage.get(sid, [])
        teams = {t for f in fixtures for t in (f.home_team_id, f.away_team_id)}
        stage_info[sid] = {
            "comp": s.competition_id if s else None,
            "group": s.group_id if s else None,
            "round_code": s.round.raw if s and s.round is not None else None,
            "previous": s.previous_stage_id if s else None,
            "teams": len(teams),
            "first_date": min((f.date for f in fixtures), default=None).isoformat() if fixtures else None,
            "fixtures": [fx(f) for f in fixtures] if len(fixtures) <= 400 else [],
        }

    comp_info = {}
    for cid in own_comp_ids:
        c = competitions.get(cid)
        comp_info[cid] = {
            "db_id": c.database_id if c else None,
            "friendly": bool(c and c.database_id in FRIENDLY_DB_IDS),
            "nations": len(comp_nations[cid]),
            "stages": [sid for sid in (c.stage_ids if c else ()) if sid in own_stage_ids],
        }

    # Classements officiels du jeu contenant l'équipe première
    tables = []
    for t in save.league_tables():
        if any(r.team_id == team_id for r in t.rows):
            tables.append({
                "comp": t.competition_id,
                "count": t.club_count,
                "rows": [
                    {
                        "pos": r.position, "team": r.team_id,
                        "name": r.club_short_name or r.club_name,
                        "j": r.played, "g": r.won, "n": r.drawn, "l": r.lost,
                        "bp": r.goals_for, "bc": r.goals_against, "pts": r.points,
                    }
                    for r in t.rows
                ],
            })

    # Stats de la saison (toutes compétitions officielles) de l'équipe première
    stats = []
    for s in save.player_season_stats():
        if s.team_id == team_id and str(s.kind) in ("overall", "SeasonStatsKind.OVERALL"):
            if s.starts + s.substitute_appearances == 0:
                continue
            stats.append({
                "uid": s.player_uid, "name": s.player_name,
                "starts": s.starts, "subs": s.substitute_appearances,
                "minutes": s.minutes, "rated": s.rated_appearances,
                "rating": s.average_rating, "goals": s.goals, "assists": s.assists,
                "yellow": s.yellow_cards, "red": s.red_cards, "potm": s.player_of_the_match,
            })
    uids = {s["uid"] for s in stats}
    players = {}
    for p in save.players():
        if p.uid in uids:
            players[p.uid] = {
                "name": p.name, "age": p.age, "nation": p.nation_id,
                "positions": list(p.natural_positions or ()),
                "club": p.club_uid,
            }

    return json.dumps({
        "club": {
            "uid": club.uid, "name": club.name, "short": club.short_name,
            "nation": club.nation_id, "team": team_id,
        },
        "season": season,
        "date": in_game.isoformat() if in_game else None,
        "fixtures": [fx(f, True) for f in sorted(own, key=lambda f: (f.date, f.kick_off_time or 0))],
        "stages": stage_info,
        "competitions": comp_info,
        "tables": tables,
        "stats": stats,
        "players": players,
    }, default=str)
