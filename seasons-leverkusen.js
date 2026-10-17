/**
 * ═══════════════════════════════════════════════════════════
 *  BAYER 04 LEVERKUSEN — DONNÉES DES SAISONS
 *
 *  Même format que seasons-chateauroux.js :
 *  une saison = un objet (bilan, matchs de championnat,
 *  coupes, classements, stats, mercato, splash).
 * ═══════════════════════════════════════════════════════════
 */

window.SEASONS_leverkusen = [

  /* ─── SAISON 2025/26 · BUNDESLIGA · PODIUM ─── */
  {
    id:         "2025-26",
    year:       "2025/26",
    league:     "Bundesliga",
    position:   3,
    totalTeams: 18,
    points:     66,
    played:     34,
    wins:       20,
    draws:      6,
    losses:     8,
    gf:         75,
    ga:         42,
    relegated:  ["Mainz 05 (barrage)", "Hamburg", "St Pauli"],

    splash: {
      eyebrow:  "2025/26 · Bayer Leverkusen · Bundesliga",
      lines:    ["SUR LE", "PODIUM."],
      sub:      "Bundesliga · 3e · 66 pts · 8e de finale de Ligue des Champions",
      tagline:  "75 buts en Bundesliga et un Kofane de 19 ans à 21 réalisations : Leverkusen finit sur le podium, balaie l'Ajax en barrages et bat le Barça à l'aller avant de céder au retour.",
    },

    scorers: [
      { name: "Christian Kofane",     detail: "BU · Camerounais · 19 ans",  value: 21 },
      { name: "Malik Tillman",        detail: "MOC · Américain · 24 ans",   value: 16 },
      { name: "P. Schick · E. Poku",  detail: "BU / AD · ex-aequo",         value: 10 },
    ],
    assists: [
      { name: "Malik Tillman",        detail: "MOC · Américain · 24 ans",   value: 12 },
      { name: "Ernest Poku",          detail: "AD · Néerlandais · 22 ans",  value: 11 },
      { name: "Alejandro Grimaldo",   detail: "DG & ALG · Espagnol · 30 ans", value: 8 },
    ],
    ratings: [
      { name: "Christian Kofane",     detail: "20 tit. / 5 rempl. · 21 buts · 5 passes D.",  value: 7.35 },
      { name: "Edmond Tapsoba",       detail: "30 tit. / 4 rempl. · 2 buts · 2 passes D.",   value: 7.11 },
      { name: "Malik Tillman",        detail: "35 tit. / 9 rempl. · 16 buts · 12 passes D.", value: 7.03 },
    ],

    matches: [
      { r:"W", tip:"Hoffenheim (D) 4-1"          },
      { r:"W", tip:"Werder Bremen (E) 1-4"       },
      { r:"L", tip:"Eintracht Frankfurt (D) 0-1" },
      { r:"D", tip:"Gladbach (D) 2-2"            },
      { r:"W", tip:"St Pauli (E) 1-4"            },
      { r:"L", tip:"Union Berlin (D) 1-2"        },
      { r:"D", tip:"Mainz 05 (E) 2-2"            },
      { r:"W", tip:"Freiburg (D) 3-1"            },
      { r:"L", tip:"Bayern München (E) 2-1"      },
      { r:"W", tip:"Heidenheim (D) 3-0"          },
      { r:"W", tip:"Wolfsburg (E) 0-2"           },
      { r:"W", tip:"Dortmund (D) 4-2"            },
      { r:"W", tip:"Augsburg (E) 1-3"            },
      { r:"D", tip:"FC Köln (D) 1-1"             },
      { r:"L", tip:"RB Leipzig (E) 1-0"          },
      { r:"W", tip:"Stuttgart (D) 2-0"           },
      { r:"D", tip:"Hamburg (E) 0-0"             },
      { r:"L", tip:"Hoffenheim (E) 2-0"          },
      { r:"W", tip:"Werder Bremen (D) 5-3"       },
      { r:"L", tip:"Eintracht Frankfurt (E) 4-2" },
      { r:"D", tip:"Gladbach (E) 3-3"            },
      { r:"W", tip:"St Pauli (D) 3-0"            },
      { r:"W", tip:"Union Berlin (E) 1-2"        },
      { r:"W", tip:"Mainz 05 (D) 4-2"            },
      { r:"W", tip:"Freiburg (E) 0-4"            },
      { r:"L", tip:"Bayern München (D) 2-3"      },
      { r:"W", tip:"Heidenheim (E) 1-3"          },
      { r:"W", tip:"Wolfsburg (D) 2-1"           },
      { r:"L", tip:"Dortmund (E) 1-0"            },
      { r:"W", tip:"Augsburg (D) 1-0"            },
      { r:"D", tip:"FC Köln (E) 1-1"             },
      { r:"W", tip:"RB Leipzig (D) 2-1"          },
      { r:"W", tip:"Stuttgart (E) 1-3"           },
      { r:"W", tip:"Hamburg (D) 2-0"             },
    ],

    cup2: {
      name: "UEFA Champions League",
      phase: "Phase de championnat : 15ᵉ/36 · 3V 3N 2D · 12 pts · l'Ajax écarté en barrages (5-0), éliminé en 8e par le Barça (4-6 sur les deux matchs).",
      rounds: [
        { result:"W", round:"Phase · J1",       score:"4 – 2", opponent:"Bodø/Glimt (D)" },
        { result:"D", round:"Phase · J2",       score:"0 – 0", opponent:"Paris Saint-Germain (E)" },
        { result:"D", round:"Phase · J3",       score:"0 – 0", opponent:"Villarreal (E)" },
        { result:"L", round:"Phase · J4",       score:"0 – 3", opponent:"Newcastle (D)" },
        { result:"D", round:"Phase · J5",       score:"1 – 1", opponent:"Atalanta (D)" },
        { result:"W", round:"Phase · J6",       score:"1 – 0", opponent:"Barcelona (D)" },
        { result:"W", round:"Phase · J7",       score:"0 – 1", opponent:"Fenerbahçe (E)" },
        { result:"L", round:"Phase · J8",       score:"6 – 1", opponent:"Athletic Club (E)" },
        { result:"W", round:"Barrages · aller", score:"0 – 2", opponent:"Ajax (E)" },
        { result:"W", round:"Barrages · retour", score:"3 – 0", opponent:"Ajax (D) · cumul 5-0 ✓" },
        { result:"W", round:"8e · aller",       score:"3 – 2", opponent:"Barcelona (D)" },
        { result:"L", round:"8e · retour",      score:"4 – 1", opponent:"Barcelona (E) · cumul 4-6, éliminé" },
      ],
    },

    cup: {
      name: "DFB-Pokal",
      rounds: [
        { result:"W", round:"1er tour", score:"1 – 3", opponent:"Bamberg (E)" },
        { result:"W", round:"2e tour",  score:"3 – 0", opponent:"Schalke 04 (D)" },
        { result:"L", round:"3e tour",  score:"3 – 2", opponent:"Hoffenheim (E) · éliminé" },
      ],
    },

    playoffs: null,

    elTableTitle: "Classement · Phase de championnat (Ligue des Champions)",
    elTable: [
      { pos:1,  team:"Arsenal",             j:8, g:7, n:1, l:0, bp:22, bc:5,  db:17, pts:22, zone:"promo" },
      { pos:2,  team:"Real Madrid",         j:8, g:6, n:2, l:0, bp:22, bc:6,  db:16, pts:20, zone:"promo" },
      { pos:3,  team:"Newcastle",           j:8, g:6, n:1, l:1, bp:25, bc:14, db:11, pts:19, zone:"promo" },
      { pos:4,  team:"Tottenham",           j:8, g:6, n:0, l:2, bp:19, bc:7,  db:12, pts:18, zone:"promo" },
      { pos:5,  team:"Athletic Club",       j:8, g:5, n:2, l:1, bp:20, bc:10, db:10, pts:17, zone:"promo" },
      { pos:6,  team:"Barcelona",           j:8, g:5, n:1, l:2, bp:25, bc:7,  db:18, pts:16, zone:"promo" },
      { pos:7,  team:"Liverpool",           j:8, g:5, n:1, l:2, bp:17, bc:7,  db:10, pts:16, zone:"promo" },
      { pos:8,  team:"Atlético de Madrid",  j:8, g:5, n:1, l:2, bp:14, bc:6,  db:8,  pts:16, zone:"promo" },
      { pos:9,  team:"Slavia Prague",       j:8, g:5, n:1, l:2, bp:10, bc:8,  db:2,  pts:16 },
      { pos:10, team:"Man City",            j:8, g:4, n:2, l:2, bp:19, bc:12, db:7,  pts:14 },
      { pos:11, team:"Paris Saint-Germain", j:8, g:4, n:2, l:2, bp:15, bc:10, db:5,  pts:14 },
      { pos:12, team:"Inter",               j:8, g:4, n:2, l:2, bp:12, bc:7,  db:5,  pts:14 },
      { pos:13, team:"Galatasaray SK",      j:8, g:4, n:1, l:3, bp:14, bc:12, db:2,  pts:13 },
      { pos:14, team:"Napoli",              j:8, g:4, n:0, l:4, bp:11, bc:11, db:0,  pts:12 },
      { pos:15, team:"Bayer Leverkusen",    j:8, g:3, n:3, l:2, bp:8,  bc:12, db:-4, pts:12, highlight:true },
      { pos:16, team:"Bayern München",      j:8, g:4, n:0, l:4, bp:11, bc:16, db:-5, pts:12 },
      { pos:17, team:"Dortmund",            j:8, g:3, n:2, l:3, bp:15, bc:11, db:4,  pts:11 },
      { pos:18, team:"Juventus",            j:8, g:3, n:2, l:3, bp:11, bc:10, db:1,  pts:11 },
      { pos:19, team:"Atalanta",            j:8, g:2, n:4, l:2, bp:10, bc:12, db:-2, pts:10 },
      { pos:20, team:"Olympiacos",          j:8, g:3, n:1, l:4, bp:10, bc:13, db:-3, pts:10 },
      { pos:21, team:"Sturm Graz",          j:8, g:3, n:1, l:4, bp:9,  bc:13, db:-4, pts:10 },
      { pos:22, team:"Ajax",                j:8, g:3, n:1, l:4, bp:12, bc:18, db:-6, pts:10 },
      { pos:23, team:"Villarreal",          j:8, g:2, n:3, l:3, bp:7,  bc:10, db:-3, pts:9 },
      { pos:24, team:"Chelsea",             j:8, g:2, n:3, l:3, bp:5,  bc:9,  db:-4, pts:9 },
      { pos:25, team:"Marseille",           j:8, g:2, n:3, l:3, bp:10, bc:17, db:-7, pts:9, zone:"releg" },
      { pos:26, team:"PSV Eindhoven",       j:8, g:2, n:2, l:4, bp:6,  bc:13, db:-7, pts:8, zone:"releg" },
      { pos:27, team:"Bodø/Glimt",          j:8, g:2, n:2, l:4, bp:11, bc:19, db:-8, pts:8, zone:"releg" },
    ],

    standings: [
      { pos:1,  team:"Bayern München",      j:34, g:23, n:4,  l:7,  bp:76, bc:44, db:32,  pts:73, champion:true, zone:"promo" },
      { pos:2,  team:"Dortmund",            j:34, g:20, n:8,  l:6,  bp:67, bc:42, db:25,  pts:68, zone:"promo" },
      { pos:3,  team:"Bayer Leverkusen",    j:34, g:20, n:6,  l:8,  bp:75, bc:42, db:33,  pts:66, highlight:true, zone:"promo" },
      { pos:4,  team:"RB Leipzig",          j:34, g:20, n:4,  l:10, bp:59, bc:32, db:27,  pts:64, zone:"promo" },
      { pos:5,  team:"Eintracht Frankfurt", j:34, g:17, n:13, l:4,  bp:59, bc:40, db:19,  pts:64, zone:"promo" },
      { pos:6,  team:"Freiburg",            j:34, g:15, n:7,  l:12, bp:57, bc:51, db:6,   pts:52, zone:"promo" },
      { pos:7,  team:"Stuttgart",           j:34, g:15, n:6,  l:13, bp:51, bc:52, db:-1,  pts:51 },
      { pos:8,  team:"Gladbach",            j:34, g:12, n:10, l:12, bp:46, bc:35, db:11,  pts:46 },
      { pos:9,  team:"Union Berlin",        j:34, g:11, n:13, l:10, bp:45, bc:45, db:0,   pts:46 },
      { pos:10, team:"Augsburg",            j:34, g:12, n:9,  l:13, bp:62, bc:53, db:9,   pts:45 },
      { pos:11, team:"FC Köln",             j:34, g:11, n:11, l:12, bp:51, bc:57, db:-6,  pts:44 },
      { pos:12, team:"Wolfsburg",           j:34, g:9,  n:10, l:15, bp:27, bc:46, db:-19, pts:37 },
      { pos:13, team:"Heidenheim",          j:34, g:10, n:6,  l:18, bp:41, bc:51, db:-10, pts:36 },
      { pos:14, team:"Hoffenheim",          j:34, g:10, n:6,  l:18, bp:45, bc:56, db:-11, pts:36 },
      { pos:15, team:"Werder Bremen",       j:34, g:7,  n:13, l:14, bp:39, bc:55, db:-16, pts:34 },
      { pos:16, team:"Mainz 05",            j:34, g:9,  n:5,  l:20, bp:29, bc:56, db:-27, pts:32, zone:"releg" },
      { pos:17, team:"Hamburg",             j:34, g:8,  n:7,  l:19, bp:35, bc:64, db:-29, pts:31, zone:"releg" },
      { pos:18, team:"St Pauli",            j:34, g:4,  n:8,  l:22, bp:23, bc:66, db:-43, pts:20, zone:"releg" },
    ],

    transfers: [
      { type:"buy",  name:"Bradley Locko",       from:"Brest",        date:"Été 2025",   amount:"7,75M €" },
      { type:"loan", name:"Josh Acheampong",     from:"Chelsea",      date:"Été 2025" },
      { type:"buy",  name:"Kaio Jorge",          from:"Cruzeiro",     date:"Hiver 2026", amount:"21M €"   },
      { type:"buy",  name:"Moussa Diakité",      from:"Cadiz",        date:"Hiver 2026", amount:"4,6M €"  },
      { type:"buy",  name:"Noah Codjo-Evora",    from:"FC Bayern II", date:"Hiver 2026", amount:"25,5K €" },
    ],
    departures: [
      { type:"loan", name:"Naba Mensah",         to:"Hoffenheim",     date:"Été 2025" },
      { type:"loan", name:"Axel Tape",           to:"Derby County",   date:"Été 2025" },
      { type:"sell", name:"Francis Onyeka",      to:"Bayern München", date:"Hiver 2026", amount:"13,25M €" },
      { type:"loan", name:"Arthur",              to:"Espanyol",       date:"Hiver 2026" },
      { type:"loan", name:"Nathan Tella",        to:"Man Utd (achat obligatoire 19,25M€)", date:"Hiver 2026" },
    ],
  },

];
