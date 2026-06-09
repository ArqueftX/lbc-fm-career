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
    lastUpdate:   "Février 2026",

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
        note: "Réaction immédiate : succès net à Cologne pour relancer la course à l'Europe. Dortmund, Leipzig, Augsbourg et Stuttgart à venir.",
        matches: [
          { r:"W", tip:"FC Köln (E) 0-2", comp:"BL" },
        ],
      },
    ],

    // Stats cumulées
    scorers: [
      { name: "Dzenan Pejcinović", detail: "BU · Allemand · 20 ans", value: 7 },
      { name: "Patrick Wimmer · Christian Eriksen", detail: "AD / MOC · ex-aequo", value: 4 },
      { name: "Adam Daghim",       detail: "AD · Danois · 20 ans · prêté par RB Salzburg", value: 3 },
    ],
    assists: [
      { name: "Pejcinović · Arnold", detail: "BU / MDC · ex-aequo", value: 4 },
      { name: "Wimmer · Katseris · Daghim · Majer · Eriksen · Amoura · Zehnter · Dárdai · Gerhardt · Fischer", detail: "10 joueurs à égalité", value: 1 },
    ],
    ratings: [
      { name: "Patrick Wimmer",    detail: "AD · 16 tit. · 4 buts · 1 passe D.", value: 7.00 },
      { name: "Dzenan Pejcinović", detail: "BU · 14 tit. / 5 rempl. · 7 buts · 4 passes D.", value: 6.99 },
      { name: "Kilian Fischer",    detail: "DD · 16 tit. / 2 rempl. · 1 passe D.", value: 6.96 },
    ],
    flops: [
      { name: "Lovro Majer",       detail: "MOC · Croate · 28 ans · 10 tit. · 1 but · 1 passe D.", value: 6.51 },
      { name: "Christian Eriksen", detail: "MOC · Danois · 33 ans · 21 tit. · 4 buts", value: 6.53 },
      { name: "Jonas Wind",        detail: "BU · Danois · 26 ans · 10 rempl. · 2 buts", value: 6.60 },
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

    // Classement à jour (après J20)
    standings: [
      { pos:1,  team:"Bayern München",      j:20, g:15, n:4, l:1,  bp:38, bc:10, db:28, pts:49, zone:"promo" },
      { pos:2,  team:"RB Leipzig",          j:20, g:13, n:4, l:3,  bp:34, bc:16, db:18, pts:43, zone:"promo" },
      { pos:3,  team:"Dortmund",            j:20, g:11, n:7, l:2,  bp:31, bc:16, db:15, pts:40, zone:"promo" },
      { pos:4,  team:"Bayer Leverkusen",    j:20, g:11, n:4, l:5,  bp:26, bc:14, db:12, pts:37, zone:"promo" },
      { pos:5,  team:"Eintracht Frankfurt", j:20, g:9,  n:6, l:5,  bp:20, bc:17, db: 3, pts:33, zone:"promo" },
      { pos:6,  team:"Wolfsburg",           j:20, g:9,  n:5, l:6,  bp:21, bc:19, db: 2, pts:32, highlight:true },
      { pos:7,  team:"FC Köln",             j:20, g:9,  n:2, l:9,  bp:21, bc:25, db:-4, pts:29 },
      { pos:8,  team:"Heidenheim",          j:20, g:8,  n:4, l:8,  bp:23, bc:27, db:-4, pts:28 },
      { pos:9,  team:"Gladbach",            j:20, g:7,  n:5, l:8,  bp:16, bc:20, db:-4, pts:26 },
      { pos:10, team:"Stuttgart",           j:19, g:7,  n:4, l:8,  bp:21, bc:20, db: 1, pts:25 },
      { pos:11, team:"Hoffenheim",          j:20, g:7,  n:3, l:10, bp:21, bc:30, db:-9, pts:24 },
      { pos:12, team:"Mainz 05",            j:19, g:6,  n:5, l:8,  bp:17, bc:20, db:-3, pts:23 },
      { pos:13, team:"Union Berlin",        j:20, g:5,  n:7, l:8,  bp:17, bc:21, db:-4, pts:22 },
      { pos:14, team:"Freiburg",            j:18, g:5,  n:6, l:7,  bp:19, bc:23, db:-4, pts:21 },
      { pos:15, team:"Hamburg",             j:20, g:5,  n:5, l:10, bp:17, bc:25, db:-8, pts:20 },
      { pos:16, team:"St Pauli",            j:20, g:3,  n:5, l:12, bp:13, bc:23, db:-10,pts:14 },
      { pos:17, team:"Werder Bremen",       j:20, g:4,  n:2, l:14, bp:15, bc:30, db:-15,pts:14, zone:"releg" },
      { pos:18, team:"Augsburg",            j:20, g:1,  n:8, l:11, bp:10, bc:24, db:-14,pts:11, zone:"releg" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
