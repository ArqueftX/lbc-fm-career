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
    lastUpdate:   "Novembre 2025",

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
          { r:"L", tip:"Augsburg (E) 2-2",   comp:"DFB", tag:"ÉLIM. T.A.B." },
        ],
      },
      {
        key: "11", label: "Novembre 2025",
        note: "Deux victoires, un point arraché face au leader Leverkusen, mais un revers à Francfort — le Top 5 reste très serré.",
        matches: [
          { r:"W", tip:"Hoffenheim (D) 2-1",          comp:"BL" },
          { r:"W", tip:"Werder Bremen (E) 0-1",       comp:"BL" },
          { r:"D", tip:"Bayer Leverkusen (D) 0-0",    comp:"BL" },
          { r:"L", tip:"Eintracht Frankfurt (E) 2-0", comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 6 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 24 ans", value: 4 },
      { name: "Adam Daghim · Christian Eriksen", detail: "AD / MOC · ex-aequo (Daghim prêté par RB Salzburg)", value: 2 },
    ],
    assists: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 4 },
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 31 ans", value: 3 },
      { name: "Katseris · Fischer · Gerhardt · Zehnter · Amoura · Eriksen · Majer · Wimmer", detail: "8 joueurs à égalité", value: 1 },
    ],
    ratings: [
      { name: "Dzenan Pejcinović", detail: "BU · 10 tit. / 3 rempl. · 6 buts · 4 passes D.", value: 7.17 },
      { name: "Patrick Wimmer",    detail: "AD · 12 tit. · 4 buts · 1 passe D.", value: 7.00 },
      { name: "Kilian Fischer",    detail: "DD · 11 tit. / 1 rempl. · 1 passe D.", value: 6.93 },
    ],
    flops: [
      { name: "Bence Dárdai",      detail: "MC · Hongrois · 19 ans · 7 rempl.", value: 6.40 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 33 ans · 14 tit. · 2 buts", value: 6.51 },
      { name: "Jonas Wind",        detail: "BU · Danois · 26 ans · 6 rempl. · 1 but", value: 6.53 },
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

    // Classement à jour (après J12)
    standings: [
      { pos:1,  team:"Bayern München",      j:12, g:9, n:3, l:0, bp:26, bc:6,  db:20, pts:30, zone:"promo" },
      { pos:2,  team:"RB Leipzig",          j:12, g:9, n:1, l:2, bp:22, bc:9,  db:13, pts:28, zone:"promo" },
      { pos:3,  team:"Bayer Leverkusen",    j:12, g:7, n:2, l:3, bp:17, bc:8,  db: 9, pts:23, zone:"promo" },
      { pos:4,  team:"Eintracht Frankfurt", j:12, g:6, n:3, l:3, bp:14, bc:10, db: 4, pts:21, zone:"promo" },
      { pos:5,  team:"Wolfsburg",           j:12, g:6, n:3, l:3, bp:14, bc:12, db: 2, pts:21, highlight:true },
      { pos:6,  team:"Heidenheim",          j:12, g:6, n:3, l:3, bp:16, bc:15, db: 1, pts:21 },
      { pos:7,  team:"FC Köln",             j:12, g:6, n:1, l:5, bp:14, bc:12, db: 2, pts:19 },
      { pos:8,  team:"Dortmund",            j:12, g:4, n:6, l:2, bp:13, bc:10, db: 3, pts:18 },
      { pos:9,  team:"Stuttgart",           j:11, g:4, n:3, l:4, bp:11, bc:10, db: 1, pts:15 },
      { pos:10, team:"Union Berlin",        j:12, g:4, n:2, l:6, bp:12, bc:14, db:-2, pts:14 },
      { pos:11, team:"Mainz 05",            j:11, g:4, n:2, l:5, bp:10, bc:13, db:-3, pts:14 },
      { pos:12, team:"Gladbach",            j:12, g:4, n:2, l:6, bp:7,  bc:11, db:-4, pts:14 },
      { pos:13, team:"Werder Bremen",       j:12, g:4, n:1, l:7, bp:10, bc:16, db:-6, pts:13 },
      { pos:14, team:"Hamburg",             j:11, g:3, n:2, l:6, bp:10, bc:14, db:-4, pts:11 },
      { pos:15, team:"Freiburg",            j:11, g:2, n:5, l:4, bp:9,  bc:15, db:-6, pts:11 },
      { pos:16, team:"Hoffenheim",          j:12, g:3, n:1, l:8, bp:12, bc:23, db:-11,pts:10 },
      { pos:17, team:"St Pauli",            j:12, g:2, n:2, l:8, bp:8,  bc:16, db:-8, pts:8, zone:"releg" },
      { pos:18, team:"Augsburg",            j:12, g:0, n:4, l:8, bp:4,  bc:15, db:-11,pts:4, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
