/**
 * ═══════════════════════════════════════════════════════════
 *  LBC FM CAREER — DONNÉES DES SAISONS
 *
 *  Pour ajouter une saison :
 *    1. Copie le template en bas de ce fichier
 *    2. Remplis les champs
 *    3. Ajoute l'objet dans le tableau SEASONS
 *    4. Commit + push → GitHub Actions redéploie automatiquement
 * ═══════════════════════════════════════════════════════════
 */

export const SEASONS = [

  /* ─── SAISON 2025/26 ─────────────────────────────────── */
  {
    id:         "2025-26",
    year:       "2025/26",
    league:     "National",    // "National" | "Ligue 2" | "Ligue 1"
    position:   3,
    totalTeams: 17,
    points:     59,
    played:     32,
    wins:       17,
    draws:      8,
    losses:     7,
    gf:         61,
    ga:         39,
    promoted:   ["FC Rouen (Champion)", "Valenciennes"],
    relegated:  ["Dijon", "Stade Briochin", "Quevilly-Rouen"],

    scorers: [
      { name: "Corentin Jean",             detail: "BU · Français · 30 ans",            value: 18 },
      { name: "David Gomis",               detail: "AG · Bissau-Guinéen · 33 ans",       value: 13 },
      { name: "Schurrle",                  detail: "MC · Portugais · 24 ans",            value: 7  },
    ],
    assists: [
      { name: "Schurrle",                  detail: "MC · Portugais · 24 ans",            value: 15 },
      { name: "Tony Mendy",                detail: "AD · Sénégalais · 19 ans · Prêt Auxerre", value: 8 },
      { name: "Corentin Jean / Gomis / Djaha", detail: "Ex-aequo",                       value: 6  },
    ],
    ratings: [
      { name: "Schurrle",      detail: "MC · 24 ans", value: 7.32 },
      { name: "Corentin Jean", detail: "BU · 30 ans", value: 7.13 },
      { name: "David Gomis",   detail: "AG · 33 ans", value: 7.04 },
    ],

    transfers: [
      { type: "free", name: "Schurrle",        from: "Libre de contrat", date: "Juil. 2025" },
      { type: "free", name: "Quentin Bena",    from: "Botev Vraca",      date: "Juil. 2025" },
      { type: "loan", name: "Tony Mendy",      from: "Auxerre",          date: "Sept. 2025" },
      { type: "loan", name: "Gnangoro Bouare", from: "Real Betis",       date: "Fév. 2026"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "6e Tour", score: "1 – 2",  opponent: "SO Châtellerault (E)" },
        { result: "W", round: "7e Tour", score: "p2 – 2", opponent: "Grenoble (D)"          },
        { result: "W", round: "8e Tour", score: "0 – 2",  opponent: "Besançon Foot (E)"    },
        { result: "L", round: "9e Tour", score: "1 – 2",  opponent: "Angoulême CF (D)"     },
      ],
    },

    playoffs: {
      competition: "Barrages Ligue 2",
      opponent:    "Laval",
      outcome:     "Éliminé",
      leg1: { score: "3 – 2",  result: "W", venue: "Domicile"           },
      leg2: { score: "e1 – 0", result: "L", venue: "Extérieur (prol.)"  },
    },

    // Séquence des matchs — r: W=Victoire D=Nul L=Défaite, tip: description au survol
    matches: [
      { r:"W", tip:"FC Rouen (D) 4-1"             },
      { r:"D", tip:"Stade Briochin (E) 1-1"       },
      { r:"W", tip:"Paris 13 Atlético (D) 4-1"   },
      { r:"D", tip:"Caen (D) 1-1"                 },
      { r:"W", tip:"Dijon (E) 1-3"                },
      { r:"D", tip:"FC Fleury 91 (E) 2-2"         },
      { r:"L", tip:"Sochaux (D) 0-2"              },
      { r:"D", tip:"Concarneau (E) 1-1"           },
      { r:"W", tip:"Quevilly-Rouen (D) 3-1"       },
      { r:"W", tip:"Villefranche Beauj. (E) 2-3"  },
      { r:"L", tip:"Valenciennes (D) 0-1"         },
      { r:"D", tip:"Le Puy Foot 43 (E) 2-2"       },
      { r:"W", tip:"FC Versailles 78 (D) 3-0"     },
      { r:"W", tip:"Orléans (E) 0-1"              },
      { r:"W", tip:"Bourg-Péronnas (D) 6-1"       },
      { r:"D", tip:"SC Aubagne Air Bel (E) 2-2"   },
      { r:"L", tip:"FC Rouen (E) 3-0"             },
      { r:"W", tip:"Paris 13 Atlético (E) 1-3"   },
      { r:"W", tip:"FC Fleury 91 (D) 4-3"         },
      { r:"L", tip:"Caen (E) 1-0"                 },
      { r:"W", tip:"Dijon (D) 1-0"                },
      { r:"D", tip:"Sochaux (E) 1-1"              },
      { r:"W", tip:"Concarneau (D) 2-1"           },
      { r:"W", tip:"Quevilly-Rouen (E) 1-2"       },
      { r:"W", tip:"Villefranche Beauj. (D) 2-0"  },
      { r:"L", tip:"Valenciennes (E) 1-0"         },
      { r:"W", tip:"Le Puy Foot 43 (D) 2-1"       },
      { r:"L", tip:"FC Versailles 78 (E) 2-1"     },
      { r:"D", tip:"Orléans (D) 2-2"              },
      { r:"W", tip:"Bourg-Péronnas (E) 1-2"       },
      { r:"L", tip:"SC Aubagne Air Bel (D) 1-2"   },
      { r:"W", tip:"Stade Briochin (D) 2-0"       },
    ],

    splash: {
      eyebrow:  "2025/26 · Saison 1",
      lines:    ["SI PRÈS.", "SI LOIN."],
      sub:      "National · 3e · 59 pts",
      tagline:  "Éliminé par Laval en prolongations. LBC apprend ce que coûte la montée.",
    },

    standings: [
      { pos:1,  team:"FC Rouen",           j:32, g:19, n:7,  l:6,  bp:54, bc:31, db: 23, pts:64, zone:"promo"  },
      { pos:2,  team:"Valenciennes",        j:32, g:18, n:8,  l:6,  bp:42, bc:26, db: 16, pts:62, zone:"promo"  },
      { pos:3,  team:"Châteauroux",         j:32, g:17, n:8,  l:7,  bp:61, bc:39, db: 22, pts:59, highlight:true },
      { pos:4,  team:"Orléans",             j:32, g:15, n:9,  l:8,  bp:41, bc:31, db: 10, pts:54                },
      { pos:5,  team:"Sochaux",             j:32, g:12, n:14, l:6,  bp:47, bc:34, db: 13, pts:50                },
      { pos:6,  team:"FC Versailles 78",    j:32, g:13, n:9,  l:10, bp:32, bc:30, db:  2, pts:48                },
      { pos:7,  team:"Paris 13 Atlético",  j:32, g:13, n:9,  l:10, bp:39, bc:39, db:  0, pts:48                },
      { pos:8,  team:"FC Fleury 91",        j:32, g:12, n:12, l:8,  bp:37, bc:36, db:  1, pts:48                },
      { pos:9,  team:"Le Puy Foot 43",      j:32, g:13, n:8,  l:11, bp:45, bc:37, db:  8, pts:47                },
      { pos:10, team:"Caen",                j:32, g:11, n:7,  l:14, bp:44, bc:48, db: -4, pts:40                },
      { pos:11, team:"Villefranche Beauj.", j:32, g:10, n:10, l:12, bp:38, bc:36, db:  2, pts:40                },
      { pos:12, team:"SC Aubagne Air Bel",  j:32, g:10, n:9,  l:13, bp:38, bc:37, db:  1, pts:39                },
      { pos:13, team:"Bourg-Péronnas",      j:32, g:8,  n:11, l:13, bp:35, bc:44, db: -9, pts:35                },
      { pos:14, team:"Concarneau",          j:32, g:7,  n:10, l:15, bp:37, bc:49, db:-12, pts:31                },
      { pos:15, team:"Dijon",               j:32, g:7,  n:9,  l:16, bp:34, bc:48, db:-14, pts:30, zone:"releg"  },
      { pos:16, team:"Stade Briochin",      j:32, g:6,  n:7,  l:19, bp:24, bc:58, db:-34, pts:25, zone:"releg"  },
      { pos:17, team:"Quevilly-Rouen",      j:32, g:3,  n:9,  l:20, bp:22, bc:47, db:-25, pts:18, zone:"releg"  },
    ],
  },

  /* ─── SAISON 2026/27 ─────────────────────────────────── */
  {
    id:         "2026-27",
    year:       "2026/27",
    league:     "National",
    position:   1,
    totalTeams: 17,
    points:     70,
    played:     32,
    wins:       20,
    draws:      10,
    losses:     2,
    gf:         81,
    ga:         36,
    promoted:   ["Châteauroux (Champion)", "Orléans", "Rodez AF"],
    relegated:  ["SC Aubagne Air Bel", "St-Pryvé St-Hilaire FC", "FC Fleury 91"],

    scorers: [
      { name: "Duarte Bonito",                      detail: "AD · Portugais · 22 ans",              value: 15 },
      { name: "Schurrle",                           detail: "MC · Portugais · 25 ans",              value: 10 },
      { name: "Théo Trinker / Yannis Verdier",      detail: "MC/BU · Français · Ex-aequo",          value: 8  },
    ],
    assists: [
      { name: "Schurrle",                           detail: "MC · Portugais · 25 ans",              value: 13 },
      { name: "Théo Trinker",                       detail: "MC · Français · 25 ans",               value: 9  },
      { name: "Moustapha Fall / Duarte Bonito",     detail: "AD · Ex-aequo",                        value: 7  },
    ],
    ratings: [
      { name: "Schurrle",        detail: "MC · 25 ans", value: 7.40 },
      { name: "Abdul Aziz Issah",detail: "AD · Ghanéen · 21 ans", value: 7.39 },
      { name: "Duarte Bonito",   detail: "AD · 22 ans", value: 7.18 },
    ],

    transfers: [
      { type: "free", name: "Wassim Nia",          from: "Libre de contrat",  date: "Juin 2026"   },
      { type: "free", name: "Duarte Bonito",        from: "Libre de contrat",  date: "Juil. 2026"  },
      { type: "free", name: "Abdul Aziz Issah",     from: "Alverca B",         date: "Juil. 2026"  },
      { type: "loan", name: "Quilma",               from: "União de Leiria",   date: "Aoû. 2026"   },
      { type: "loan", name: "Yayo",                 from: "Cultural Leonesa",  date: "Aoû. 2026"   },
      { type: "free", name: "Tim-Justin Dietrich",  from: "Libre de contrat",  date: "Oct. 2026"   },
      { type: "free", name: "Itaitinga",            from: "Etoile-Carouge",    date: "Jan. 2027"   },
      { type: "free", name: "Tim Danhof",           from: "Libre de contrat",  date: "Jan. 2027"   },
      { type: "free", name: "Joachim Imbrechts",   from: "RSCA Futures",       date: "Juin 2027"   },
    ],

    departures: [
      { type: "free", name: "Amadou Konaté",   to: "Djoliba",                    date: "Juil. 2026" },
      { type: "free", name: "David Gomis",     to: "FK Qabala",                  date: "Juil. 2026" },
      { type: "loan", name: "Ilan Thobor",     to: "St. Ol. Romorantinais",      date: "Juil. 2026" },
      { type: "free", name: "Luca Cardinale",  to: "Nice",                       date: "Juil. 2026" },
      { type: "loan", name: "Tidiane Amani",   to: "FC Gueugnon",                date: "Aoû. 2026"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "6e Tour",  score: "1 – 2",  opponent: "Vendée Poiré-sur-Vie (E)" },
        { result: "W", round: "7e Tour",  score: "0 – 2",  opponent: "AS Yzeure (E)"             },
        { result: "W", round: "8e Tour",  score: "1 – 2",  opponent: "Orléans (E)"               },
        { result: "L", round: "9e Tour",  score: "2 – 1",  opponent: "Pau (E)"                   },
      ],
    },

    playoffs: null,

    splash: {
      eyebrow:  "2026/27 · Premier titre",
      lines:    ["UN AN APRÈS", "LES BARRAGES."],
      sub:      "National · Champions · 70 pts",
      tagline:  "LBC ne rate plus. LBC remporte tout. Direction la Ligue 2.",
    },

    matches: [
      { r:"L", tip:"AS Cannes (E) 3-2"                 },
      { r:"D", tip:"Bourg-Péronnas (D) 1-1"            },
      { r:"W", tip:"Caen (E) 0-5"                      },
      { r:"W", tip:"Bordeaux (D) 2-1"                  },
      { r:"D", tip:"Boulogne (E) 4-4"                  },
      { r:"D", tip:"Sochaux (D) 2-2"                   },
      { r:"W", tip:"FC Fleury 91 (E) 1-4"              },
      { r:"D", tip:"Rodez AF (D) 2-2"                  },
      { r:"D", tip:"Orléans (E) 1-1"                   },
      { r:"W", tip:"St-Pryvé St-Hilaire (D) 3-1"       },
      { r:"W", tip:"SC Aubagne Air Bel (E) 0-2"        },
      { r:"W", tip:"Le Puy Foot 43 (D) 3-1"            },
      { r:"D", tip:"Villefranche Beaujolais (E) 0-0"   },
      { r:"W", tip:"Concarneau (D) 4-3"                },
      { r:"D", tip:"Paris 13 Atlético (E) 1-1"         },
      { r:"W", tip:"Bourg-Péronnas (E) 1-4"            },
      { r:"W", tip:"FC Versailles 78 (E) 1-2"          },
      { r:"D", tip:"Caen (D) 0-0"                      },
      { r:"W", tip:"Bordeaux (E) 1-2"                  },
      { r:"W", tip:"Boulogne (D) 4-0"                  },
      { r:"W", tip:"Sochaux (E) 0-2"                   },
      { r:"W", tip:"FC Fleury 91 (D) 5-2"              },
      { r:"L", tip:"Rodez AF (E) 2-1"                  },
      { r:"D", tip:"Orléans (D) 1-1"                   },
      { r:"W", tip:"St-Pryvé St-Hilaire (E) 1-2"       },
      { r:"W", tip:"SC Aubagne Air Bel (D) 4-1"        },
      { r:"W", tip:"Le Puy Foot 43 (E) 1-5"            },
      { r:"W", tip:"Villefranche Beaujolais (D) 2-1"   },
      { r:"W", tip:"Concarneau (E) 2-4"                },
      { r:"W", tip:"Paris 13 Atlético (D) 4-0"         },
      { r:"D", tip:"AS Cannes (D) 1-1"                 },
    ],

    standings: [
      { pos:1,  team:"Châteauroux",           j:32, g:20, n:10, l:2,  bp:81, bc:36, db: 45, pts:70, zone:"promo", highlight:true },
      { pos:2,  team:"Orléans",               j:32, g:19, n:8,  l:5,  bp:51, bc:21, db: 30, pts:65, zone:"promo" },
      { pos:3,  team:"Rodez AF",              j:32, g:18, n:8,  l:6,  bp:62, bc:41, db: 21, pts:62, zone:"promo" },
      { pos:4,  team:"Sochaux",               j:32, g:17, n:7,  l:8,  bp:58, bc:41, db: 17, pts:58              },
      { pos:5,  team:"Bordeaux",              j:32, g:17, n:4,  l:11, bp:58, bc:45, db: 13, pts:55              },
      { pos:6,  team:"Villefranche Beauj.",   j:32, g:13, n:9,  l:10, bp:32, bc:29, db:  3, pts:48              },
      { pos:7,  team:"FC Versailles 78",      j:32, g:13, n:5,  l:14, bp:40, bc:48, db: -8, pts:44              },
      { pos:8,  team:"Concarneau",            j:32, g:11, n:10, l:11, bp:41, bc:37, db:  4, pts:43              },
      { pos:9,  team:"Boulogne",              j:32, g:11, n:10, l:11, bp:41, bc:45, db: -4, pts:43              },
      { pos:10, team:"AS Cannes",             j:32, g:9,  n:12, l:11, bp:30, bc:34, db: -4, pts:39              },
      { pos:11, team:"Caen",                  j:32, g:10, n:8,  l:14, bp:37, bc:49, db:-12, pts:38              },
      { pos:12, team:"Bourg-Péronnas",        j:32, g:8,  n:11, l:13, bp:35, bc:43, db: -8, pts:35              },
      { pos:13, team:"Le Puy Foot 43",        j:32, g:9,  n:6,  l:17, bp:33, bc:47, db:-14, pts:33              },
      { pos:14, team:"Paris 13 Atlético",    j:32, g:6,  n:12, l:14, bp:35, bc:43, db: -8, pts:30              },
      { pos:15, team:"SC Aubagne Air Bel",    j:32, g:6,  n:11, l:15, bp:28, bc:46, db:-18, pts:29, zone:"releg" },
      { pos:16, team:"St-Pryvé St-Hilaire",  j:32, g:6,  n:10, l:16, bp:39, bc:58, db:-19, pts:28, zone:"releg" },
      { pos:17, team:"FC Fleury 91",          j:32, g:5,  n:7,  l:20, bp:34, bc:72, db:-38, pts:22, zone:"releg" },
    ],
  },

  /* ─── SAISON 2027/28 ─────────────────────────────────── */
  {
    id:         "2027-28",
    year:       "2027/28",
    league:     "Ligue 2",
    position:   1,
    totalTeams: 18,
    points:     74,
    played:     34,
    wins:       23,
    draws:      5,
    losses:     6,
    gf:         79,
    ga:         38,
    promoted:   ["Châteauroux (Champion)", "Rodez AF"],
    relegated:  ["Le Mans FC", "Red Star", "Valenciennes"],

    scorers: [
      { name: "Dilan Neves",   detail: "BU · Portugais · 20 ans · Prêt Benfica", value: 15 },
      { name: "Itaitinga",     detail: "AG · Brésilien · 29 ans",                value: 12 },
      { name: "Schurrle",      detail: "MC · Portugais · 26 ans",                value: 9  },
    ],
    assists: [
      { name: "Schurrle",          detail: "MC · Portugais · 26 ans",  value: 11 },
      { name: "Itaitinga",         detail: "AG · Brésilien · 29 ans",  value: 8  },
      { name: "Abdul Aziz Issah",  detail: "AD · Ghanéen · 22 ans",    value: 6  },
    ],
    ratings: [
      { name: "Corentin Jean",  detail: "BU · Français · 32 ans",   value: 7.20 },
      { name: "Duarte Bonito",  detail: "AD · Portugais · 23 ans",  value: 7.12 },
      { name: "Itaitinga",      detail: "AG · Brésilien · 29 ans",  value: 7.11 },
    ],

    transfers: [
      { type: "sell", name: "Maxence Carlier",   from: "FC Annecy",          date: "Juin 2027"  },
      { type: "sell", name: "Quilma",             from: "União de Leiria",    date: "Juin 2027"  },
      { type: "sell", name: "Francois Habineza",  from: "APR FC",             date: "Juil. 2027" },
      { type: "free", name: "Noham Bettahar",     from: "Sedan",              date: "Juil. 2027" },
      { type: "loan", name: "Ilies Bouramala",    from: "Lens",               date: "Aoû. 2027"  },
      { type: "free", name: "Miguel Cruz",        from: "União de Leiria",    date: "Aoû. 2027"  },
      { type: "free", name: "Pacôme Glais",       from: "SO Cholet",          date: "Aoû. 2027"  },
      { type: "loan", name: "Dilan Neves",        from: "Benfica",            date: "Aoû. 2027"  },
      { type: "loan", name: "Thierno Bah",        from: "Reims",              date: "Fév. 2028"  },
      { type: "loan", name: "Adrian Székely",     from: "Dinamo București",   date: "Juin 2028"  },
      { type: "loan", name: "Darius Negru",       from: "Rapid București",    date: "Juin 2028"  },
    ],

    departures: [
      { type: "loan", name: "Emmanuel Alamele",   to: "Vierzon FC",              date: "Juil. 2027" },
      { type: "loan", name: "Tidiane Amani",      to: "Union Foot de Touraine",  date: "Juil. 2027" },
      { type: "loan", name: "Jean Diamandé",      to: "Boulogne",                date: "Juil. 2027" },
      { type: "loan", name: "Enzo Goes",          to: "AS Yzeure",               date: "Juil. 2027" },
      { type: "loan", name: "Abdoulaye Raynaud",  to: "AS Panazol",              date: "Jan. 2028"  },
      { type: "loan", name: "Nicolas Chapuis",    to: "Vendée Fontenay",         date: "Fév. 2028"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "7e Tour",         score: "0 – 0 p",  opponent: "AS Saint-Priest (E) — v. aux tirs au but" },
        { result: "W", round: "8e Tour",         score: "4 – 0",    opponent: "Nancy (D)"                                 },
        { result: "W", round: "9e Tour",         score: "3 – 2",    opponent: "Bordeaux (D)"                              },
        { result: "W", round: "10e Tour",        score: "1 – 3",    opponent: "Lyon-La Duchère (E)"                       },
        { result: "W", round: "11e Tour",        score: "1 – 2",    opponent: "Lille (E)"                                 },
        { result: "L", round: "Quart de finale", score: "5 – 0",    opponent: "Marseille (E)"                             },
      ],
    },

    playoffs: null,

    splash: {
      eyebrow:  "2026/27 · 2027/28",
      lines:    ["DEUX TITRES.", "DEUX DIVISIONS."],
      sub:      "National → Ligue 2",
      tagline:  "Châteauroux ne monte pas. Elle domine.",
    },

    matches: [
      { r:"W", tip:"Angers (E) 2-3"             },
      { r:"W", tip:"FC Rouen (D) 3-2"           },
      { r:"W", tip:"Le Mans FC (E) 0-3"         },
      { r:"L", tip:"Orléans (D) 1-2"            },
      { r:"W", tip:"Montpellier (E) 1-7"        },
      { r:"W", tip:"Valenciennes (D) 1-0"       },
      { r:"W", tip:"Clermont Foot (E) 1-3"      },
      { r:"W", tip:"Red Star (D) 4-0"           },
      { r:"L", tip:"Bastia (E) 2-1"             },
      { r:"W", tip:"Amiens (D) 3-1"             },
      { r:"W", tip:"Grenoble (E) 0-1"           },
      { r:"W", tip:"Troyes (D) 2-1"             },
      { r:"L", tip:"Rodez AF (E) 3-1"           },
      { r:"W", tip:"USL Dunkerque (D) 4-2"      },
      { r:"W", tip:"Pau (D) 4-2"                },
      { r:"W", tip:"Auxerre (E) 0-2"            },
      { r:"D", tip:"Nancy (D) 1-1"              },
      { r:"W", tip:"Angers (D) 4-1"             },
      { r:"W", tip:"Le Mans FC (D) 2-1"         },
      { r:"D", tip:"Orléans (E) 1-1"            },
      { r:"W", tip:"Montpellier (D) 4-1"        },
      { r:"W", tip:"Valenciennes (E) 1-3"       },
      { r:"L", tip:"Clermont Foot (D) 0-1"      },
      { r:"L", tip:"Red Star (E) 1-0"           },
      { r:"W", tip:"Bastia (D) 2-1"             },
      { r:"W", tip:"Amiens (E) 0-1"             },
      { r:"D", tip:"Grenoble (D) 0-0"           },
      { r:"W", tip:"Troyes (E) 1-3"             },
      { r:"L", tip:"Rodez AF (D) 1-2"           },
      { r:"W", tip:"USL Dunkerque (E) 2-5"      },
      { r:"D", tip:"Pau (E) 0-0"                },
      { r:"W", tip:"Auxerre (D) 4-3"            },
      { r:"D", tip:"Nancy (E) 1-1"              },
      { r:"W", tip:"FC Rouen (E) 1-4"           },
    ],

    standings: [
      { pos:1,  team:"Châteauroux",   j:34, g:23, n:5,  l:6,  bp:79, bc:38, db: 41, pts:74, zone:"promo", highlight:true },
      { pos:2,  team:"Rodez AF",      j:34, g:18, n:9,  l:7,  bp:56, bc:41, db: 15, pts:63, zone:"promo"                },
      { pos:3,  team:"Angers",        j:34, g:19, n:3,  l:12, bp:52, bc:40, db: 12, pts:60                              },
      { pos:4,  team:"Auxerre",       j:34, g:17, n:7,  l:10, bp:57, bc:40, db: 17, pts:58                              },
      { pos:5,  team:"Bastia",        j:34, g:15, n:13, l:6,  bp:54, bc:38, db: 16, pts:58                              },
      { pos:6,  team:"Nancy",         j:34, g:14, n:11, l:9,  bp:58, bc:49, db:  9, pts:53                              },
      { pos:7,  team:"Troyes",        j:34, g:14, n:9,  l:11, bp:49, bc:41, db:  8, pts:51                              },
      { pos:8,  team:"Amiens",        j:34, g:14, n:7,  l:13, bp:44, bc:44, db:  0, pts:49                              },
      { pos:9,  team:"Orléans",       j:34, g:14, n:6,  l:14, bp:40, bc:35, db:  5, pts:48                              },
      { pos:10, team:"Grenoble",      j:34, g:11, n:12, l:11, bp:39, bc:38, db:  1, pts:45                              },
      { pos:11, team:"Montpellier",   j:34, g:11, n:12, l:11, bp:41, bc:43, db: -2, pts:45                              },
      { pos:12, team:"USL Dunkerque", j:34, g:10, n:10, l:14, bp:53, bc:59, db: -6, pts:40                              },
      { pos:13, team:"Pau",           j:34, g:10, n:9,  l:15, bp:40, bc:48, db: -8, pts:39                              },
      { pos:14, team:"Clermont Foot", j:34, g:9,  n:9,  l:16, bp:28, bc:40, db:-12, pts:36                              },
      { pos:15, team:"FC Rouen",      j:34, g:10, n:6,  l:18, bp:35, bc:51, db:-16, pts:36                              },
      { pos:16, team:"Le Mans FC",    j:34, g:8,  n:8,  l:18, bp:28, bc:45, db:-17, pts:32, zone:"releg"               },
      { pos:17, team:"Red Star",      j:34, g:7,  n:11, l:16, bp:27, bc:49, db:-22, pts:32, zone:"releg"               },
      { pos:18, team:"Valenciennes",  j:34, g:4,  n:9,  l:21, bp:24, bc:65, db:-41, pts:21, zone:"releg"               },
    ],
  },

  /* ─── SAISON 2028/29 ─────────────────────────────────── */
  {
    id:         "2028-29",
    year:       "2028/29",
    league:     "Ligue 1",
    position:   12,
    totalTeams: 18,
    points:     42,
    played:     34,
    wins:       11,
    draws:      9,
    losses:     14,
    gf:         54,
    ga:         62,
    promoted:   [],
    relegated:  ["Le Havre", "Reims", "Paris FC"],

    scorers: [
      { name: "Dilan Neves",   detail: "BU · Portugais · 21 ans",                   value: 14 },
      { name: "Thibo Baeten",  detail: "BU · Belge · 27 ans",                        value: 12 },
      { name: "Daniel Bulle",  detail: "BU · Français · 18 ans · Régen",             value: 9  },
    ],
    assists: [
      { name: "Dilan Neves",    detail: "BU · Portugais · 21 ans",                   value: 11 },
      { name: "Daniel Bulle",   detail: "BU · Français · 18 ans · Régen",            value: 9  },
      { name: "Junior Ndiaye",  detail: "BU · Émirien · 24 ans · Prêt Montpellier",  value: 6  },
    ],
    ratings: [
      { name: "Daniel Bulle",  detail: "BU · 18 ans · Régen",                value: 7.26 },
      { name: "Junior Ndiaye", detail: "BU · 24 ans · Prêt Montpellier",     value: 7.15 },
      { name: "Dilan Neves",   detail: "BU · 21 ans",                        value: 7.13 },
    ],

    transfers: [
      { type: "sell", name: "Amady Camara",     from: "Cercle Brugge",       date: "Juin 2028"  },
      { type: "sell", name: "Dilan Neves",       from: "Benfica",             date: "Juin 2028"  },
      { type: "loan", name: "João Costa",        from: "Porto",               date: "Juil. 2028" },
      { type: "sell", name: "Melvin Rémy",       from: "Pro Vercelli",        date: "Juil. 2028" },
      { type: "loan", name: "Tiago Leitão",      from: "Lusitânia Lourosa",   date: "Juil. 2028" },
      { type: "sell", name: "Thibo Baeten",      from: "Go Ahead Eagles",     date: "Juil. 2028" },
      { type: "free", name: "Djawell Nebor",     from: "Lannion FC",          date: "Aoû. 2028"  },
      { type: "loan", name: "David Lelle",       from: "Dortmund",            date: "Aoû. 2028"  },
      { type: "loan", name: "Junior Ndiaye",     from: "Montpellier",         date: "Aoû. 2028"  },
      { type: "sell", name: "Dani Silva",        from: "FC Midtjylland",      date: "Aoû. 2028"  },
      { type: "sell", name: "Islamdine Halifa",  from: "Red Star",            date: "Aoû. 2028"  },
      { type: "sell", name: "Nick Twisk",        from: "ADO Den Haag",        date: "Aoû. 2028"  },
      { type: "free", name: "Yeimar Mosquera",   from: "Libre de contrat",    date: "Jan. 2029"  },
      { type: "free", name: "Damián",            from: "Libre de contrat",    date: "Jan. 2029"  },
      { type: "free", name: "Monfils Nganga",    from: "Sarreguemines FC",    date: "Fév. 2029"  },
    ],

    departures: [
      { type: "loan", name: "Pierre Maillet",      to: "Blois Foot 41",           date: "Juin 2028"  },
      { type: "loan", name: "Mathieu Esnault",     to: "FC Montlouis",            date: "Juil. 2028" },
      { type: "loan", name: "Cheick Traoré",       to: "FC Montlouis",            date: "Juil. 2028" },
      { type: "loan", name: "Lhin Wachter",        to: "Blois Foot 41",           date: "Juil. 2028" },
      { type: "loan", name: "Jean Diamandé",       to: "Orléans",                 date: "Juil. 2028" },
      { type: "loan", name: "Khaled Benoit",       to: "FC Annecy",               date: "Juil. 2028" },
      { type: "loan", name: "Jean-Yves Elissalde", to: "US Lusitanos Saint-Maur", date: "Aoû. 2028"  },
      { type: "loan", name: "Itaitinga",           to: "GUA",                     date: "Jan. 2029"  },
      { type: "sell", name: "Duarte Bonito",       to: "Tondela",                 date: "Juin 2029"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "9e Tour",         score: "1 – 3",  opponent: "Dijon (E)"           },
        { result: "W", round: "10e Tour",        score: "1 – 3",  opponent: "Clermont Foot (E)"   },
        { result: "W", round: "11e Tour",        score: "0 – 1",  opponent: "AF Virois (E)"       },
        { result: "W", round: "Quart de finale", score: "0 – 1",  opponent: "Nantes (E)"          },
        { result: "W", round: "Demi-finale",     score: "1 – 3",  opponent: "Strasbourg (E)"      },
        { result: "L", round: "Finale",          score: "1 – 3",  opponent: "Paris Saint-Germain (N)" },
      ],
    },

    playoffs: null,

    splash: {
      eyebrow:  "2028/29 · Ligue 1 · Saison 4",
      lines:    ["BIENVENUE", "DANS L'ÉLITE."],
      sub:      "Ligue 1 · 12e · Finalistes de la Coupe de France",
      tagline:  "LBC tient son rang face aux plus grands. Une finale contre le PSG — le monde entier regardait Châteauroux.",
    },

    matches: [
      { r:"L", tip:"Marseille (D) 0-2"             },
      { r:"L", tip:"Strasbourg (E) 3-2"            },
      { r:"L", tip:"Nice (E) 4-3"                  },
      { r:"D", tip:"Reims (D) 3-3"                 },
      { r:"W", tip:"Rennes (E) 0-1"                },
      { r:"W", tip:"Toulouse (D) 6-1"              },
      { r:"W", tip:"Paris FC (E) 1-2"              },
      { r:"L", tip:"Lens (D) 1-3"                  },
      { r:"L", tip:"Monaco (E) 3-1"                },
      { r:"D", tip:"Saint-Étienne (D) 1-1"         },
      { r:"W", tip:"Lyon (E) 0-1"                  },
      { r:"D", tip:"Metz (D) 0-0"                  },
      { r:"W", tip:"Lorient (E) 2-4"               },
      { r:"W", tip:"Rodez AF (D) 4-1"              },
      { r:"L", tip:"Paris Saint-Germain (E) 6-0"   },
      { r:"W", tip:"Lille (D) 2-0"                 },
      { r:"W", tip:"Le Havre (E) 1-3"              },
      { r:"L", tip:"Marseille (E) 2-0"             },
      { r:"D", tip:"Reims (E) 2-2"                 },
      { r:"D", tip:"Rennes (D) 2-2"                },
      { r:"W", tip:"Paris FC (D) 3-1"              },
      { r:"L", tip:"Toulouse (E) 1-0"              },
      { r:"W", tip:"Lens (E) 1-2"                  },
      { r:"D", tip:"Strasbourg (D) 1-1"            },
      { r:"L", tip:"Monaco (D) 0-2"                },
      { r:"L", tip:"Saint-Étienne (E) 3-1"         },
      { r:"W", tip:"Lyon (D) 1-0"                  },
      { r:"D", tip:"Metz (E) 1-1"                  },
      { r:"D", tip:"Lorient (D) 3-3"               },
      { r:"L", tip:"Rodez AF (E) 1-0"              },
      { r:"L", tip:"Paris Saint-Germain (D) 0-1"   },
      { r:"L", tip:"Lille (E) 5-1"                 },
      { r:"D", tip:"Le Havre (D) 2-2"              },
      { r:"L", tip:"Nice (D) 1-3"                  },
    ],

    standings: [
      { pos:1,  team:"Nice",                j:34, g:26, n:2,  l:6,  bp:80, bc:37, db: 43, pts:80, zone:"promo" },
      { pos:2,  team:"Paris Saint-Germain", j:34, g:25, n:2,  l:7,  bp:86, bc:23, db: 63, pts:77, zone:"promo" },
      { pos:3,  team:"Monaco",              j:34, g:20, n:7,  l:7,  bp:58, bc:38, db: 20, pts:67, zone:"promo" },
      { pos:4,  team:"Lille",               j:34, g:19, n:6,  l:9,  bp:65, bc:41, db: 24, pts:63              },
      { pos:5,  team:"Toulouse",            j:34, g:18, n:8,  l:8,  bp:57, bc:39, db: 18, pts:62              },
      { pos:6,  team:"Lens",                j:34, g:19, n:4,  l:11, bp:50, bc:26, db: 24, pts:61              },
      { pos:7,  team:"Marseille",           j:34, g:16, n:7,  l:11, bp:53, bc:40, db: 13, pts:55              },
      { pos:8,  team:"Strasbourg",          j:34, g:13, n:8,  l:13, bp:45, bc:48, db: -3, pts:47              },
      { pos:9,  team:"Metz",                j:34, g:14, n:5,  l:15, bp:43, bc:54, db:-11, pts:47              },
      { pos:10, team:"Lyon",                j:34, g:13, n:6,  l:15, bp:48, bc:54, db: -6, pts:45              },
      { pos:11, team:"Rennes",              j:34, g:12, n:6,  l:16, bp:58, bc:53, db:  5, pts:42              },
      { pos:12, team:"Châteauroux",         j:34, g:11, n:9,  l:14, bp:54, bc:62, db: -8, pts:42, highlight:true },
      { pos:13, team:"Lorient",             j:34, g:11, n:7,  l:16, bp:50, bc:60, db:-10, pts:40              },
      { pos:14, team:"Saint-Étienne",       j:34, g:7,  n:9,  l:18, bp:40, bc:63, db:-23, pts:30              },
      { pos:15, team:"Rodez AF",            j:34, g:8,  n:5,  l:21, bp:35, bc:72, db:-37, pts:29              },
      { pos:16, team:"Le Havre",            j:34, g:5,  n:9,  l:20, bp:34, bc:67, db:-33, pts:24, zone:"releg" },
      { pos:17, team:"Reims",               j:34, g:5,  n:9,  l:20, bp:34, bc:72, db:-38, pts:24, zone:"releg" },
      { pos:18, team:"Paris FC",            j:34, g:5,  n:9,  l:20, bp:42, bc:83, db:-41, pts:24, zone:"releg" },
    ],
  },

  /* ─── SAISON 2029/30 ─────────────────────────────────── */
  {
    id:         "2029-30",
    year:       "2029/30",
    league:     "Ligue 1",
    position:   8,
    totalTeams: 18,
    points:     51,
    played:     34,
    wins:       16,
    draws:      3,
    losses:     15,
    gf:         63,
    ga:         55,
    promoted:   [],
    relegated:  ["Troyes", "Amiens", "Nantes"],

    scorers: [
      { name: "Dilan Neves",    detail: "BU · Portugais · 22 ans",                         value: 18 },
      { name: "Schurrle",       detail: "MC · Portugais · 28 ans",                         value: 11 },
      { name: "Alan Virginius", detail: "AD · Français · 27 ans · Prêt Young Boys",        value: 8  },
    ],
    assists: [
      { name: "Alan Virginius",  detail: "AD · Français · 27 ans · Prêt Young Boys",       value: 9  },
      { name: "Leandro Santos",  detail: "ALD · Portugais · 24 ans · Prêt Famalicão",      value: 7  },
      { name: "Simão Silva / Elliot Stroud", detail: "AG/ALG · Ex-aequo",                  value: 6  },
    ],
    ratings: [
      { name: "Dilan Neves",    detail: "BU · 22 ans",                              value: 7.12 },
      { name: "Elliot Stroud",  detail: "ALG · Suédois · 27 ans · Prêt Porto",     value: 7.06 },
      { name: "Leandro Santos", detail: "ALD · Portugais · 24 ans · Prêt Famalicão", value: 7.06 },
    ],

    transfers: [
      { type: "sell", name: "Adrian Gantenbein", from: "Yverdon",                date: "Juin 2029"  },
      { type: "sell", name: "Junior Ndiaye",     from: "Montpellier",            date: "Juil. 2029" },
      { type: "sell", name: "David Lelle",       from: "Dortmund",               date: "Juil. 2029" },
      { type: "sell", name: "Daniel Peretz",     from: "Paris FC",               date: "Juil. 2029" },
      { type: "free", name: "Leart Dubovci",     from: "FC Emmen",               date: "Juil. 2029" },
      { type: "free", name: "Amos Mpanzu",       from: "Libre de contrat",       date: "Juil. 2029" },
      { type: "loan", name: "Enric Llansana",    from: "Anderlecht",             date: "Aoû. 2029"  },
      { type: "loan", name: "Simão Silva",       from: "Estrela da Amadora SAD", date: "Aoû. 2029"  },
      { type: "free", name: "Hacene Zaanane",    from: "Créteil",                date: "Aoû. 2029"  },
      { type: "free", name: "Fedde Westra",      from: "Helmond Sport",          date: "Aoû. 2029"  },
      { type: "loan", name: "Alan Virginius",    from: "Young Boys",             date: "Aoû. 2029"  },
      { type: "loan", name: "Leandro Santos",    from: "Famalicão",              date: "Sep. 2029"  },
      { type: "loan", name: "Elliot Stroud",     from: "Porto",                  date: "Sep. 2029"  },
      { type: "sell", name: "Zakaria Ariss",     from: "Bastia",                 date: "Jan. 2030"  },
      { type: "sell", name: "Diogo Martins",     from: "Porto",                  date: "Jan. 2030"  },
      { type: "sell", name: "Manuel Simões",     from: "Sporting CP",            date: "Jan. 2030"  },
    ],

    departures: [
      { type: "free", name: "Joachim Imbrechts",  to: "IK Oddevold",              date: "Juil. 2029" },
      { type: "sell", name: "Lucas Lavallée",     to: "Boulogne",                 date: "Juil. 2029" },
      { type: "loan", name: "Jules Caglioni",     to: "Valenciennes",             date: "Juil. 2029" },
      { type: "loan", name: "Said Weibel",        to: "Union Foot de Touraine",   date: "Juil. 2029" },
      { type: "loan", name: "Ayoub Boukhriss",    to: "Boulogne",                 date: "Juil. 2029" },
      { type: "sell", name: "Abdul Aziz Issah",   to: "Lommel",                   date: "Juil. 2029" },
      { type: "loan", name: "Jean Diamandé",      to: "USL Dunkerque",            date: "Aoû. 2029"  },
      { type: "loan", name: "Valentin Labrousse", to: "C' Chartres Football",     date: "Aoû. 2029"  },
      { type: "loan", name: "Philippe Defains",   to: "Hellas Verona",            date: "Aoû. 2029"  },
      { type: "sell", name: "Nick Twisk",         to: "AaB",                      date: "Sep. 2029"  },
      { type: "loan", name: "Quilma",             to: "Grenoble",                 date: "Oct. 2029"  },
      { type: "loan", name: "Junior Ndiaye",      to: "Racing de Santander",      date: "Jan. 2030"  },
      { type: "sell", name: "Daniel Bulle",       to: "Metz",                     date: "Jan. 2030"  },
      { type: "loan", name: "Thierry Ilunga",     to: "St-Pryvé St-Hilaire FC",   date: "Jan. 2030"  },
      { type: "sell", name: "El Hadji Diouf",     to: "Nancy",                    date: "Fév. 2030"  },
      { type: "loan", name: "Dmytro Bondarenko",  to: "Inhulets",                 date: "Fév. 2030"  },
      { type: "sell", name: "Dani Silva",         to: "San Diego FC",             date: "Mar. 2030"  },
      { type: "sell", name: "Amady Camara",       to: "Clermont Foot",            date: "Juin 2030"  },
      { type: "free", name: "Hacene Zaanane",     to: "FC Annecy",                date: "Juin 2030"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "9e Tour",  score: "0 – 3",  opponent: "ASPTT Dijon (E)" },
        { result: "L", round: "10e Tour", score: "1 – 2",  opponent: "Lille (D)"       },
      ],
    },

    playoffs: null,

    splash: {
      eyebrow:  "2029/30 · Saison 5 · Ligue 1",
      lines:    ["ON S'INSTALLE.", "ON GRANDIT."],
      sub:      "Ligue 1 · 8e · 51 pts",
      tagline:  "LBC confirme sa place dans l'élite. Progression, maturité — et Daniel Bulle cédé 21M€ à Metz.",
    },

    matches: [
      { r:"L", tip:"Lorient (D) 1-2"              },
      { r:"L", tip:"Lens (E) 3-0"                 },
      { r:"L", tip:"Toulouse (E) 2-0"             },
      { r:"L", tip:"Nice (D) 0-4"                 },
      { r:"L", tip:"Lyon (E) 2-0"                 },
      { r:"L", tip:"Paris Saint-Germain (D) 1-6"  },
      { r:"W", tip:"Amiens (E) 0-5"               },
      { r:"W", tip:"Nantes (D) 3-1"               },
      { r:"L", tip:"Rennes (D) 2-3"               },
      { r:"W", tip:"Rodez AF (E) 2-3"             },
      { r:"W", tip:"Troyes (D) 1-0"               },
      { r:"L", tip:"Monaco (E) 1-0"               },
      { r:"W", tip:"Saint-Étienne (D) 2-0"        },
      { r:"L", tip:"Metz (E) 1-0"                 },
      { r:"W", tip:"Marseille (D) 1-0"            },
      { r:"W", tip:"Strasbourg (E) 0-2"           },
      { r:"L", tip:"Lille (E) 1-0"                },
      { r:"W", tip:"Lorient (E) 0-4"              },
      { r:"L", tip:"Nice (E) 3-0"                 },
      { r:"W", tip:"Lyon (D) 3-2"                 },
      { r:"L", tip:"Paris Saint-Germain (E) 3-0"  },
      { r:"W", tip:"Amiens (D) 3-1"               },
      { r:"W", tip:"Nantes (E) 0-3"               },
      { r:"L", tip:"Lens (D) 1-2"                 },
      { r:"D", tip:"Rennes (E) 3-3"               },
      { r:"W", tip:"Rodez AF (D) 2-1"             },
      { r:"W", tip:"Troyes (E) 0-3"               },
      { r:"W", tip:"Monaco (D) 4-0"               },
      { r:"L", tip:"Saint-Étienne (E) 3-2"        },
      { r:"W", tip:"Metz (D) 4-0"                 },
      { r:"D", tip:"Marseille (E) 2-2"            },
      { r:"L", tip:"Strasbourg (D) 1-3"           },
      { r:"D", tip:"Lille (D) 3-3"                },
      { r:"W", tip:"Toulouse (D) 4-1"             },
    ],

    standings: [
      { pos:1,  team:"Paris Saint-Germain", j:34, g:31, n:1,  l:2,  bp:105, bc:16, db: 89, pts:94, zone:"promo" },
      { pos:2,  team:"Lille",               j:34, g:21, n:10, l:3,  bp:75,  bc:33, db: 42, pts:73, zone:"promo" },
      { pos:3,  team:"Lyon",                j:34, g:20, n:6,  l:8,  bp:64,  bc:36, db: 28, pts:66, zone:"promo" },
      { pos:4,  team:"Lens",                j:34, g:20, n:5,  l:9,  bp:67,  bc:43, db: 24, pts:65              },
      { pos:5,  team:"Nice",                j:34, g:16, n:12, l:6,  bp:62,  bc:50, db: 12, pts:60              },
      { pos:6,  team:"Rennes",              j:34, g:15, n:8,  l:11, bp:63,  bc:50, db: 13, pts:53              },
      { pos:7,  team:"Marseille",           j:34, g:13, n:12, l:9,  bp:46,  bc:36, db: 10, pts:51              },
      { pos:8,  team:"Châteauroux",         j:34, g:16, n:3,  l:15, bp:63,  bc:55, db:  8, pts:51, highlight:true },
      { pos:9,  team:"Toulouse",            j:34, g:13, n:9,  l:12, bp:47,  bc:48, db: -1, pts:48              },
      { pos:10, team:"Strasbourg",          j:34, g:12, n:7,  l:15, bp:43,  bc:55, db:-12, pts:43              },
      { pos:11, team:"Monaco",              j:34, g:10, n:10, l:14, bp:49,  bc:55, db: -6, pts:40              },
      { pos:12, team:"Saint-Étienne",       j:34, g:10, n:8,  l:16, bp:44,  bc:66, db:-22, pts:38              },
      { pos:13, team:"Lorient",             j:34, g:10, n:7,  l:17, bp:42,  bc:61, db:-19, pts:37              },
      { pos:14, team:"Metz",                j:34, g:8,  n:8,  l:18, bp:29,  bc:49, db:-20, pts:32              },
      { pos:15, team:"Rodez AF",            j:34, g:10, n:2,  l:22, bp:36,  bc:69, db:-33, pts:32              },
      { pos:16, team:"Troyes",              j:34, g:6,  n:9,  l:19, bp:29,  bc:62, db:-33, pts:27, zone:"releg" },
      { pos:17, team:"Amiens",              j:34, g:7,  n:4,  l:23, bp:33,  bc:74, db:-41, pts:25, zone:"releg" },
      { pos:18, team:"Nantes",              j:34, g:4,  n:7,  l:23, bp:23,  bc:62, db:-39, pts:19, zone:"releg" },
    ],
  },

  /* ─── AJOUTE TES PROCHAINES SAISONS ICI ──────────────── */
  // Template vide — copie ce bloc, remplis-le et décommente :
  /*
  {
    id:         "2026-27",           // ex: "2026-27"
    year:       "2026/27",           // affiché dans l'UI
    league:     "Ligue 2",           // "National" | "Ligue 2" | "Ligue 1"
    position:   1,
    totalTeams: 20,
    points:     80,
    played:     38,
    wins:       25,
    draws:      5,
    losses:     8,
    gf:         70,
    ga:         30,
    promoted:   ["Châteauroux (Champion)", "..."],
    relegated:  ["Club A", "Club B", "Club C"],

    scorers: [
      { name: "Joueur 1", detail: "BU · Nationalité · Âge ans", value: 20 },
      { name: "Joueur 2", detail: "AG · Nationalité · Âge ans", value: 15 },
      { name: "Joueur 3", detail: "MC · Nationalité · Âge ans", value: 10 },
    ],
    assists: [
      { name: "Joueur 1", detail: "BU · 25 ans", value: 12 },
      { name: "Joueur 2", detail: "AI · 28 ans", value: 9  },
      { name: "Joueur 3", detail: "MC · 23 ans", value: 7  },
    ],
    ratings: [
      { name: "Joueur 1", detail: "BU · 25 ans", value: 7.45 },
      { name: "Joueur 2", detail: "GK · 30 ans", value: 7.20 },
      { name: "Joueur 3", detail: "DC · 27 ans", value: 7.10 },
    ],

    transfers: [
      { type: "free", name: "Joueur A", from: "Libre de contrat", date: "Juil. 2026" },
      { type: "loan", name: "Joueur B", from: "Club X",           date: "Aoû. 2026"  },
    ],

    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "6e Tour",  score: "2 – 0", opponent: "Adversaire (D)" },
        { result: "L", round: "7e Tour",  score: "0 – 1", opponent: "Adversaire (E)" },
      ],
    },

    playoffs: null,  // ou un objet si barrages

    // Splash d'intro (optionnel) — s'affiche avant la fiche saison
    // Supprime ce bloc entier si tu ne veux pas d'intro pour cette saison
    splash: {
      eyebrow:  "2028/29 · Saison X",        // sous-titre discret en haut
      lines:    ["TITRE 1.", "TITRE 2."],     // 1 ou 2 lignes géantes
      sub:      "Ligue 1 · Champions",        // ligne résumé sous les titres
      tagline:  "Ta phrase clé de la saison.",// phrase en italique
    },

    // Chaîne de résultats : W=Victoire D=Nul L=Défaite
    // tip = texte au survol (Adversaire + score)
    matches: [
      { r: "W", tip: "Adversaire (D) 2-0" },
      { r: "D", tip: "Adversaire (E) 1-1" },
      // ... un par match
    ],

    standings: [
      { pos:1, team:"Châteauroux",  j:38, g:25, n:5, l:8, bp:70, bc:30, db:40, pts:80, highlight:true },
      { pos:2, team:"Adversaire",   j:38, g:20, n:8, l:10, bp:55, bc:38, db:17, pts:68, zone:"promo" },
      // ... toutes les équipes
      // zone: "promo" = vert, "releg" = rouge, highlight: true = LBC
    ],
  },
  */

];
