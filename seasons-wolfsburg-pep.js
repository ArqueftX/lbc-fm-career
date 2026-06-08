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
    lastUpdate:   "Août 2025",

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
    ],

    // Stats cumulées
    scorers: [
      { name: "D. Pejcinović · A. Skov Olsen", detail: "BU / AD · ex-aequo (Skov Olsen prêté par les Rangers)", value: 3 },
      { name: "Patrick Wimmer",                detail: "AD · Autrichien · 24 ans",                              value: 2 },
      { name: "Christian Eriksen",             detail: "MOC · Danois · 33 ans",                                 value: 1 },
    ],
    assists: [
      { name: "Pejcinović · Arnold · Kamiński · Majer · Skov Olsen", detail: "5 joueurs à égalité", value: 1 },
    ],
    ratings: [],

    // Mercato
    transfers: [
      { type: "buy",  name: "Panos Katseris", from: "Lorient", date: "Été 2025", amount: "2,2M €" },
    ],
    departures: [
      { type: "loan", name: "Moritz Jenz",    to: "Crystal Palace (clause 5,75M€)", date: "Été 2025" },
    ],

    // Coupes / Europe
    cup: {
      name: "DFB-Pokal",
      rounds: [
        { result: "W", round: "1er tour", score: "0 – 2", opponent: "Arminia Bielefeld (E)" },
      ],
    },
    cup2: null,

    // Classement à jour (après J2)
    standings: [
      { pos:1,  team:"Bayern München",      j:2, g:2, n:0, l:0, bp:6, bc:2, db: 4, pts:6, zone:"promo" },
      { pos:2,  team:"Eintracht Frankfurt", j:2, g:2, n:0, l:0, bp:5, bc:1, db: 4, pts:6, zone:"promo" },
      { pos:3,  team:"Bayer Leverkusen",    j:2, g:2, n:0, l:0, bp:5, bc:2, db: 3, pts:6, zone:"promo" },
      { pos:4,  team:"Wolfsburg",           j:2, g:2, n:0, l:0, bp:4, bc:1, db: 3, pts:6, zone:"promo", highlight:true },
      { pos:5,  team:"Dortmund",            j:2, g:2, n:0, l:0, bp:3, bc:1, db: 2, pts:6 },
      { pos:6,  team:"Gladbach",            j:2, g:2, n:0, l:0, bp:2, bc:0, db: 2, pts:6 },
      { pos:7,  team:"RB Leipzig",          j:2, g:1, n:0, l:1, bp:5, bc:3, db: 2, pts:3 },
      { pos:8,  team:"Union Berlin",        j:2, g:1, n:0, l:1, bp:2, bc:2, db: 0, pts:3 },
      { pos:9,  team:"Mainz 05",            j:2, g:1, n:0, l:1, bp:2, bc:3, db:-1, pts:3 },
      { pos:10, team:"Freiburg",            j:2, g:0, n:2, l:0, bp:2, bc:2, db: 0, pts:2 },
      { pos:11, team:"FC Köln",             j:2, g:0, n:1, l:1, bp:2, bc:3, db:-1, pts:1 },
      { pos:12, team:"St Pauli",            j:2, g:0, n:1, l:1, bp:2, bc:3, db:-1, pts:1 },
      { pos:13, team:"Hamburg",             j:2, g:0, n:1, l:1, bp:1, bc:2, db:-1, pts:1 },
      { pos:14, team:"Augsburg",            j:2, g:0, n:1, l:1, bp:1, bc:4, db:-3, pts:1 },
      { pos:15, team:"Stuttgart",           j:2, g:0, n:0, l:2, bp:1, bc:3, db:-2, pts:0 },
      { pos:16, team:"Werder Bremen",       j:2, g:0, n:0, l:2, bp:2, bc:5, db:-3, pts:0 },
      { pos:17, team:"Hoffenheim",          j:2, g:0, n:0, l:2, bp:1, bc:5, db:-4, pts:0, zone:"releg" },
      { pos:18, team:"Heidenheim",          j:2, g:0, n:0, l:2, bp:1, bc:5, db:-4, pts:0, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
