/**
 * VfL WOLFSBURG — PARTIE EN COURS (Pep Guardiola)
 * ────────────────────────────────────────────────
 * Saison suivie MOIS PAR MOIS.
 *
 *  ▸ Pour ajouter un mois : pousse un bloc dans "months" :
 *       { key:"08", label:"Août", matches:[ {r:"W", tip:"Adversaire (D) 2-1"}, ... ] }
 *    (D) = domicile, (E) = extérieur · score format DOMICILE-EXTÉRIEUR.
 *    Le bilan (V/N/D, buts, points) se calcule TOUT SEUL à partir des matchs.
 *
 *  ▸ "standings"  : colle le classement à jour (la ligne highlight:true donne la position).
 *  ▸ "scorers/assists/ratings" : stats cumulées, mises à jour chaque mois.
 *  ▸ "transfers/departures"    : mercato (juillet + août d'un coup, puis hiver).
 *  ▸ "splash" : à AJOUTER seulement quand la saison est terminée.
 */
window['SEASONS_wolfsburg-pep'] = [

  /* ─── SAISON 2025/26 · EN COURS ──────────────────────── */
  {
    id:           "wolfsburg-pep-2025-26",
    year:         "2025/26",
    league:       "Bundesliga",
    status:       "en_cours",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Septembre 2025",

    // Position : laissée à null → déduite du classement (ligne highlight) quand il arrivera
    position:   null,

    // Journal mois par mois
    months: [
      {
        key: "07", label: "Juillet 2025",
        note: "Reprise et matchs de préparation.",
        matches: [
          { r:"W", tip:"First Vienna FC (E) 1-3",  comp:"AM" },
          { r:"W", tip:"SC Neusiedl/See (E) 0-3",  comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2025",
        note: "Fin de préparation, entrée en lice en coupe et lancement de la Bundesliga.",
        matches: [
          { r:"W", tip:"SC Schwaz (E) 0-2",        comp:"AM"  },
          { r:"W", tip:"Werder Bremen (D) 3-1",    comp:"AM"  },
          { r:"W", tip:"Arminia Bielefeld (E) 0-2", comp:"DFB" },
          { r:"W", tip:"Heidenheim (E) 1-2",       comp:"BL"  },
          { r:"W", tip:"Mainz 05 (D) 2-0",         comp:"BL"  },
        ],
      },
      {
        key: "09", label: "Septembre 2025",
        note: "Première victoire à domicile en championnat, puis deux revers face au haut de tableau.",
        matches: [
          { r:"W", tip:"FC Köln (D) 2-0",          comp:"BL" },
          { r:"L", tip:"Dortmund (E) 2-0",         comp:"BL" },
          { r:"L", tip:"RB Leipzig (D) 1-3",       comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović",          detail: "BU · Allemand · 20 ans",      value: 4 },
      { name: "Patrick Wimmer",             detail: "AD · Autrichien · 24 ans",    value: 2 },
      { name: "Eriksen · Koulierakis · Daghim", detail: "MOC / DC / AD · ex-aequo", value: 1 },
    ],
    assists: [
      { name: "Dzenan Pejcinović",          detail: "BU · Allemand · 20 ans",      value: 3 },
      { name: "Majer · Arnold · Fischer",   detail: "MOC / MDC / DD · ex-aequo",   value: 1 },
    ],
    ratings: [],

    // Mercato
    transfers: [
      { type: "buy",  name: "Panos Katseris", from: "Lorient", date: "Été 2025", amount: "2,2M €" },
    ],
    departures: [
      { type: "loan", name: "Moritz Jenz",      to: "Crystal Palace (clause 5,75M€)", date: "Été 2025" },
      { type: "loan", name: "Mattias Svanberg", to: "Mallorca (option 4,7M€)",         date: "Sep. 2025" },
    ],

    // Coupes / Europe
    cup: {
      name: "DFB-Pokal",
      rounds: [
        { result: "W", round: "1er tour", score: "0 – 2", opponent: "Arminia Bielefeld (E)" },
      ],
    },
    cup2: null,

    // Classement à jour (après J5)
    standings: [
      { pos:1,  team:"Bayer Leverkusen",    j:5, g:5, n:0, l:0, bp:10, bc:2,  db: 8, pts:15, zone:"promo" },
      { pos:2,  team:"Bayern München",      j:5, g:4, n:1, l:0, bp:15, bc:4,  db:11, pts:13, zone:"promo" },
      { pos:3,  team:"Gladbach",            j:5, g:4, n:0, l:1, bp:4,  bc:1,  db: 3, pts:12, zone:"promo" },
      { pos:4,  team:"Mainz 05",            j:5, g:4, n:0, l:1, bp:7,  bc:5,  db: 2, pts:12, zone:"promo" },
      { pos:5,  team:"Dortmund",            j:5, g:3, n:1, l:1, bp:7,  bc:4,  db: 3, pts:10 },
      { pos:6,  team:"RB Leipzig",          j:5, g:3, n:0, l:2, bp:11, bc:6,  db: 5, pts:9  },
      { pos:7,  team:"Eintracht Frankfurt", j:5, g:3, n:0, l:2, bp:7,  bc:6,  db: 1, pts:9  },
      { pos:8,  team:"Wolfsburg",           j:5, g:3, n:0, l:2, bp:7,  bc:6,  db: 1, pts:9, highlight:true },
      { pos:9,  team:"Heidenheim",          j:5, g:2, n:1, l:2, bp:4,  bc:6,  db:-2, pts:7  },
      { pos:10, team:"Union Berlin",        j:5, g:2, n:0, l:3, bp:5,  bc:6,  db:-1, pts:6  },
      { pos:11, team:"Stuttgart",           j:5, g:2, n:0, l:3, bp:4,  bc:5,  db:-1, pts:6  },
      { pos:12, team:"Hoffenheim",          j:5, g:2, n:0, l:3, bp:6,  bc:12, db:-6, pts:6  },
      { pos:13, team:"FC Köln",             j:5, g:1, n:1, l:3, bp:4,  bc:8,  db:-4, pts:4  },
      { pos:14, team:"Freiburg",            j:5, g:0, n:3, l:2, bp:4,  bc:7,  db:-3, pts:3  },
      { pos:15, team:"St Pauli",            j:5, g:0, n:2, l:3, bp:2,  bc:5,  db:-3, pts:2  },
      { pos:16, team:"Hamburg",             j:5, g:0, n:2, l:3, bp:2,  bc:5,  db:-3, pts:2  },
      { pos:17, team:"Augsburg",            j:5, g:0, n:2, l:3, bp:2,  bc:7,  db:-5, pts:2, zone:"releg" },
      { pos:18, team:"Werder Bremen",       j:5, g:0, n:1, l:4, bp:3,  bc:9,  db:-6, pts:1, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
