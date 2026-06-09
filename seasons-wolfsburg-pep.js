/**
 * VfL WOLFSBURG — PARTIE EN COURS (Arq Queft)
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
    lastUpdate:   "Mars 2026",

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
        note: "Deux nuls et une victoire à dix contre Gladbach — même en infériorité, les Loups grappillent et restent collés au Top 5.",
        matches: [
          { r:"D", tip:"Union Berlin (D) 2-2",  comp:"BL" },
          { r:"W", tip:"Gladbach (E) 0-1",      comp:"BL" },
          { r:"D", tip:"Freiburg (D) 1-1",      comp:"BL" },
        ],
      },
      {
        key: "01", label: "Janvier 2026",
        note: "Mois noir en championnat : seul St Pauli est battu, et la J18 face à Heidenheim tourne mal après l'exclusion d'Arnold.",
        matches: [
          { r:"D", tip:"Werder Bremen (D) 2-2",  comp:"AM" },
          { r:"L", tip:"Bayern München (E) 1-0", comp:"BL" },
          { r:"W", tip:"St Pauli (D) 1-0",       comp:"BL" },
          { r:"L", tip:"Heidenheim (D) 0-1",     comp:"BL" },
          { r:"L", tip:"Mainz 05 (E) 2-0",       comp:"BL" },
        ],
      },
      {
        key: "02", label: "Février 2026",
        note: "Cinq matchs, trois victoires : Cologne, Dortmund et Augsbourg tombent, nul à Leipzig — seul Stuttgart accroche les Loups sur penalty.",
        matches: [
          { r:"W", tip:"FC Köln (E) 0-2",      comp:"BL" },
          { r:"W", tip:"Dortmund (D) 2-1",     comp:"BL" },
          { r:"D", tip:"RB Leipzig (E) 0-0",   comp:"BL" },
          { r:"W", tip:"Augsburg (D) 1-0",     comp:"BL" },
          { r:"L", tip:"Stuttgart (E) 1-0",    comp:"BL" },
        ],
      },
      {
        key: "03", label: "Mars 2026",
        note: "Mois agité côté cartons : Amoura puis Arnold expulsés. Mais à dix contre Brême, les Loups renversent tout et restent dans la course à l'Europe.",
        matches: [
          { r:"D", tip:"Hamburg (D) 0-0",      comp:"BL" },
          { r:"L", tip:"Hoffenheim (E) 2-1",   comp:"BL" },
          { r:"W", tip:"Werder Bremen (D) 3-1", comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 21 ans", value: 9 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans", value: 6 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 24 ans", value: 5 },
    ],
    assists: [
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 31 ans", value: 5 },
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 21 ans", value: 4 },
      { name: "Amoura · Majer · Gerhardt", detail: "BU / MOC / MC · ex-aequo", value: 2 },
    ],
    ratings: [
      { name: "Patrick Wimmer",    detail: "AD · 23 tit. · 5 buts · 1 passe D.", value: 7.05 },
      { name: "Dzenan Pejcinović", detail: "BU · 14 tit. / 10 rempl. · 9 buts · 4 passes D.", value: 7.00 },
      { name: "Kilian Fischer",    detail: "DD · 18 tit. / 2 rempl. · 1 passe D.", value: 6.94 },
    ],
    flops: [
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans · 28 tit. · 6 buts · 1 passe D.", value: 6.56 },
      { name: "Yannick Gerhardt",  detail: "MC · Allemand · 32 ans · 2 tit. / 20 rempl. · 2 passes D.", value: 6.63 },
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 31 ans · 23 tit. · 1 but · 5 passes D.", value: 6.71 },
    ],

    // Mercato
    transfers: [
      { type: "buy",  name: "Panos Katseris", from: "Lorient",       date: "Été 2025",  amount: "2,2M €" },
      { type: "buy",  name: "Gastón Álvarez", from: "Al-Qadsiah",    date: "Jan. 2026", amount: "21M €"  },
      { type: "buy",  name: "Eduard Löwen",   from: "St. Louis CITY", date: "Jan. 2026", amount: "4,5M €" },
    ],
    departures: [
      { type: "loan", name: "Moritz Jenz",      to: "Crystal Palace (clause 5,75M€)", date: "Été 2025" },
      { type: "loan", name: "Mattias Svanberg", to: "Mallorca (option 4,7M€)",         date: "Sep. 2025" },
      { type: "sell", name: "Joakim Maehle",    to: "Monaco",                          date: "Jan. 2026", amount: "4,1M €" },
      { type: "sell", name: "Pavao Pervan",     to: "Amstetten",                       date: "Mars 2026", amount: "4,1K €" },
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

    // Classement à jour (après J27)
    standings: [
      { pos:1,  team:"Bayern München",      j:27, g:19, n:5,  l:3,  bp:50, bc:17, db:33, pts:62, zone:"promo" },
      { pos:2,  team:"Dortmund",            j:27, g:17, n:7,  l:3,  bp:43, bc:22, db:21, pts:58, zone:"promo" },
      { pos:3,  team:"RB Leipzig",          j:27, g:15, n:7,  l:5,  bp:42, bc:25, db:17, pts:52, zone:"promo" },
      { pos:4,  team:"Bayer Leverkusen",    j:27, g:14, n:5,  l:8,  bp:33, bc:21, db:12, pts:47, zone:"promo" },
      { pos:5,  team:"Wolfsburg",           j:27, g:12, n:7,  l:8,  bp:28, bc:24, db: 4, pts:43, highlight:true },
      { pos:6,  team:"Eintracht Frankfurt", j:27, g:12, n:7,  l:8,  bp:27, bc:25, db: 2, pts:43, zone:"promo" },
      { pos:7,  team:"Stuttgart",           j:27, g:12, n:6,  l:9,  bp:34, bc:25, db: 9, pts:42 },
      { pos:8,  team:"FC Köln",             j:27, g:12, n:4,  l:11, bp:27, bc:33, db:-6, pts:40 },
      { pos:9,  team:"Mainz 05",            j:27, g:10, n:6,  l:11, bp:22, bc:23, db:-1, pts:36 },
      { pos:10, team:"Heidenheim",          j:27, g:10, n:6,  l:11, bp:31, bc:36, db:-5, pts:36 },
      { pos:11, team:"Gladbach",            j:27, g:8,  n:10, l:9,  bp:22, bc:25, db:-3, pts:34 },
      { pos:12, team:"Union Berlin",        j:27, g:8,  n:9,  l:10, bp:25, bc:30, db:-5, pts:33 },
      { pos:13, team:"Freiburg",            j:27, g:8,  n:7,  l:12, bp:26, bc:34, db:-8, pts:31 },
      { pos:14, team:"Hoffenheim",          j:27, g:9,  n:4,  l:14, bp:27, bc:39, db:-12,pts:31 },
      { pos:15, team:"Werder Bremen",       j:27, g:8,  n:2,  l:17, bp:23, bc:40, db:-17,pts:26 },
      { pos:16, team:"Hamburg",             j:27, g:5,  n:8,  l:14, bp:23, bc:35, db:-12,pts:23 },
      { pos:17, team:"St Pauli",            j:27, g:4,  n:7,  l:16, bp:18, bc:29, db:-11,pts:19, zone:"releg" },
      { pos:18, team:"Augsburg",            j:27, g:2,  n:9,  l:16, bp:15, bc:33, db:-18,pts:15, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
