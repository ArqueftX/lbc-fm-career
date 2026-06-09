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
    lastUpdate:   "Décembre 2025",

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
        note: "Deux victoires, un point arraché face à Leverkusen, mais un revers à Francfort — le Top 5 reste très serré.",
        matches: [
          { r:"W", tip:"Hoffenheim (D) 2-1",          comp:"BL" },
          { r:"W", tip:"Werder Bremen (E) 0-1",       comp:"BL" },
          { r:"D", tip:"Bayer Leverkusen (D) 0-0",    comp:"BL" },
          { r:"L", tip:"Eintracht Frankfurt (E) 2-0", comp:"BL" },
        ],
      },
      {
        key: "12", label: "Décembre 2025",
        note: "Trois nuls et une victoire à dix contre Gladbach — même en infériorité, les Loups grappillent et restent collés au Top 5.",
        matches: [
          { r:"D", tip:"Union Berlin (D) 2-2",  comp:"BL" },
          { r:"W", tip:"Gladbach (E) 0-1",      comp:"BL" },
          { r:"D", tip:"Freiburg (D) 1-1",      comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 7 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 24 ans", value: 4 },
      { name: "Adam Daghim · Christian Eriksen", detail: "AD / MOC · ex-aequo (Daghim prêté par RB Salzburg)", value: 3 },
    ],
    assists: [
      { name: "Pejcinović · Arnold", detail: "BU / MDC · ex-aequo", value: 4 },
      { name: "Katseris · Wimmer · Zehnter · Majer · Eriksen · Maehle · Fischer · Amoura · Gerhardt", detail: "9 joueurs à égalité", value: 1 },
    ],
    ratings: [
      { name: "Dzenan Pejcinović", detail: "BU · 13 tit. / 3 rempl. · 7 buts · 4 passes D.", value: 7.08 },
      { name: "Patrick Wimmer",    detail: "AD · 12 tit. · 4 buts · 1 passe D.", value: 7.00 },
      { name: "Kilian Fischer",    detail: "DD · 13 tit. / 1 rempl. · 1 passe D.", value: 6.95 },
    ],
    flops: [
      { name: "Bence Dárdai",      detail: "MC · Hongrois · 19 ans · 8 rempl.", value: 6.40 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 33 ans · 17 tit. · 3 buts", value: 6.53 },
      { name: "Jonas Wind",        detail: "BU · Danois · 26 ans · 8 rempl. · 1 but", value: 6.53 },
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

    // Classement à jour (après J15)
    standings: [
      { pos:1,  team:"Bayern München",      j:15, g:12, n:3, l:0,  bp:30, bc:7,  db:23, pts:39, zone:"promo" },
      { pos:2,  team:"RB Leipzig",          j:15, g:10, n:3, l:2,  bp:24, bc:10, db:14, pts:33, zone:"promo" },
      { pos:3,  team:"Bayer Leverkusen",    j:15, g:8,  n:3, l:4,  bp:21, bc:12, db: 9, pts:27, zone:"promo" },
      { pos:4,  team:"Eintracht Frankfurt", j:15, g:7,  n:5, l:3,  bp:16, bc:11, db: 5, pts:26, zone:"promo" },
      { pos:5,  team:"Wolfsburg",           j:15, g:7,  n:5, l:3,  bp:18, bc:15, db: 3, pts:26, highlight:true },
      { pos:6,  team:"Dortmund",            j:15, g:6,  n:7, l:2,  bp:19, bc:13, db: 6, pts:25 },
      { pos:7,  team:"Heidenheim",          j:15, g:7,  n:4, l:4,  bp:18, bc:17, db: 1, pts:25 },
      { pos:8,  team:"FC Köln",             j:15, g:7,  n:2, l:6,  bp:17, bc:15, db: 2, pts:23 },
      { pos:9,  team:"Stuttgart",           j:15, g:6,  n:4, l:5,  bp:18, bc:16, db: 2, pts:22 },
      { pos:10, team:"Union Berlin",        j:15, g:4,  n:5, l:6,  bp:15, bc:17, db:-2, pts:17 },
      { pos:11, team:"Hamburg",             j:15, g:4,  n:4, l:7,  bp:14, bc:17, db:-3, pts:16 },
      { pos:12, team:"Gladbach",            j:15, g:4,  n:4, l:7,  bp:10, bc:15, db:-5, pts:16 },
      { pos:13, team:"Mainz 05",            j:13, g:4,  n:3, l:6,  bp:11, bc:15, db:-4, pts:15 },
      { pos:14, team:"Werder Bremen",       j:15, g:4,  n:1, l:10, bp:12, bc:22, db:-10,pts:13 },
      { pos:15, team:"Hoffenheim",          j:15, g:4,  n:1, l:10, bp:15, bc:28, db:-13,pts:13 },
      { pos:16, team:"Freiburg",            j:14, g:2,  n:6, l:6,  bp:12, bc:20, db:-8, pts:12 },
      { pos:17, team:"St Pauli",            j:14, g:2,  n:3, l:9,  bp:9,  bc:18, db:-9, pts:9, zone:"releg" },
      { pos:18, team:"Augsburg",            j:15, g:1,  n:5, l:9,  bp:8,  bc:19, db:-11,pts:8, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
