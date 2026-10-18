/**
 * ═══════════════════════════════════════════════════════════
 *  ARSENAL FC — DONNÉES DES SAISONS
 *
 *  Même format que seasons-chateauroux.js :
 *  une saison = un objet (bilan, matchs de championnat,
 *  coupes, classements, stats, mercato, splash).
 *  Spécifique à cette carrière : "cup3" (deuxième coupe
 *  nationale) et "ratingsTitle" (titre de la liste des notes).
 * ═══════════════════════════════════════════════════════════
 */

window.SEASONS_arsenal = [

  /* ─── SAISON 2025/26 · PREMIER LEAGUE · CHAMPIONS + FA CUP ─── */
  {
    id:         "2025-26",
    year:       "2025/26",
    league:     "Premier League",
    position:   1,
    totalTeams: 20,
    points:     85,
    played:     38,
    wins:       26,
    draws:      7,
    losses:     5,
    gf:         104,
    ga:         44,
    relegated:  ["Leeds Utd", "Crystal Palace", "Burnley"],

    splash: {
      eyebrow:  "2025/26 · Arsenal · Premier League",
      lines:    ["CHAMPIONS", "D'ANGLETERRE."],
      sub:      "Premier League · Champions · 85 pts · FA Cup · Finalistes de la Ligue des Champions",
      tagline:  "104 buts en Premier League, Saka et Gyökeres à 26 réalisations chacun : Arsenal soulève le titre et la FA Cup aux tirs au but face à Liverpool, avant de tomber contre ce même Liverpool en finale de la Ligue des Champions.",
    },

    scorers: [
      { name: "B. Saka · V. Gyökeres",     detail: "AD / BU · ex-aequo",        value: 26 },
      { name: "Gabriel Martinelli",        detail: "AG · Brésilien · 24 ans",   value: 22 },
      { name: "M. Ødegaard · E. Nwaneri",  detail: "MC / AD · ex-aequo",        value: 15 },
    ],
    assists: [
      { name: "Lewis-Skelly · Saka · Ødegaard", detail: "3 joueurs à égalité",  value: 14 },
      { name: "Ebere Eze",                 detail: "MOC · Anglais · 27 ans",    value: 12 },
      { name: "Benjamin White",            detail: "DD · Anglais · 28 ans",     value: 11 },
    ],
    // Top 3 de la saison (classement sans moyenne)
    ratingsTitle: "Top 3 de la saison",
    ratings: [
      { name: "Bukayo Saka",                detail: "AD · Anglais · 24 ans" },
      { name: "Gabriel Martinelli",         detail: "AG · Brésilien · 24 ans" },
      { name: "G. Jesus · M. Lewis-Skelly", detail: "BU / DG · ex-aequo" },
    ],

    matches: [
      { r:"W", tip:"Man Utd (E) 1-2" },
      { r:"W", tip:"Leeds Utd (D) 2-0" },
      { r:"W", tip:"Liverpool (E) 0-3" },
      { r:"W", tip:"Nottm Forest (D) 3-0" },
      { r:"W", tip:"Man City (D) 3-0" },
      { r:"W", tip:"Newcastle (E) 1-2" },
      { r:"W", tip:"West Ham (D) 6-3" },
      { r:"D", tip:"Fulham (E) 2-2" },
      { r:"W", tip:"Crystal Palace (D) 4-1" },
      { r:"L", tip:"Burnley (E) 3-1" },
      { r:"W", tip:"Sunderland (E) 2-3" },
      { r:"W", tip:"Tottenham (D) 3-1" },
      { r:"L", tip:"Chelsea (E) 2-1" },
      { r:"L", tip:"Aston Villa (E) 3-1" },
      { r:"W", tip:"Brentford (D) 6-0" },
      { r:"W", tip:"Wolves (D) 1-0" },
      { r:"L", tip:"Everton (E) 2-1" },
      { r:"W", tip:"Brighton (D) 2-1" },
      { r:"L", tip:"Aston Villa (D) 2-3" },
      { r:"W", tip:"Bournemouth (E) 1-3" },
      { r:"D", tip:"Liverpool (D) 1-1" },
      { r:"D", tip:"Nottm Forest (E) 4-4" },
      { r:"W", tip:"Man Utd (D) 3-0" },
      { r:"W", tip:"Leeds Utd (E) 2-3" },
      { r:"W", tip:"Sunderland (D) 9-0" },
      { r:"W", tip:"Brentford (E) 1-3" },
      { r:"D", tip:"Tottenham (E) 2-2" },
      { r:"W", tip:"Chelsea (D) 2-1" },
      { r:"W", tip:"Brighton (E) 0-3" },
      { r:"D", tip:"Everton (D) 0-0" },
      { r:"D", tip:"Bournemouth (D) 2-2" },
      { r:"W", tip:"Man City (E) 0-1" },
      { r:"W", tip:"Newcastle (D) 4-2" },
      { r:"W", tip:"Fulham (D) 4-1" },
      { r:"W", tip:"West Ham (E) 0-4" },
      { r:"D", tip:"Wolves (E) 2-2" },
      { r:"W", tip:"Burnley (D) 3-0" },
      { r:"W", tip:"Crystal Palace (E) 0-3" },
    ],

    cup2: {
      name: "UEFA Champions League",
      phase: "Phase de championnat : 9ᵉ/36 · 4V 2N 2D · 14 pts · Athletic Club (8-0), le Barça (t.a.b.), Galatasaray et le PSG éliminés, finale perdue contre Liverpool.",
      rounds: [
        { result:"L", round:"Phase · J1",      score:"0 – 1",      opponent:"Ajax (D)" },
        { result:"W", round:"Phase · J2",      score:"0 – 3",      opponent:"Bayern München (E)" },
        { result:"W", round:"Phase · J3",      score:"5 – 1",      opponent:"PSV Eindhoven (D)" },
        { result:"W", round:"Phase · J4",      score:"4 – 1",      opponent:"Sturm Graz (D)" },
        { result:"L", round:"Phase · J5",      score:"3 – 1",      opponent:"Bayer Leverkusen (E)" },
        { result:"D", round:"Phase · J6",      score:"2 – 2",      opponent:"Liverpool (D)" },
        { result:"D", round:"Phase · J7",      score:"1 – 1",      opponent:"Olympiacos (E)" },
        { result:"W", round:"Phase · J8",      score:"1 – 3",      opponent:"Qarabağ FK (E)" },
        { result:"W", round:"Barrages · aller", score:"0 – 3",     opponent:"Athletic Club (E)" },
        { result:"W", round:"Barrages · retour", score:"5 – 0",    opponent:"Athletic Club (D) · cumul 8-0 ✓" },
        { result:"W", round:"8e · aller",      score:"1 – 0",      opponent:"Barcelona (D)" },
        { result:"L", round:"8e · retour",     score:"2 – 1 a.p.", opponent:"Barcelona (E) · cumul 2-2, qualifié aux t.a.b. ✓" },
        { result:"W", round:"Quart · aller",   score:"2 – 0",      opponent:"Galatasaray SK (D)" },
        { result:"W", round:"Quart · retour",  score:"1 – 3",      opponent:"Galatasaray SK (E) · cumul 5-1 ✓" },
        { result:"W", round:"Demi · aller",    score:"3 – 0",      opponent:"Paris Saint-Germain (D)" },
        { result:"L", round:"Demi · retour",   score:"2 – 1",      opponent:"Paris Saint-Germain (E) · cumul 4-2 ✓" },
        { result:"L", round:"Finale",          score:"1 – 2",      opponent:"Liverpool (N) · finalistes" },
      ],
    },

    cup: {
      name: "FA Cup",
      rounds: [
        { result:"W", round:"3e tour", score:"1 – 4",      opponent:"Huddersfield (E)" },
        { result:"W", round:"4e tour", score:"5 – 1",      opponent:"Swansea (D)" },
        { result:"W", round:"5e tour", score:"3 – 0",      opponent:"Tottenham (D)" },
        { result:"W", round:"Quart",   score:"3 – 2",      opponent:"Man City (D)" },
        { result:"W", round:"Demi",    score:"3 – 2",      opponent:"Ipswich Town (N)" },
        { result:"W", round:"Finale",  score:"1 – 1 a.p.", opponent:"Liverpool (N) · vainqueur aux t.a.b. 🏆" },
      ],
    },

    cup3: {
      name: "Carabao Cup",
      rounds: [
        { result:"W", round:"3e tour",       score:"4 – 1",      opponent:"Cardiff (D)" },
        { result:"W", round:"4e tour",       score:"2 – 2 a.p.", opponent:"Wolves (D) · qualifié aux t.a.b." },
        { result:"W", round:"Quart",         score:"1 – 4",      opponent:"Sheffield United (E)" },
        { result:"W", round:"Demi · aller",  score:"3 – 1",      opponent:"Sunderland (D)" },
        { result:"W", round:"Demi · retour", score:"1 – 2",      opponent:"Sunderland (E) · cumul 5-2 ✓" },
        { result:"L", round:"Finale",        score:"0 – 3",      opponent:"Tottenham (N) · finalistes" },
      ],
    },

    playoffs: null,

    elTableTitle: "Classement · Phase de championnat (Ligue des Champions)",
    elTable: [
      { pos:1,  team:"Real Madrid",         j:8, g:8, n:0, l:0, bp:26, bc:10, db:16, pts:24, zone:"promo" },
      { pos:2,  team:"Paris Saint-Germain", j:8, g:6, n:1, l:1, bp:20, bc:7,  db:13, pts:19, zone:"promo" },
      { pos:3,  team:"Tottenham",           j:8, g:5, n:3, l:0, bp:17, bc:4,  db:13, pts:18, zone:"promo" },
      { pos:4,  team:"Barcelona",           j:8, g:5, n:3, l:0, bp:16, bc:3,  db:13, pts:18, zone:"promo" },
      { pos:5,  team:"Napoli",              j:8, g:5, n:2, l:1, bp:18, bc:8,  db:10, pts:17, zone:"promo" },
      { pos:6,  team:"Man City",            j:8, g:5, n:2, l:1, bp:19, bc:13, db:6,  pts:17, zone:"promo" },
      { pos:7,  team:"Marseille",           j:8, g:4, n:4, l:0, bp:14, bc:6,  db:8,  pts:16, zone:"promo" },
      { pos:8,  team:"Liverpool",           j:8, g:4, n:2, l:2, bp:21, bc:8,  db:13, pts:14, zone:"promo" },
      { pos:9,  team:"Arsenal",             j:8, g:4, n:2, l:2, bp:19, bc:10, db:9,  pts:14, highlight:true },
      { pos:10, team:"Bayern München",      j:8, g:4, n:1, l:3, bp:21, bc:17, db:4,  pts:13 },
      { pos:11, team:"Atlético de Madrid",  j:8, g:4, n:1, l:3, bp:14, bc:11, db:3,  pts:13 },
      { pos:12, team:"Newcastle",           j:8, g:3, n:3, l:2, bp:13, bc:8,  db:5,  pts:12 },
      { pos:13, team:"Chelsea",             j:8, g:3, n:3, l:2, bp:18, bc:14, db:4,  pts:12 },
      { pos:14, team:"Slavia Prague",       j:8, g:3, n:3, l:2, bp:14, bc:13, db:1,  pts:12 },
      { pos:15, team:"Galatasaray SK",      j:8, g:3, n:3, l:2, bp:11, bc:15, db:-4, pts:12 },
      { pos:16, team:"Eintracht Frankfurt", j:8, g:2, n:5, l:1, bp:16, bc:13, db:3,  pts:11 },
      { pos:17, team:"Sporting CP",         j:8, g:3, n:2, l:3, bp:12, bc:11, db:1,  pts:11 },
      { pos:18, team:"Bayer Leverkusen",    j:8, g:2, n:5, l:1, bp:8,  bc:7,  db:1,  pts:11 },
      { pos:19, team:"Bergamo",             j:8, g:2, n:4, l:2, bp:11, bc:11, db:0,  pts:10 },
      { pos:20, team:"Villarreal",          j:8, g:2, n:3, l:3, bp:9,  bc:9,  db:0,  pts:9 },
      { pos:21, team:"Dortmund",            j:8, g:2, n:3, l:3, bp:13, bc:14, db:-1, pts:9 },
      { pos:22, team:"Athletic Club",       j:8, g:2, n:3, l:3, bp:14, bc:19, db:-5, pts:9 },
      { pos:23, team:"Blu-neri",            j:8, g:1, n:5, l:2, bp:8,  bc:9,  db:-1, pts:8 },
      { pos:24, team:"Fenerbahçe",          j:8, g:2, n:2, l:4, bp:8,  bc:11, db:-3, pts:8 },
      { pos:25, team:"Monaco",              j:8, g:2, n:2, l:4, bp:15, bc:19, db:-4, pts:8, zone:"releg" },
      { pos:26, team:"Juventus",            j:8, g:2, n:2, l:4, bp:13, bc:17, db:-4, pts:8, zone:"releg" },
      { pos:27, team:"Ajax",                j:8, g:2, n:2, l:4, bp:9,  bc:14, db:-5, pts:8, zone:"releg" },
    ],

    standings: [
      { pos:1,  team:"Arsenal",        j:38, g:26, n:7,  l:5,  bp:104, bc:44, db:60,  pts:85, champion:true, highlight:true, zone:"promo" },
      { pos:2,  team:"Tottenham",      j:38, g:25, n:7,  l:6,  bp:75,  bc:34, db:41,  pts:82, zone:"promo" },
      { pos:3,  team:"Man City",       j:38, g:20, n:12, l:6,  bp:61,  bc:32, db:29,  pts:72, zone:"promo" },
      { pos:4,  team:"Liverpool",      j:38, g:20, n:10, l:8,  bp:71,  bc:35, db:36,  pts:70, zone:"promo" },
      { pos:5,  team:"Aston Villa",    j:38, g:19, n:11, l:8,  bp:64,  bc:47, db:17,  pts:68, zone:"promo" },
      { pos:6,  team:"Bournemouth",    j:38, g:21, n:4,  l:13, bp:63,  bc:50, db:13,  pts:67 },
      { pos:7,  team:"Chelsea",        j:38, g:18, n:10, l:10, bp:67,  bc:45, db:22,  pts:64 },
      { pos:8,  team:"Brentford",      j:38, g:17, n:5,  l:16, bp:58,  bc:66, db:-8,  pts:56 },
      { pos:9,  team:"Sunderland",     j:38, g:15, n:6,  l:17, bp:47,  bc:64, db:-17, pts:51 },
      { pos:10, team:"Fulham",         j:38, g:13, n:11, l:14, bp:47,  bc:51, db:-4,  pts:50 },
      { pos:11, team:"Wolves",         j:38, g:13, n:11, l:14, bp:41,  bc:53, db:-12, pts:50 },
      { pos:12, team:"Nottm Forest",   j:38, g:11, n:12, l:15, bp:45,  bc:49, db:-4,  pts:45 },
      { pos:13, team:"Newcastle",      j:38, g:12, n:9,  l:17, bp:54,  bc:61, db:-7,  pts:45 },
      { pos:14, team:"Everton",        j:38, g:11, n:12, l:15, bp:48,  bc:55, db:-7,  pts:45 },
      { pos:15, team:"Man Utd",        j:38, g:11, n:9,  l:18, bp:43,  bc:52, db:-9,  pts:42 },
      { pos:16, team:"Brighton",       j:38, g:10, n:11, l:17, bp:56,  bc:66, db:-10, pts:41 },
      { pos:17, team:"West Ham",       j:38, g:10, n:10, l:18, bp:35,  bc:64, db:-29, pts:40 },
      { pos:18, team:"Leeds Utd",      j:38, g:7,  n:8,  l:23, bp:39,  bc:65, db:-26, pts:29, zone:"releg" },
      { pos:19, team:"Crystal Palace", j:38, g:5,  n:11, l:22, bp:28,  bc:63, db:-35, pts:26, zone:"releg" },
      { pos:20, team:"Burnley",        j:38, g:3,  n:10, l:25, bp:27,  bc:77, db:-50, pts:19, zone:"releg" },
    ],

    transfers: [
      { type:"buy",  name:"Joane Gadou",       from:"Red Bull Salzburg",   date:"Été 2025",   amount:"17M €"   },
      { type:"buy",  name:"Matvey Safonov",    from:"Paris Saint-Germain", date:"Hiver 2026", amount:"9,75M €" },
      { type:"free", name:"Keisuke Osako",     from:"Libre de contrat",    date:"Hiver 2026" },
    ],
    departures: [
      { type:"sell", name:"Seb Ferdinand",     to:"Celtic",                date:"Été 2025",   amount:"500K €" },
      { type:"sell", name:"Osman Kamara",      to:"Southampton",           date:"Été 2025",   amount:"300K €" },
      { type:"sell", name:"Harrison Dudziak",  to:"Birmingham",            date:"Été 2025",   amount:"145K €" },
      { type:"loan", name:"Joane Gadou",       to:"Red Bull Salzburg",     date:"Été 2025" },
      { type:"loan", name:"Alexei Rojas Fedoruschchenko", to:"Bradford City", date:"Été 2025" },
      { type:"loan", name:"Josh Nichols",      to:"Stevenage",             date:"Été 2025" },
      { type:"loan", name:"Will Sweet",        to:"Waterford",             date:"Hiver 2026" },
    ],
  },

];
