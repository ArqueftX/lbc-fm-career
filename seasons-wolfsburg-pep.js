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
    lastUpdate:   "Octobre 2025",

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
      {
        key: "10", label: "Octobre 2025",
        note: "Deux nuls poussifs, un derby spectaculaire gagné à Hambourg — mais élimination en coupe aux tirs au but.",
        matches: [
          { r:"D", tip:"Augsburg (E) 0-0",   comp:"BL"  },
          { r:"D", tip:"Stuttgart (D) 1-1",  comp:"BL"  },
          { r:"W", tip:"Hamburg (E) 2-3",    comp:"BL"  },
          { r:"L", tip:"Augsburg (D) 2-2",   comp:"DFB", tag:"ÉLIM. T.A.B." },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 6 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 24 ans", value: 3 },
      { name: "Koulierakis · Daghim · Eriksen · Shiogai · Wind · Arnold", detail: "6 joueurs à égalité", value: 1 },
    ],
    assists: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 4 },
      { name: "Katseris · Wimmer · Fischer · Majer · Eriksen · Gerhardt · Arnold · Zehnter", detail: "8 joueurs à égalité", value: 1 },
    ],
    ratings: [
      { name: "Dzenan Pejcinović", detail: "BU · 6 buts · 4 passes D. · 10 matchs", value: 7.32 },
      { name: "Patrick Wimmer",    detail: "AD · 3 buts · 1 passe D. · 10 titularisations", value: 7.20 },
      { name: "Kilian Fischer",    detail: "DD · 1 passe D. · 10 matchs", value: 7.00 },
    ],

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
        { result: "L", round: "2e tour",  score: "2 – 2 (t.a.b.)", opponent: "Augsburg · éliminé" },
      ],
    },
    cup2: null,

    // Classement à jour (après J8)
    standings: [
      { pos:1,  team:"Bayer Leverkusen",    j:8, g:7, n:0, l:1, bp:15, bc:4,  db:11, pts:21, zone:"promo" },
      { pos:2,  team:"Bayern München",      j:8, g:6, n:2, l:0, bp:20, bc:5,  db:15, pts:20, zone:"promo" },
      { pos:3,  team:"RB Leipzig",          j:8, g:5, n:1, l:2, bp:16, bc:8,  db: 8, pts:16, zone:"promo" },
      { pos:4,  team:"Dortmund",            j:8, g:4, n:3, l:1, bp:11, bc:7,  db: 4, pts:15, zone:"promo" },
      { pos:5,  team:"Wolfsburg",           j:8, g:4, n:2, l:2, bp:11, bc:9,  db: 2, pts:14, highlight:true },
      { pos:6,  team:"Gladbach",            j:8, g:4, n:2, l:2, bp:5,  bc:5,  db: 0, pts:14 },
      { pos:7,  team:"Eintracht Frankfurt", j:8, g:4, n:1, l:3, bp:9,  bc:8,  db: 1, pts:13 },
      { pos:8,  team:"Mainz 05",            j:8, g:4, n:0, l:4, bp:8,  bc:10, db:-2, pts:12 },
      { pos:9,  team:"Stuttgart",           j:8, g:3, n:2, l:3, bp:9,  bc:8,  db: 1, pts:11 },
      { pos:10, team:"Heidenheim",          j:8, g:3, n:2, l:3, bp:9,  bc:11, db:-2, pts:11 },
      { pos:11, team:"Union Berlin",        j:8, g:3, n:1, l:4, bp:8,  bc:9,  db:-1, pts:10 },
      { pos:12, team:"FC Köln",             j:8, g:3, n:1, l:4, bp:9,  bc:11, db:-2, pts:10 },
      { pos:13, team:"Werder Bremen",       j:8, g:3, n:1, l:4, bp:9,  bc:11, db:-2, pts:10 },
      { pos:14, team:"Hoffenheim",          j:8, g:2, n:0, l:6, bp:8,  bc:18, db:-10,pts:6  },
      { pos:15, team:"Hamburg",             j:8, g:1, n:2, l:5, bp:7,  bc:11, db:-4, pts:5  },
      { pos:16, team:"St Pauli",            j:8, g:1, n:2, l:5, bp:5,  bc:10, db:-5, pts:5  },
      { pos:17, team:"Freiburg",            j:8, g:0, n:5, l:3, bp:5,  bc:11, db:-6, pts:5, zone:"releg" },
      { pos:18, team:"Augsburg",            j:8, g:0, n:3, l:5, bp:3,  bc:11, db:-8, pts:3, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
