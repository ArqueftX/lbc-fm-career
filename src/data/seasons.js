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

    matches: [
      { r:"W", tip:"FC Versailles 78 (D) 2-0"          },
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
