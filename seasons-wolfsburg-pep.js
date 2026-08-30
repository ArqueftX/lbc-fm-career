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
    lastUpdate:   "Décembre 2026",
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
      {
        key: "10", label: "Octobre 2026",
        note: "Mois noir : deux victoires seulement en six matchs, l'élimination en Coupe à Stuttgart et deux rouges (Vavro, Arnold). Wolfsburg décroche au classement.",
        matches: [
          { r:"L", tip:"RB Leipzig (E) 3-1",            comp:"BL" },
          { r:"W", tip:"Heidenheim (D) 2-1",           comp:"BL" },
          { r:"W", tip:"Víkingur Reykjavík (E) 0-1",   comp:"EL" },
          { r:"L", tip:"Hamburg (E) 1-0",              comp:"BL" },
          { r:"L", tip:"Stuttgart (E) 1-0",            comp:"DFB", tag:"ÉLIMINÉ · 2e TOUR" },
          { r:"L", tip:"Freiburg (D) 0-3",             comp:"BL" },
        ],
      },
      {
        key: "11", label: "Novembre 2026",
        note: "Cauchemar en championnat : trois défaites 1-0, toutes sur un but encaissé tardivement. Seule l'Europa League sourit encore aux Loups.",
        matches: [
          { r:"W", tip:"Crvena zvezda (E) 0-1",     comp:"EL" },
          { r:"L", tip:"Bayer Leverkusen (D) 0-1",  comp:"BL" },
          { r:"L", tip:"Dortmund (E) 1-0",          comp:"BL" },
          { r:"D", tip:"Fiorentina (D) 1-1",        comp:"EL" },
          { r:"L", tip:"Hertha (D) 0-1",            comp:"BL" },
        ],
      },
      {
        key: "12", label: "Décembre 2026",
        note: "Réaction en Bundesliga : premier succès à l'extérieur depuis septembre à Kiel, Hannover renversé au bout du temps additionnel et un point pris à Stuttgart malgré le rouge d'Eriksen. Revers à domicile contre Lech Poznań en Europa League.",
        matches: [
          { r:"W", tip:"Holstein Kiel (E) 0-2",  comp:"BL" },
          { r:"L", tip:"Lech Poznań (D) 1-2",    comp:"EL" },
          { r:"W", tip:"Hannover (D) 3-2",       comp:"BL" },
          { r:"D", tip:"Stuttgart (E) 1-1",      comp:"BL", tag:"ROUGE · ERIKSEN" },
        ],
      },
    ],

    scorers: [
      { name: "D. Pejcinović · M. Amoura", detail: "BU · Allemand 21 ans / Algérien 26 ans · ex-aequo", value: 4 },
      { name: "K. Shiogai · M. Hekimoğlu", detail: "BU · Japonais 21 ans / Turc 19 ans · ex-aequo",     value: 3 },
      { name: "Christian Eriksen",         detail: "MOC · Danois · 34 ans",                             value: 2 },
    ],
    assists: [
      { name: "Lovro Majer",       detail: "MOC · Croate · 28 ans",     value: 6 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans",     value: 4 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 25 ans",  value: 3 },
    ],
    ratings: [
      { name: "Maximilian Arnold", detail: "MDC & MC · Allemand · 32 ans · 16 tit. · 1 but",                  value: 7.06 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 25 ans · 12 tit. · 1 but · 3 passes D.",         value: 7.05 },
      { name: "Mohamed Amoura",    detail: "BU · Algérien · 26 ans · 20 tit. / 1 rempl. · 4 buts",            value: 6.97 },
    ],
    flops: [
      { name: "Aster Vranckx",     detail: "MC · Belge · 24 ans · 9 tit. / 5 rempl. · 1 but",                      value: 6.51 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 28 ans · 21 tit. · 1 but · 6 passes D.",                 value: 6.56 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 34 ans · 21 tit. · 2 buts · 4 passes D.",                value: 6.56 },
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
        { result: "L", round: "2e tour", score: "1 – 0", opponent: "Stuttgart (E) · éliminé" },
      ],
    },
    cup2: {
      name: "UEFA Europa League",
      phase: "Phase de championnat : 19e sur 36 · 3V 1N 2D · 10 pts",
      rounds: [
        { result: "W", round: "J1", score: "2 – 0", opponent: "Urartu (D)" },
        { result: "L", round: "J2", score: "2 – 1", opponent: "Everton (E)" },
        { result: "W", round: "J3", score: "0 – 1", opponent: "Víkingur Reykjavík (E)" },
        { result: "W", round: "J4", score: "0 – 1", opponent: "Crvena zvezda (E)" },
        { result: "D", round: "J5", score: "1 – 1", opponent: "Fiorentina (D)" },
        { result: "L", round: "J6", score: "1 – 2", opponent: "Lech Poznań (D)" },
      ],
    },

    elTableTitle: "Classement · Phase de championnat (Europa League)",
    elTable: [
      { pos:1,  team:"Benfica",             j:6, g:5, n:0, l:1, bp:11, bc:4, db:7,  pts:15, zone:"promo" },
      { pos:2,  team:"Strasbourg",          j:6, g:4, n:1, l:1, bp:15, bc:6, db:9,  pts:13, zone:"promo" },
      { pos:3,  team:"Lech Poznań",         j:6, g:4, n:1, l:1, bp:10, bc:4, db:6,  pts:13, zone:"promo" },
      { pos:4,  team:"Atalanta",            j:6, g:4, n:1, l:1, bp:9,  bc:7, db:2,  pts:13, zone:"promo" },
      { pos:5,  team:"Trabzonspor",         j:6, g:4, n:0, l:2, bp:11, bc:5, db:6,  pts:12, zone:"promo" },
      { pos:6,  team:"Olympiacos",          j:6, g:3, n:3, l:0, bp:8,  bc:3, db:5,  pts:12, zone:"promo" },
      { pos:7,  team:"Braga",               j:6, g:4, n:0, l:2, bp:8,  bc:7, db:1,  pts:12, zone:"promo" },
      { pos:8,  team:"Everton",             j:6, g:3, n:2, l:1, bp:14, bc:9, db:5,  pts:11, zone:"promo" },
      { pos:9,  team:"Fiorentina",          j:6, g:3, n:2, l:1, bp:7,  bc:3, db:4,  pts:11 },
      { pos:10, team:"FC København",        j:6, g:3, n:2, l:1, bp:7,  bc:4, db:3,  pts:11 },
      { pos:11, team:"Valencia",            j:6, g:3, n:2, l:1, bp:6,  bc:4, db:2,  pts:11 },
      { pos:12, team:"Eintracht Frankfurt", j:6, g:3, n:1, l:2, bp:9,  bc:4, db:5,  pts:10 },
      { pos:13, team:"Beşiktaş",            j:6, g:2, n:4, l:0, bp:8,  bc:3, db:5,  pts:10 },
      { pos:14, team:"Man Utd",             j:6, g:3, n:1, l:2, bp:12, bc:8, db:4,  pts:10 },
      { pos:15, team:"Lyon",                j:6, g:3, n:1, l:2, bp:6,  bc:3, db:3,  pts:10 },
      { pos:16, team:"Monaco",              j:6, g:3, n:1, l:2, bp:10, bc:8, db:2,  pts:10 },
      { pos:17, team:"Sporting CP",         j:6, g:3, n:1, l:2, bp:9,  bc:7, db:2,  pts:10 },
      { pos:18, team:"Fenerbahçe",          j:6, g:3, n:1, l:2, bp:7,  bc:5, db:2,  pts:10 },
      { pos:19, team:"Wolfsburg",           j:6, g:3, n:1, l:2, bp:7,  bc:5, db:2,  pts:10, highlight:true },
      { pos:20, team:"Qarabağ FK",          j:6, g:3, n:1, l:2, bp:7,  bc:5, db:2,  pts:10 },
      { pos:21, team:"Anderlecht",          j:6, g:3, n:1, l:2, bp:9,  bc:8, db:1,  pts:10 },
      { pos:22, team:"Genk",                j:6, g:3, n:0, l:3, bp:7,  bc:8, db:-1, pts:9 },
      { pos:23, team:"Red Bull Salzburg",   j:6, g:2, n:2, l:2, bp:5,  bc:6, db:-1, pts:8 },
      { pos:24, team:"Lugano",              j:6, g:2, n:1, l:3, bp:5,  bc:4, db:1,  pts:7, zone:"releg" },
      { pos:25, team:"FC Utrecht",          j:6, g:2, n:1, l:3, bp:7,  bc:9, db:-2, pts:7, zone:"releg" },
      { pos:26, team:"Real Betis",          j:6, g:2, n:1, l:3, bp:5,  bc:7, db:-2, pts:7, zone:"releg" },
      { pos:27, team:"Viktoria Plzeň",      j:6, g:1, n:2, l:3, bp:6,  bc:9, db:-3, pts:5, zone:"releg" },
    ],

    standings: [
      { pos:1,  team:"Bayern München",      j:16, g:12, n:2, l:2,  bp:32, bc:9,  db:23, pts:38, zone:"promo" },
      { pos:2,  team:"Stuttgart",           j:16, g:9,  n:6, l:1,  bp:25, bc:13, db:12, pts:33, zone:"promo" },
      { pos:3,  team:"Union Berlin",        j:16, g:9,  n:2, l:5,  bp:18, bc:16, db:2,  pts:29, zone:"promo" },
      { pos:4,  team:"Dortmund",            j:16, g:8,  n:4, l:4,  bp:17, bc:13, db:4,  pts:28, zone:"promo" },
      { pos:5,  team:"Eintracht Frankfurt", j:16, g:7,  n:6, l:3,  bp:24, bc:13, db:11, pts:27 },
      { pos:6,  team:"RB Leipzig",          j:16, g:6,  n:8, l:2,  bp:23, bc:16, db:7,  pts:26 },
      { pos:7,  team:"Freiburg",            j:16, g:6,  n:5, l:5,  bp:19, bc:14, db:5,  pts:23 },
      { pos:8,  team:"Bayer Leverkusen",    j:16, g:6,  n:5, l:5,  bp:14, bc:14, db:0,  pts:23 },
      { pos:9,  team:"Heidenheim",          j:16, g:6,  n:5, l:5,  bp:17, bc:18, db:-1, pts:23 },
      { pos:10, team:"Wolfsburg",           j:16, g:5,  n:3, l:8,  bp:16, bc:19, db:-3, pts:18, highlight:true },
      { pos:11, team:"Mainz 05",            j:16, g:4,  n:6, l:6,  bp:14, bc:17, db:-3, pts:18 },
      { pos:12, team:"Hamburg",             j:16, g:4,  n:5, l:7,  bp:6,  bc:12, db:-6, pts:17 },
      { pos:13, team:"Hertha",              j:16, g:5,  n:2, l:9,  bp:13, bc:20, db:-7, pts:17 },
      { pos:14, team:"FC Köln",             j:16, g:3,  n:8, l:5,  bp:10, bc:17, db:-7, pts:17 },
      { pos:15, team:"Gladbach",            j:16, g:4,  n:5, l:7,  bp:14, bc:23, db:-9, pts:17 },
      { pos:16, team:"Hoffenheim",          j:16, g:3,  n:5, l:8,  bp:19, bc:26, db:-7, pts:14 },
      { pos:17, team:"Holstein Kiel",       j:16, g:2,  n:7, l:7,  bp:9,  bc:19, db:-10, pts:13, zone:"releg" },
      { pos:18, team:"Hannover",            j:16, g:0,  n:6, l:10, bp:6,  bc:17, db:-11, pts:6,  zone:"releg" },
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
