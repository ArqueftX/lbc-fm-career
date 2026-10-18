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
 *    "zone" d'une ligne : ucl, uel, uecl, releg-playoff, releg (+ champion:true) —
 *    la légende sous le classement se construit toute seule (voir standings-zones.js).
 *  ▸ "scorers/assists/ratings" : stats cumulées, mises à jour chaque mois.
 *  ▸ "transfers/departures"    : mercato (juillet + août d'un coup, puis hiver).
 *  ▸ "splash" : à AJOUTER seulement quand la saison est terminée.
 *  ▸ "position" (dans un mois, facultatif) : classement en championnat à la fin du mois.
 *    Dès que 2 mois en ont une, la trajectoire mois par mois s'affiche.
 */
window['SEASONS_wolfsburg-pep'] = [

  /* ─── SAISON 2026/27 · TERMINÉE ──────────────────────── */
  {
    id:           "wolfsburg-pep-2026-27",
    year:         "2026/27",
    league:       "Bundesliga",
    status:       "termine",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Saison terminée",
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
      {
        key: "01", label: "Janvier 2027", position: 16,
        note: "Mois catastrophique : un seul point en Bundesliga, trois défaites sans marquer contre Hoffenheim, Francfort et le Bayern. Wolfsburg tombe 16e, en barrage de relégation. En Europa League, Qarabağ est battu malgré le rouge d'Arnold — la 18e place envoie les Loups en barrages.",
        matches: [
          { r:"W", tip:"PSV Eindhoven (D) 2-0",       comp:"AM" },
          { r:"D", tip:"Gladbach (D) 1-1",            comp:"BL" },
          { r:"L", tip:"Hoffenheim (E) 2-0",          comp:"BL" },
          { r:"L", tip:"Atalanta (E) 2-0",            comp:"EL" },
          { r:"L", tip:"Eintracht Frankfurt (D) 1-3", comp:"BL" },
          { r:"W", tip:"Qarabağ FK (D) 2-0",          comp:"EL", tag:"ROUGE · ARNOLD" },
          { r:"L", tip:"Bayern München (D) 0-3",      comp:"BL" },
        ],
      },
      {
        key: "02", label: "Février 2027", position: 12,
        note: "Réaction en Bundesliga : succès à Berlin puis contre Cologne, Wolfsburg remonte à la 12e place malgré deux revers contre Mayence et Leipzig. Fin de l'aventure européenne : Valence sort les Loups en barrages (1-1 à domicile, puis défaite 2-0 en Espagne).",
        matches: [
          { r:"W", tip:"Union Berlin (E) 0-1",        comp:"BL" },
          { r:"D", tip:"Valencia (D) 1-1",            comp:"EL", tag:"BARRAGES · ALLER" },
          { r:"W", tip:"FC Köln (D) 2-0",             comp:"BL" },
          { r:"L", tip:"Valencia (E) 2-0",            comp:"EL", tag:"ÉLIMINÉ · 1-3 SUR 2 MATCHS" },
          { r:"L", tip:"Mainz 05 (E) 1-0",            comp:"BL" },
          { r:"L", tip:"RB Leipzig (D) 1-2",          comp:"BL" },
        ],
      },
      {
        key: "03", label: "Mars 2027", position: 12,
        note: "Mois en demi-teinte : victoire à Heidenheim (1-2), puis deux revers contre Hambourg (0-1 à domicile) et à Fribourg (2-0). Wolfsburg reste 12e avec 28 points, trois longueurs au-dessus de la place de barragiste.",
        matches: [
          { r:"W", tip:"Heidenheim (E) 1-2",          comp:"BL" },
          { r:"L", tip:"Hamburg (D) 0-1",             comp:"BL" },
          { r:"L", tip:"Freiburg (E) 2-0",            comp:"BL" },
        ],
      },
      {
        key: "04", label: "Avril 2027", position: 13,
        note: "Deux nuls de prestige, à Leverkusen puis contre Dortmund (1-1 à chaque fois), une défaite chez le Hertha (2-1) et une victoire contre Kiel (2-0). Wolfsburg glisse au 13e rang, seulement 2 points devant Gladbach, barragiste, à trois journées de la fin. Le Bayern est déjà sacré champion.",
        matches: [
          { r:"D", tip:"Bayer Leverkusen (E) 1-1",    comp:"BL" },
          { r:"D", tip:"Dortmund (D) 1-1",            comp:"BL" },
          { r:"L", tip:"Hertha (E) 2-1",              comp:"BL" },
          { r:"W", tip:"Holstein Kiel (D) 2-0",       comp:"BL" },
        ],
      },
      {
        key: "05", label: "Mai 2027", position: 12,
        note: "Fin de saison sans défaite : nul à Hanovre (1-1), nul spectaculaire contre Stuttgart (2-2), puis victoire à Mönchengladbach (0-1) lors de la dernière journée. Wolfsburg termine 12e avec 38 points, quatre matchs sans perdre pour finir.",
        matches: [
          { r:"D", tip:"Hannover (E) 1-1",            comp:"BL" },
          { r:"D", tip:"Stuttgart (D) 2-2",           comp:"BL" },
          { r:"W", tip:"Gladbach (E) 0-1",            comp:"BL" },
        ],
      },
    ],

    scorers: [
      { name: "Mustafa Hekimoğlu", detail: "BU · Turc · 20 ans",        value: 8 },
      { name: "Dženan Pejčinović", detail: "BU · Allemand · 22 ans",    value: 7 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 29 ans",     value: 5 },
    ],
    assists: [
      { name: "Christian Eriksen", detail: "MOC · Danois · 35 ans",     value: 10 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 29 ans",     value: 8 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 26 ans",  value: 3 },
    ],
    // Meilleures et pires moyennes : au moins 17 matchs joués (la moitié des 34 journées de Bundesliga)
    ratings: [
      { name: "Maximilian Arnold", detail: "MDC · Allemand · 33 ans · 35 tit. · 2 buts · 1 passe D.",            value: 7.08 },
      { name: "Elias Baum",        detail: "DD · Allemand · 21 ans · 27 tit. / 6 rempl. · 1 but · 1 passe D.",   value: 6.94 },
      { name: "Patrick Wimmer",    detail: "AD · Autrichien · 26 ans · 25 tit. · 2 buts · 3 passes D.",          value: 6.93 },
    ],
    flops: [
      { name: "Aster Vranckx",     detail: "MC · Belge · 24 ans · 13 tit. / 14 rempl. · 1 but · 1 passe D.",    value: 6.51 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 35 ans · 42 tit. · 4 buts · 10 passes D.",            value: 6.55 },
      { name: "Lovro Majer",       detail: "MOC · Croate · 29 ans · 39 tit. · 5 buts · 8 passes D.",             value: 6.57 },
    ],

    transfers: [
      { type: "buy",  name: "Mustafa Hekimoğlu", from: "Beşiktaş",            date: "Été 2026", amount: "7,75M €" },
      { type: "buy",  name: "Elias Baum",        from: "Eintracht Frankfurt", date: "Été 2026", amount: "7M €"    },
      { type: "loan", name: "Matheo Raab",       from: "Union Berlin",        date: "Été 2026" },
      { type: "buy",  name: "Adrian",            from: "Nürnberg",           date: "Jan. 2027", amount: "22,5K €" },
      { type: "loan", name: "Derry Scherhant",   from: "Freiburg (option d'achat 2,4M€)", date: "Jan. 2027" },
      { type: "loan", name: "Mario De Luis",     from: "Atlético de Madrid", date: "Fév. 2027" },
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
      { type: "loan", name: "Mohamed Amoura",   to: "Tottenham (option d'achat 31M€)",      date: "Jan. 2027" },
      { type: "sell", name: "Max Greger",       to: "Bologna",                              date: "Jan. 2027", amount: "325K €" },
      { type: "loan", name: "Vini Souza",       to: "Corinthians (option d'achat 8M€)",     date: "Fév. 2027" },
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
      phase: "Phase de championnat : 18e sur 36 · 4V 1N 3D · 13 pts · éliminé en barrages par Valence (1-3 sur les deux matchs)",
      rounds: [
        { result: "W", round: "J1", score: "2 – 0", opponent: "Urartu (D)" },
        { result: "L", round: "J2", score: "2 – 1", opponent: "Everton (E)" },
        { result: "W", round: "J3", score: "0 – 1", opponent: "Víkingur Reykjavík (E)" },
        { result: "W", round: "J4", score: "0 – 1", opponent: "Crvena zvezda (E)" },
        { result: "D", round: "J5", score: "1 – 1", opponent: "Fiorentina (D)" },
        { result: "L", round: "J6", score: "1 – 2", opponent: "Lech Poznań (D)" },
        { result: "L", round: "J7", score: "2 – 0", opponent: "Atalanta (E)" },
        { result: "W", round: "J8", score: "2 – 0", opponent: "Qarabağ FK (D)" },
        { result: "D", round: "Barrages · aller",  score: "1 – 1", opponent: "Valencia (D)" },
        { result: "L", round: "Barrages · retour", score: "2 – 0", opponent: "Valencia (E) · cumul 1-3, éliminé" },
      ],
    },

    elTableTitle: "Classement · Phase de championnat (Europa League)",
    elTable: [
      { pos:1,  team:"Benfica",             j:8, g:7, n:0, l:1, bp:14, bc:5,  db:9,  pts:21, zone:"promo" },
      { pos:2,  team:"Atalanta",            j:8, g:6, n:1, l:1, bp:12, bc:7,  db:5,  pts:19, zone:"promo" },
      { pos:3,  team:"Olympiacos",          j:8, g:5, n:3, l:0, bp:11, bc:3,  db:8,  pts:18, zone:"promo" },
      { pos:4,  team:"Fiorentina",          j:8, g:5, n:2, l:1, bp:12, bc:3,  db:9,  pts:17, zone:"promo" },
      { pos:5,  team:"Eintracht Frankfurt", j:8, g:5, n:1, l:2, bp:13, bc:5,  db:8,  pts:16, zone:"promo" },
      { pos:6,  team:"Man Utd",             j:8, g:5, n:1, l:2, bp:17, bc:10, db:7,  pts:16, zone:"promo" },
      { pos:7,  team:"Fenerbahçe",          j:8, g:5, n:1, l:2, bp:11, bc:5,  db:6,  pts:16, zone:"promo" },
      { pos:8,  team:"FC København",        j:8, g:4, n:3, l:1, bp:9,  bc:5,  db:4,  pts:15, zone:"promo" },
      { pos:9,  team:"Valencia",            j:8, g:4, n:3, l:1, bp:9,  bc:6,  db:3,  pts:15 },
      { pos:10, team:"Braga",               j:8, g:5, n:0, l:3, bp:11, bc:10, db:1,  pts:15 },
      { pos:11, team:"Lyon",                j:8, g:4, n:2, l:2, bp:10, bc:4,  db:6,  pts:14 },
      { pos:12, team:"Everton",             j:8, g:4, n:2, l:2, bp:16, bc:11, db:5,  pts:14 },
      { pos:13, team:"Lech Poznań",         j:8, g:4, n:2, l:2, bp:13, bc:8,  db:5,  pts:14 },
      { pos:14, team:"Anderlecht",          j:8, g:4, n:2, l:2, bp:14, bc:12, db:2,  pts:14 },
      { pos:15, team:"Strasbourg",          j:8, g:4, n:1, l:3, bp:16, bc:10, db:6,  pts:13 },
      { pos:16, team:"Trabzonspor",         j:8, g:4, n:1, l:3, bp:12, bc:9,  db:3,  pts:13 },
      { pos:17, team:"Sporting CP",         j:8, g:4, n:1, l:3, bp:12, bc:9,  db:3,  pts:13 },
      { pos:18, team:"Wolfsburg",           j:8, g:4, n:1, l:3, bp:9,  bc:7,  db:2,  pts:13, highlight:true },
      { pos:19, team:"Real Betis",          j:8, g:4, n:1, l:3, bp:9,  bc:7,  db:2,  pts:13 },
      { pos:20, team:"Monaco",              j:8, g:3, n:3, l:2, bp:12, bc:10, db:2,  pts:12 },
      { pos:21, team:"Red Bull Salzburg",   j:8, g:3, n:3, l:2, bp:9,  bc:8,  db:1,  pts:12 },
      { pos:22, team:"Beşiktaş",            j:8, g:2, n:5, l:1, bp:9,  bc:5,  db:4,  pts:11 },
      { pos:23, team:"Qarabağ FK",          j:8, g:3, n:1, l:4, bp:7,  bc:9,  db:-2, pts:10 },
      { pos:24, team:"Genk",                j:8, g:3, n:0, l:5, bp:7,  bc:10, db:-3, pts:9 },
      { pos:25, team:"FC Utrecht",          j:8, g:2, n:2, l:4, bp:10, bc:13, db:-3, pts:8, zone:"releg" },
      { pos:26, team:"Legia Warszawa",      j:8, g:2, n:2, l:4, bp:7,  bc:10, db:-3, pts:8, zone:"releg" },
      { pos:27, team:"Lugano",              j:8, g:2, n:1, l:5, bp:5,  bc:7,  db:-2, pts:7, zone:"releg" },
    ],

    // Classement final (zones affichées par le jeu en fin de saison)
    standings: [
      { pos:1,  team:"Bayern München",        j:34, g:27, n:4,  l:3,  bp:71, bc:19, db:52, pts:85, zone:"ucl", champion:true },
      { pos:2,  team:"Dortmund",              j:34, g:18, n:11, l:5,  bp:42, bc:24, db:18, pts:65, zone:"ucl" },
      { pos:3,  team:"Stuttgart",             j:34, g:16, n:10, l:8,  bp:48, bc:37, db:11, pts:58, zone:"ucl" },
      { pos:4,  team:"Eintracht Frankfurt",   j:34, g:16, n:9,  l:9,  bp:46, bc:31, db:15, pts:57, zone:"ucl" },
      { pos:5,  team:"RB Leipzig",            j:34, g:14, n:10, l:10, bp:52, bc:42, db:10, pts:52, zone:"uel" },
      { pos:6,  team:"Bayer Leverkusen",      j:34, g:13, n:13, l:8,  bp:36, bc:27, db:9, pts:52, zone:"uel" },
      { pos:7,  team:"Heidenheim",            j:34, g:14, n:8,  l:12, bp:37, bc:39, db:-2, pts:50, zone:"uecl" },
      { pos:8,  team:"Union Berlin",          j:34, g:13, n:7,  l:14, bp:30, bc:37, db:-7, pts:46 },
      { pos:9,  team:"Mainz 05",              j:34, g:11, n:12, l:11, bp:33, bc:35, db:-2, pts:45 },
      { pos:10, team:"Hoffenheim",            j:34, g:12, n:8,  l:14, bp:42, bc:46, db:-4, pts:44 },
      { pos:11, team:"Freiburg",              j:34, g:10, n:9,  l:15, bp:38, bc:36, db:2, pts:39 },
      { pos:12, team:"Wolfsburg",             j:34, g:10, n:8,  l:16, bp:33, bc:42, db:-9, pts:38, highlight:true },
      { pos:13, team:"FC Köln",               j:34, g:6,  n:17, l:11, bp:26, bc:38, db:-12, pts:35 },
      { pos:14, team:"Hamburg",               j:34, g:9,  n:8,  l:17, bp:19, bc:33, db:-14, pts:35 },
      { pos:15, team:"Gladbach",              j:34, g:8,  n:11, l:15, bp:30, bc:49, db:-19, pts:35 },
      { pos:16, team:"Hannover",              j:34, g:7,  n:11, l:16, bp:23, bc:33, db:-10, pts:32 },
      { pos:17, team:"Hertha",                j:34, g:9,  n:5,  l:20, bp:25, bc:44, db:-19, pts:32, zone:"releg" },
      { pos:18, team:"Holstein Kiel",         j:34, g:6,  n:13, l:15, bp:20, bc:39, db:-19, pts:31, zone:"releg" },
    ],

    // Effectif en fin de saison (mai 2027)
    squad: [
      { n:"Mario De Luis",       p:"GB",  nat:"ESP", age:25 },
      { n:"Spyridon Souliotis",  p:"GB",  nat:"GRE", age:20 },
      { n:"Marius Müller",       p:"GB",  nat:"GER", age:33 },
      { n:"Matheo Raab",         p:"GB",  nat:"GER", age:28 },
      { n:"Jonas Adjetey",       p:"DC",  nat:"GHA", age:23 },
      { n:"Ole Brammer",         p:"DC",  nat:"GER", age:20 },
      { n:"Cleiton",             p:"DC",  nat:"BRA", age:24 },
      { n:"Denis Vavro",         p:"DC",  nat:"SVK", age:31 },
      { n:"Till Neininger",      p:"DC",  nat:"GER", age:20 },
      { n:"Kostas Koulierakis",  p:"DC",  nat:"GRE", age:23 },
      { n:"Moritz Jenz",         p:"DC",  nat:"NGA", age:28 },
      { n:"Gastón Álvarez",      p:"DG",  nat:"URU", age:27 },
      { n:"Jan Bürger",          p:"DD",  nat:"GER", age:20 },
      { n:"Saël Kumbedi",        p:"DD",  nat:"FRA", age:22 },
      { n:"Kevin Paredes",       p:"DG",  nat:"USA", age:24 },
      { n:"Nicolas Cozza",       p:"DG",  nat:"FRA", age:28 },
      { n:"Mathys Angély",       p:"DG",  nat:"FRA", age:20 },
      { n:"Aaron Zehnter",       p:"DG",  nat:"GER", age:22 },
      { n:"Elias Baum",          p:"DD",  nat:"GER", age:21 },
      { n:"Bence Dárdai",        p:"MDC", nat:"HUN", age:21 },
      { n:"Eduard Löwen",        p:"MDC", nat:"GER", age:30 },
      { n:"Maximilian Arnold",   p:"MDC", nat:"GER", age:33 },
      { n:"Aster Vranckx",       p:"MC",  nat:"BEL", age:24 },
      { n:"Elia Dittrich",       p:"MDC", nat:"GER", age:19 },
      { n:"Miguel Boog",         p:"MDC", nat:"GER", age:19 },
      { n:"Pharell Hensel",      p:"MDC", nat:"GER", age:19 },
      { n:"Christian Eriksen",   p:"MOC", nat:"DEN", age:35 },
      { n:"Darwin Soylu",        p:"MC",  nat:"TUR", age:20 },
      { n:"Lovro Majer",         p:"MOC", nat:"CRO", age:29 },
      { n:"Patrick Wimmer",      p:"AD",  nat:"AUT", age:26 },
      { n:"Andreas Skov Olsen",  p:"AD",  nat:"DEN", age:27 },
      { n:"Trevor Benedict",     p:"AG",  nat:"NGA", age:20 },
      { n:"Dženan Pejčinović",   p:"BU",  nat:"GER", age:22 },
      { n:"Derry Scherhant",     p:"BU",  nat:"GER", age:24 },
      { n:"Mustafa Hekimoğlu",   p:"BU",  nat:"TUR", age:20 },
      { n:"Kento Shiogai",       p:"BU",  nat:"JPN", age:22 },
      { n:"Karlo Simic",         p:"BU",  nat:"CRO", age:19 },
    ],

    splash: {
      eyebrow:  "2026/27 · VfL Wolfsburg · Saison 2",
      lines:    ["DOUZIÈMES.", "L'EUROPE EN BONUS."],
      sub:      "Bundesliga · 12e · 38 pts · Barrages d'Europa League",
      tagline:  "Une saison à deux visages pour Pep Guardiola : des Loups longtemps à la peine en Bundesliga (16es en janvier), une campagne européenne poussée jusqu'aux barrages face à Valence, puis un printemps plus serein conclu par quatre matchs sans défaite.",
    },
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
        key: "04", label: "Avril 2026", position: 4,
        note: "Sans-faute ou presque : nul à Leverkusen puis trois victoires de rang. Porté par un triplé d'Amoura contre Gladbach, Wolfsburg grimpe 4e, en pleine zone Champions League.",
        matches: [
          { r:"D", tip:"Bayer Leverkusen (E) 0-0",   comp:"BL" },
          { r:"W", tip:"Eintracht Frankfurt (D) 2-1", comp:"BL" },
          { r:"W", tip:"Union Berlin (E) 0-1",        comp:"BL" },
          { r:"W", tip:"Gladbach (D) 3-2",            comp:"BL" },
        ],
      },
      {
        key: "05", label: "Mai 2026", position: 5,
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
      tagline:  "Pour sa première saison sur le banc, Pep Guardiola installe les Loups dans le Top 5 et décroche un billet européen — au terme d'un sprint final haletant.",
    },
  },

]
