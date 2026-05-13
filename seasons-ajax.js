/**
 * AJAX AMSTERDAM — DONNÉES DES SAISONS (Multi)
 */
window.SEASONS_ajax = [

  /* ─── SAISON 2025/26 ─────────────────────────────────── */
  {
    id:         "ajax-2025-26",
    year:       "2025/26",
    league:     "Eredivisie",
    position:   2,
    totalTeams: 18,
    points:     84,
    played:     34,
    wins:       27,
    draws:      3,
    losses:     4,
    gf:         108,
    ga:         39,
    promoted:   [],
    relegated:  ["NAC Breda", "sc Heerenveen", "Heracles Almelo"],

    scorers: [
      { name: "Kasper Dolberg", detail: "BU · Danois", value: 40 },
    ],
    assists:  [],
    ratings:  [],

    transfers: [
      { type: "loan", name: "Robin Hack",            from: "Gladbach",    date: "Été 2025"                  },
      { type: "loan", name: "Arnau Puigmal",          from: "Almeria",     date: "Été 2025"                  },
      { type: "free", name: "Romke van de Pol",       from: "Vitesse",     date: "Été 2025"                  },
      { type: "sell", name: "Nicolas de la Cruz",     from: "Flamengo",    date: "Été 2025", amount: "7,5M €" },
      { type: "sell", name: "Joël Schingtienne",     from: "Venezia",     date: "Été 2025", amount: "1,6M €" },
      { type: "sell", name: "Andrea Compagno",        from: "Jeonbuk",     date: "Été 2025", amount: "2M €"   },
      { type: "free", name: "Taiyo Koga",             from: "Kashiwa",     date: "Été 2025"                  },
      { type: "free", name: "Takahiro Ohgihara",      from: "Kobe",        date: "Été 2025"                  },
    ],

    departures: [
      { type: "loan", name: "Marouane Bentaleb",      to: "JS Soualem",     date: "Été 2025"                   },
      { type: "loan", name: "Zakaria Ouzane",          to: "Helmond Sport",  date: "Été 2025"                   },
      { type: "loan", name: "Niilo Tarvajarvi",        to: "Gnistan",        date: "Été 2025"                   },
      { type: "loan", name: "Jinairo Johnson",         to: "Vitesse",        date: "Été 2025"                   },
      { type: "sell", name: "Wout Weghorst",           to: "Al-Kholood",     date: "Été 2025", amount: "1M €"   },
      { type: "sell", name: "Davy Klaassen",           to: "AEK Athènes",    date: "Été 2025", amount: "1,8M €" },
      { type: "sell", name: "Anton Gaaei",             to: "Atalanta",       date: "Été 2025", amount: "5,25M €"},
      { type: "loan", name: "Maher Carrizo",           to: "Wrexham",        date: "Été 2025"                   },
      { type: "sell", name: "Tijn Peters",             to: "Twente",         date: "Été 2025", amount: "135K €" },
      { type: "sell", name: "Elias Mechrouch",         to: "N.E.C.",         date: "Été 2025", amount: "250K €" },
    ],

    cup: {
      name: "KNVB Beker",
      rounds: [
        { result: "W", round: "2e tour",  score: "0 – 3", opponent: "Sparta Rotterdam (E)" },
        { result: "L", round: "3e tour",  score: "2 – 4", opponent: "PSV (D)"              },
      ],
    },

    cup2: {
      name: "UEFA Champions League",
      phase: "Phase de championnat : 22e · 3V 0N 5D · 9 pts → Barrage · Éliminé par Bergame",
      rounds: [
        { result: "W", round: "Barrage A", score: "2 – 1", opponent: "Bergame (D)"              },
        { result: "L", round: "Barrage R", score: "4 – 2", opponent: "Bergame (E) — 4-5 éliminé" },
      ],
    },

    playoffs: null,

    splash: {
      eyebrow:  "2025/26 · Ajax Amsterdam · Saison 1",
      lines:    ["DOLBERG.", "40 BUTS."],
      sub:      "Eredivisie · 2e · 84 pts · UCL Barrage",
      tagline:  "Vice-champions derrière Feyenoord. Kasper Dolberg écrit l'histoire du club avec 40 buts en une saison.",
    },

    matches: [
      { r:"W", tip:"Telstar (D) 9-0"           },
      { r:"L", tip:"Go Ahead Eagles (E) 2-1"   },
      { r:"W", tip:"Heracles Almelo (D) 1-0"   },
      { r:"W", tip:"FC Volendam (E) 0-4"       },
      { r:"W", tip:"PEC Zwolle (D) 3-0"        },
      { r:"L", tip:"PSV (E) 3-2"               },
      { r:"W", tip:"NAC Breda (D) 6-0"         },
      { r:"W", tip:"Sparta Rotterdam (E) 1-3"  },
      { r:"D", tip:"AZ (D) 1-1"                },
      { r:"W", tip:"FC Twente (E) 0-2"         },
      { r:"W", tip:"sc Heerenveen (D) 2-1"     },
      { r:"W", tip:"FC Utrecht (E) 0-1"        },
      { r:"W", tip:"Excelsior (D) 5-1"         },
      { r:"W", tip:"FC Groningen (D) 4-0"      },
      { r:"W", tip:"Fortuna Sittard (E) 0-3"   },
      { r:"W", tip:"Feyenoord (D) 4-1"         },
      { r:"W", tip:"N.E.C. (E) 2-3"            },
      { r:"W", tip:"Telstar (E) 0-5"           },
      { r:"W", tip:"Go Ahead Eagles (D) 3-0"   },
      { r:"W", tip:"FC Volendam (D) 2-1"       },
      { r:"W", tip:"Excelsior (E) 1-4"         },
      { r:"L", tip:"AZ (E) 2-0"                },
      { r:"W", tip:"Fortuna Sittard (D) 3-1"   },
      { r:"D", tip:"N.E.C. (D) 1-1"            },
      { r:"W", tip:"PEC Zwolle (E) 2-3"        },
      { r:"W", tip:"FC Groningen (E) 3-4"      },
      { r:"W", tip:"Sparta Rotterdam (D) 5-3"  },
      { r:"L", tip:"Feyenoord (E) 5-3"         },
      { r:"W", tip:"FC Twente (D) 2-0"         },
      { r:"D", tip:"Heracles Almelo (E) 2-2"   },
      { r:"W", tip:"NAC Breda (E) 2-4"         },
      { r:"W", tip:"PSV (D) 3-2"               },
      { r:"W", tip:"FC Utrecht (D) 4-1"        },
      { r:"W", tip:"sc Heerenveen (E) 1-6"     },
    ],

    standings: [
      { pos:1,  team:"Feyenoord",       j:34, g:29, n:3, l:2,  bp:95,  bc:28, db: 67, pts:90, zone:"promo" },
      { pos:2,  team:"Ajax",            j:34, g:27, n:3, l:4,  bp:108, bc:39, db: 69, pts:84, zone:"promo", highlight:true },
      { pos:3,  team:"PSV",             j:34, g:23, n:6, l:5,  bp:73,  bc:40, db: 33, pts:75, zone:"promo" },
      { pos:4,  team:"AZ",              j:34, g:18, n:10,l:6,  bp:75,  bc:47, db: 28, pts:64              },
      { pos:5,  team:"FC Groningen",    j:34, g:18, n:6, l:10, bp:71,  bc:53, db: 18, pts:60              },
      { pos:6,  team:"FC Utrecht",      j:34, g:14, n:5, l:15, bp:56,  bc:52, db:  4, pts:47              },
      { pos:7,  team:"N.E.C.",          j:34, g:12, n:9, l:13, bp:52,  bc:50, db:  2, pts:45              },
      { pos:8,  team:"PEC Zwolle",      j:34, g:12, n:9, l:13, bp:55,  bc:58, db: -3, pts:45              },
      { pos:9,  team:"Excelsior",       j:34, g:12, n:8, l:14, bp:46,  bc:58, db:-12, pts:44              },
      { pos:10, team:"Fortuna Sittard", j:34, g:11, n:9, l:14, bp:51,  bc:66, db:-15, pts:42              },
      { pos:11, team:"Go Ahead Eagles", j:34, g:11, n:6, l:17, bp:52,  bc:61, db: -9, pts:39              },
      { pos:12, team:"Sparta Rotterdam",j:34, g:9,  n:12,l:13, bp:51,  bc:61, db:-10, pts:39              },
      { pos:13, team:"FC Twente",       j:34, g:11, n:6, l:17, bp:48,  bc:63, db:-15, pts:39              },
      { pos:14, team:"Telstar",         j:34, g:9,  n:9, l:16, bp:51,  bc:69, db:-18, pts:36              },
      { pos:15, team:"FC Volendam",     j:34, g:10, n:4, l:20, bp:48,  bc:71, db:-23, pts:34              },
      { pos:16, team:"NAC Breda",       j:34, g:9,  n:3, l:22, bp:43,  bc:80, db:-37, pts:30, zone:"releg" },
      { pos:17, team:"sc Heerenveen",   j:34, g:6,  n:7, l:21, bp:27,  bc:63, db:-36, pts:25, zone:"releg" },
      { pos:18, team:"Heracles Almelo", j:34, g:5,  n:5, l:24, bp:42,  bc:85, db:-43, pts:20, zone:"releg" },
    ],
  },

]
