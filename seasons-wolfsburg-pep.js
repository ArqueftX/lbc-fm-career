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

  /* ─── SAISON 2026/27 · EN COURS ──────────────────────── */
  {
    id:           "wolfsburg-pep-2026-27",
    year:         "2026/27",
    league:       "Bundesliga",
    status:       "en_cours",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Septembre 2026",
    position:     null,

    months: [
      {
        key: "07", label: "Juillet 2026",
        note: "Préparation parfaite : quatre amicaux, quatre victoires.",
        matches: [
          { r:"W", tip:"PAOK (D) 2-0",               comp:"AM" },
          { r:"W", tip:"Red Bull Salzburg (E) 0-1",  comp:"AM" },
          { r:"W", tip:"Grazer AK 1902 (E) 0-1",     comp:"AM" },
          { r:"W", tip:"Hertha Wels (E) 0-1",        comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2026",
        note: "Reprise officielle laborieuse : qualification en coupe aux t.a.b. à Magdebourg, puis deux nuls pour lancer la Bundesliga.",
        matches: [
          { r:"L", tip:"Maccabi Haifa (E) 3-2",        comp:"AM"  },
          { r:"W", tip:"1. FC Magdeburg (E) 1-1",      comp:"DFB", tag:"QUALIF. T.A.B. 5-4" },
          { r:"D", tip:"Eintracht Frankfurt (E) 2-2",  comp:"BL"  },
          { r:"D", tip:"Hoffenheim (D) 1-1",           comp:"BL"  },
        ],
      },
      {
        key: "09", label: "Septembre 2026",
        note: "Mois à trois visages : solide à domicile (Union, Mayence), mais battu d'un rien chez le Bayern et à Cologne. Lancement réussi en Europa League.",
        matches: [
          { r:"L", tip:"Bayern München (E) 1-0", comp:"BL" },
          { r:"W", tip:"Union Berlin (D) 2-0",   comp:"BL" },
          { r:"W", tip:"Urartu (D) 2-0",         comp:"EL" },
          { r:"L", tip:"FC Köln (E) 1-0",        comp:"BL" },
          { r:"L", tip:"Everton (E) 2-1",        comp:"EL" },
          { r:"W", tip:"Mainz 05 (D) 2-0",       comp:"BL" },
        ],
      },
    ],

    scorers: [
      { name: "Dzenan Pejcinović · Mohamed Amoura", detail: "BU · ex-aequo", value: 2 },
      { name: "Wimmer · Vranckx · Hekimoğlu · Zehnter · Jenz · Paredes · Shiogai", detail: "7 joueurs à égalité", value: 1 },
    ],
    assists: [
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans", value: 3 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 28 ans", value: 2 },
      { name: "Patrick Wimmer · Jan Bürger", detail: "AD / DD · ex-aequo", value: 1 },
    ],
    ratings: [
      { name: "Jan Bürger",        detail: "DD · 1 tit. / 4 rempl. · 1 passe D.", value: 7.60 },
      { name: "Maximilian Arnold", detail: "MDC · 5 tit.", value: 7.18 },
      { name: "Patrick Wimmer",    detail: "AD · 5 tit. · 1 but · 1 passe D.", value: 7.03 },
    ],
    flops: [
      { name: "Aster Vranckx",     detail: "MC · Belge · 23 ans · 4 tit. / 2 rempl. · 1 but", value: 6.48 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 28 ans · 8 tit. · 2 passes D.", value: 6.50 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans · 8 tit. · 3 passes D.", value: 6.59 },
    ],

    transfers: [
      { type: "buy",  name: "Mustafa Hekimoğlu", from: "Beşiktaş",            date: "Été 2026", amount: "7,75M €" },
      { type: "buy",  name: "Elias Baum",        from: "Eintracht Frankfurt", date: "Été 2026", amount: "7M €"    },
      { type: "loan", name: "Matheo Raab",       from: "Union Berlin",        date: "Été 2026" },
    ],
    departures: [
      { type: "sell", name: "Kamil Grabara",    to: "Barcelona",                            date: "Été 2026", amount: "15,75M €" },
      { type: "sell", name: "Jakub Kamiński",   to: "FC Köln (transfert définitif)",        date: "Juin 2026", amount: "5,5M €" },
      { type: "sell", name: "Mattias Svanberg", to: "Mallorca (transfert définitif)",       date: "Juin 2026", amount: "4,7M €" },
      { type: "sell", name: "Yannick Gerhardt", to: "Werder Bremen",                        date: "Été 2026", amount: "1,8M €"  },
      { type: "loan", name: "Kilian Fischer",   to: "Leeds Utd (achat obligatoire 2,2M€)",  date: "Été 2026" },
      { type: "free", name: "Jonas Wind",       to: "Freiburg",                             date: "Été 2026" },
      { type: "free", name: "Yasin Chebil",     to: "Werder Bremen",                        date: "Été 2026" },
      { type: "loan", name: "Vini Souza",       to: "Flamengo (clause 4,9M€ après 15 matchs)", date: "Été 2026" },
      { type: "loan", name: "Eryk Grzywacz",    to: "SV Elversberg",                        date: "Été 2026" },
      { type: "free", name: "Justin Cruz",      to: "TeBe Berlin",                          date: "Été 2026" },
      { type: "loan", name: "Panos Katseris",   to: "Sevilla (achat obligatoire 2,4M€)",    date: "Sep. 2026" },
      { type: "loan", name: "Bartol Franjić",   to: "Dinamo Zagreb",                        date: "Sep. 2026" },
    ],

    cup:  {
      name: "DFB-Pokal",
      rounds: [
        { result: "W", round: "1er tour", score: "1 – 1", opponent: "1. FC Magdeburg (E) · 5-4 t.a.b." },
      ],
    },
    cup2: {
      name: "UEFA Europa League",
      phase: "Phase de championnat : 13e sur 36 · 1V 1D · 3 pts",
      rounds: [
        { result: "W", round: "J1", score: "2 – 0", opponent: "Urartu (D)" },
        { result: "L", round: "J2", score: "2 – 1", opponent: "Everton (E)" },
      ],
    },

    standings: [
      { pos:1,  team:"Stuttgart",           j:6, g:5, n:1, l:0, bp:11, bc:4,  db: 7, pts:16, zone:"promo" },
      { pos:2,  team:"Bayern München",      j:6, g:5, n:0, l:1, bp:11, bc:2,  db: 9, pts:15, zone:"promo" },
      { pos:3,  team:"Union Berlin",        j:5, g:4, n:0, l:1, bp:7,  bc:4,  db: 3, pts:12, zone:"promo" },
      { pos:4,  team:"Dortmund",            j:5, g:3, n:2, l:0, bp:8,  bc:5,  db: 3, pts:11, zone:"promo" },
      { pos:5,  team:"Eintracht Frankfurt", j:6, g:2, n:3, l:1, bp:11, bc:6,  db: 5, pts:9 },
      { pos:6,  team:"Wolfsburg",           j:6, g:2, n:2, l:2, bp:7,  bc:5,  db: 2, pts:8, highlight:true },
      { pos:7,  team:"Bayer Leverkusen",    j:5, g:2, n:2, l:1, bp:5,  bc:3,  db: 2, pts:8 },
      { pos:8,  team:"Gladbach",            j:6, g:2, n:2, l:2, bp:7,  bc:8,  db:-1, pts:8 },
      { pos:9,  team:"RB Leipzig",          j:5, g:1, n:4, l:0, bp:6,  bc:4,  db: 2, pts:7 },
      { pos:10, team:"Hoffenheim",          j:6, g:2, n:1, l:3, bp:8,  bc:9,  db:-1, pts:7 },
      { pos:11, team:"Freiburg",            j:6, g:2, n:1, l:3, bp:6,  bc:7,  db:-1, pts:7 },
      { pos:12, team:"FC Köln",             j:6, g:1, n:3, l:2, bp:2,  bc:4,  db:-2, pts:6 },
      { pos:13, team:"Heidenheim",          j:5, g:1, n:2, l:2, bp:4,  bc:6,  db:-2, pts:5 },
      { pos:14, team:"Hamburg",             j:5, g:1, n:2, l:2, bp:1,  bc:4,  db:-3, pts:5 },
      { pos:15, team:"Mainz 05",            j:6, g:1, n:2, l:3, bp:4,  bc:8,  db:-4, pts:5 },
      { pos:16, team:"Holstein Kiel",       j:6, g:1, n:1, l:4, bp:4,  bc:11, db:-7, pts:4 },
      { pos:17, team:"Hertha",              j:6, g:1, n:0, l:5, bp:5,  bc:12, db:-7, pts:3, zone:"releg" },
      { pos:18, team:"Hannover",            j:6, g:0, n:2, l:4, bp:2,  bc:7,  db:-5, pts:2, zone:"releg" },
    ],

    // Effectif (se met à jour avec le mercato de la saison)
    squad: [
      { n:"Matheo Raab",         p:"GB",  nat:"ALL", age:27 },
      { n:"Spyridon Souliotis",  p:"GB",  nat:"GRE", age:19 },
      { n:"Marius Müller",       p:"GB",  nat:"ALL", age:33 },
      { n:"Ole Brammer",         p:"DD",  nat:"ALL", age:19 },
      { n:"Jonas Adjetey",       p:"DC",  nat:"GHA", age:22 },
      { n:"Cleiton",             p:"DC",  nat:"BRÉ", age:23 },
      { n:"Till Neininger",      p:"DC",  nat:"ALL", age:19 },
      { n:"Moritz Jenz",         p:"DC",  nat:"NGA", age:27 },
      { n:"Kostas Koulierakis",  p:"DC",  nat:"GRE", age:22 },
      { n:"Denis Vavro",         p:"DC",  nat:"SVK", age:30 },
      { n:"Gastón Álvarez",      p:"DC",  nat:"URU", age:26 },
      { n:"Saël Kumbedi",        p:"DD",  nat:"FRA", age:21 },
      { n:"Jan Bürger",          p:"DD",  nat:"ALL", age:19 },
      { n:"Nicolas Cozza",       p:"DG",  nat:"FRA", age:27 },
      { n:"Mathys Angély",       p:"DC",  nat:"FRA", age:19 },
      { n:"Rogério",             p:"DG",  nat:"BRÉ", age:28 },
      { n:"Elias Baum",          p:"DD",  nat:"ALL", age:20 },
      { n:"Miguel Boog",         p:"MDC", nat:"ALL", age:18 },
      { n:"Pharell Hensel",      p:"MC",  nat:"ALL", age:19 },
      { n:"Elia Dittrich",       p:"MDC", nat:"ALL", age:19 },
      { n:"Bence Dárdai",        p:"MC",  nat:"HON", age:20 },
      { n:"Maximilian Arnold",   p:"MDC", nat:"ALL", age:32 },
      { n:"Aster Vranckx",       p:"MC",  nat:"BEL", age:23 },
      { n:"Eduard Löwen",        p:"MC",  nat:"ALL", age:29 },
      { n:"Christian Eriksen",   p:"MOC", nat:"DAN", age:34 },
      { n:"Darwin Soylu",        p:"MC",  nat:"TUR", age:19 },
      { n:"Lovro Majer",         p:"MOC", nat:"CRO", age:28 },
      { n:"Aaron Zehnter",       p:"ALG", nat:"ALL", age:21 },
      { n:"Kevin Paredes",       p:"AG",  nat:"USA", age:23 },
      { n:"Andreas Skov Olsen",  p:"AD",  nat:"DAN", age:26 },
      { n:"Trevor Benedict",     p:"AG",  nat:"ALL", age:19 },
      { n:"Patrick Wimmer",      p:"AD",  nat:"AUT", age:25 },
      { n:"Kento Shiogai",       p:"BU",  nat:"JPN", age:21 },
      { n:"Mustafa Hekimoğlu",   p:"BU",  nat:"TUR", age:19 },
      { n:"Mohamed Amoura",      p:"BU",  nat:"ALG", age:26 },
      { n:"Dzenan Pejcinović",   p:"BU",  nat:"ALL", age:21 },
      { n:"Karlo Simić",         p:"BU",  nat:"CRO", age:19 },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

  /* ─── SAISON 2025/26 · TERMINÉE ──────────────────────── */
  {
    id:           "wolfsburg-pep-2025-26",
    year:         "2025/26",
    league:       "Bundesliga",
    status:       "termine",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Saison terminée",

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
      {
        key: "05", label: "Mai 2026",
        note: "Fin de saison en demi-teinte : défaites à Fribourg et face au champion bavarois, mais une victoire à St Pauli scelle la 5e place — et l'Europa League.",
        matches: [
          { r:"L", tip:"Freiburg (E) 1-0",        comp:"BL" },
          { r:"L", tip:"Bayern München (D) 0-1", comp:"BL" },
          { r:"W", tip:"St Pauli (E) 1-2",       comp:"BL" },
        ],
      },
    ],

    // Stats finales
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 21 ans", value: 9 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans", value: 7 },
      { name: "Mohamed Amoura",    detail: "BU · Algérien · 26 ans", value: 6 },
    ],
    assists: [
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 32 ans", value: 5 },
      { name: "Eriksen · Pejcinović", detail: "MOC / BU · ex-aequo", value: 4 },
      { name: "Amoura · Majer · Koulierakis · Gerhardt", detail: "4 joueurs à égalité", value: 2 },
    ],
    ratings: [
      { name: "Patrick Wimmer",    detail: "AD · 29 tit. · 5 buts · 1 passe D.", value: 7.04 },
      { name: "Dzenan Pejcinović", detail: "BU · 14 tit. / 10 rempl. · 9 buts · 4 passes D.", value: 7.00 },
    ],
    flops: [
      { name: "Lovro Majer", detail: "MOC · Croate · 28 ans · 17 tit. / 2 rempl. · 1 but", value: 6.49 },
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

    // Classement final (J34)
    standings: [
      { pos:1,  team:"Bayern München",      j:34, g:26, n:5,  l:3,  bp:69, bc:20, db:49, pts:83, zone:"promo" },
      { pos:2,  team:"RB Leipzig",          j:34, g:22, n:7,  l:5,  bp:54, bc:28, db:26, pts:73, zone:"promo" },
      { pos:3,  team:"Dortmund",            j:34, g:19, n:10, l:5,  bp:48, bc:26, db:22, pts:67, zone:"promo" },
      { pos:4,  team:"Bayer Leverkusen",    j:34, g:16, n:8,  l:10, bp:41, bc:28, db:13, pts:56, zone:"promo" },
      { pos:5,  team:"Wolfsburg",           j:34, g:16, n:8,  l:10, bp:36, bc:30, db: 6, pts:56, highlight:true },
      { pos:6,  team:"Eintracht Frankfurt", j:34, g:16, n:8,  l:10, bp:34, bc:30, db: 4, pts:56, zone:"promo" },
      { pos:7,  team:"FC Köln",             j:34, g:15, n:5,  l:14, bp:38, bc:42, db:-4, pts:50 },
      { pos:8,  team:"Stuttgart",           j:34, g:12, n:11, l:11, bp:35, bc:29, db: 6, pts:47 },
      { pos:9,  team:"Mainz 05",            j:34, g:13, n:7,  l:14, bp:30, bc:33, db:-3, pts:46 },
      { pos:10, team:"Hoffenheim",          j:34, g:13, n:7,  l:14, bp:38, bc:44, db:-6, pts:46 },
      { pos:11, team:"Heidenheim",          j:34, g:11, n:9,  l:14, bp:40, bc:48, db:-8, pts:42 },
      { pos:12, team:"Gladbach",            j:34, g:10, n:11, l:13, bp:29, bc:35, db:-6, pts:41 },
      { pos:13, team:"Freiburg",            j:34, g:11, n:8,  l:15, bp:33, bc:45, db:-12,pts:41 },
      { pos:14, team:"Union Berlin",        j:34, g:8,  n:10, l:16, bp:28, bc:40, db:-12,pts:34 },
      { pos:15, team:"Hamburg",             j:34, g:7,  n:9,  l:18, bp:29, bc:43, db:-14,pts:30 },
      { pos:16, team:"Werder Bremen",       j:34, g:8,  n:4,  l:22, bp:26, bc:53, db:-27,pts:28, zone:"releg" },
      { pos:17, team:"Augsburg",            j:34, g:5,  n:10, l:19, bp:22, bc:39, db:-17,pts:25, zone:"releg" },
      { pos:18, team:"St Pauli",            j:34, g:4,  n:11, l:19, bp:24, bc:41, db:-17,pts:23, zone:"releg" },
    ],

    splash: {
      eyebrow:  "2025/26 · VfL Wolfsburg · Saison 1",
      lines:    ["CINQUIÈMES.", "CAP SUR L'EUROPE."],
      sub:      "Bundesliga · 5e · 56 pts · Qualifié en Europa League",
      tagline:  "Pour sa première saison sur le banc, Arq Queft installe les Loups dans le Top 5 et décroche un billet européen — au terme d'un sprint final haletant.",
    },
  },

]
