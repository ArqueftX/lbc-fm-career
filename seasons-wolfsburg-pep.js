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
    lastUpdate:   "Avril 2026",

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
        note: "Mois agité côté cartons : Amoura puis Arnold expulsés. Mais les Loups renversent Brême (réduite à dix) et restent dans la course à l'Europe.",
        matches: [
          { r:"D", tip:"Hamburg (D) 0-0",      comp:"BL" },
          { r:"L", tip:"Hoffenheim (E) 2-1",   comp:"BL" },
          { r:"W", tip:"Werder Bremen (D) 3-1", comp:"BL" },
        ],
      },
      {
        key: "04", label: "Avril 2026",
        note: "Sans-faute ou presque : nul à Leverkusen puis trois victoires de rang. Porté par un triplé d'Amoura contre Gladbach, Wolfsburg grimpe 4e, en pleine zone Champions League.",
        matches: [
          { r:"D", tip:"Bayer Leverkusen (E) 0-0",   comp:"BL" },
          { r:"W", tip:"Eintracht Frankfurt (D) 2-1", comp:"BL" },
          { r:"W", tip:"Union Berlin (E) 0-1",        comp:"BL" },
          { r:"W", tip:"Gladbach (D) 3-2",            comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 21 ans", value: 9 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans", value: 7 },
      { name: "Mohamed Amoura",    detail: "BU · Algérien · 25 ans", value: 6 },
    ],
    assists: [
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 31 ans", value: 5 },
      { name: "Eriksen · Pejcinović", detail: "MOC / BU · ex-aequo", value: 4 },
      { name: "Amoura · Majer · Gerhardt", detail: "BU / MOC / MC · ex-aequo", value: 2 },
    ],
    ratings: [
      { name: "Patrick Wimmer",    detail: "AD · 26 tit. · 5 buts · 1 passe D.", value: 7.07 },
      { name: "Dzenan Pejcinović", detail: "BU · 14 tit. / 10 rempl. · 9 buts · 4 passes D.", value: 7.00 },
    ],
    flops: [],

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

    // Classement à jour (après J31)
    standings: [
      { pos:1,  team:"Bayern München",      j:31, g:23, n:5,  l:3,  bp:63, bc:18, db:45, pts:74, zone:"promo" },
      { pos:2,  team:"RB Leipzig",          j:31, g:19, n:7,  l:5,  bp:47, bc:26, db:21, pts:64, zone:"promo" },
      { pos:3,  team:"Dortmund",            j:31, g:18, n:9,  l:4,  bp:45, bc:24, db:21, pts:63, zone:"promo" },
      { pos:4,  team:"Wolfsburg",           j:31, g:15, n:8,  l:8,  bp:34, bc:27, db: 7, pts:53, highlight:true },
      { pos:5,  team:"Bayer Leverkusen",    j:31, g:15, n:7,  l:9,  bp:37, bc:25, db:12, pts:52, zone:"promo" },
      { pos:6,  team:"Eintracht Frankfurt", j:31, g:14, n:7,  l:10, bp:31, bc:29, db: 2, pts:49, zone:"promo" },
      { pos:7,  team:"Stuttgart",           j:31, g:12, n:8,  l:11, bp:34, bc:28, db: 6, pts:44 },
      { pos:8,  team:"FC Köln",             j:31, g:13, n:5,  l:13, bp:34, bc:39, db:-5, pts:44 },
      { pos:9,  team:"Heidenheim",          j:31, g:11, n:9,  l:11, bp:38, bc:42, db:-4, pts:42 },
      { pos:10, team:"Mainz 05",            j:31, g:11, n:6,  l:14, bp:25, bc:30, db:-5, pts:39 },
      { pos:11, team:"Hoffenheim",          j:31, g:11, n:6,  l:14, bp:33, bc:42, db:-9, pts:39 },
      { pos:12, team:"Gladbach",            j:31, g:9,  n:11, l:11, bp:27, bc:31, db:-4, pts:38 },
      { pos:13, team:"Freiburg",            j:31, g:9,  n:8,  l:14, bp:30, bc:42, db:-12,pts:35 },
      { pos:14, team:"Union Berlin",        j:31, g:8,  n:10, l:13, bp:27, bc:35, db:-8, pts:34 },
      { pos:15, team:"Hamburg",             j:31, g:7,  n:9,  l:15, bp:28, bc:38, db:-10,pts:30 },
      { pos:16, team:"Werder Bremen",       j:31, g:8,  n:3,  l:20, bp:24, bc:47, db:-23,pts:27 },
      { pos:17, team:"St Pauli",            j:31, g:4,  n:10, l:17, bp:22, bc:36, db:-14,pts:22, zone:"releg" },
      { pos:18, team:"Augsburg",            j:31, g:3,  n:10, l:18, bp:18, bc:38, db:-20,pts:19, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
