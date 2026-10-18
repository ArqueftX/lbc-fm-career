/**
 * CHIPPENHAM TOWN — PARTIE EN COURS
 * ────────────────────────────────────────────────
 * Saison suivie MOIS PAR MOIS (même format que Wolfsburg-Pep).
 *
 *  ▸ Pour ajouter un mois : pousse un bloc dans "months" :
 *       { key:"08", label:"Août 2025", matches:[ {r:"W", tip:"Adversaire (D) 2-1", comp:"L"}, ... ] }
 *    (D) = domicile, (E) = extérieur · score format DOMICILE-EXTÉRIEUR.
 *    comp : "L" = championnat (compte dans le bilan), "AM" = amical,
 *           coupes : "FAC" (FA Cup), "FAT" (FA Trophy) — libellés dans "compNames".
 *    Le bilan (V/N/D, buts, points) se calcule TOUT SEUL à partir des matchs de championnat.
 *
 *  ▸ "standings"  : colle le classement à jour (la ligne highlight:true donne la position).
 *    "zone" d'une ligne : promo, promo-playoff, releg-playoff, releg (+ champion:true) —
 *    la légende sous le classement se construit toute seule (voir standings-zones.js).
 *  ▸ "scorers/assists/ratings" : stats cumulées, mises à jour chaque mois.
 *  ▸ "transfers/departures"    : mercato.
 *  ▸ "splash" : à AJOUTER seulement quand la saison est terminée.
 *  ▸ "position" (dans un mois, facultatif) : classement en championnat à la fin du mois.
 *    Dès que 2 mois en ont une, la trajectoire mois par mois s'affiche.
 */
window['SEASONS_chippenham'] = [

  /* ─── SAISON 2025/26 · EN COURS ──────────────────────── */
  {
    id:           "chippenham-2025-26",
    year:         "2025/26",
    league:       "National League South",
    status:       "en_cours",
    totalTeams:   24,
    seasonLength: 46,
    lastUpdate:   "Novembre 2025",
    position:     null,
    compNames:    { FAC: "FA Cup", FAT: "FA Trophy" },

    months: [
      {
        key: "07", label: "Juillet 2025",
        note: "Préparation encourageante : trois victoires, un nul et une seule défaite, contre Northampton.",
        matches: [
          { r:"W", tip:"Conwy (E) 0-2",                  comp:"AM" },
          { r:"L", tip:"Northampton (D) 0-2",            comp:"AM" },
          { r:"D", tip:"Swindon Town (D) 0-0",           comp:"AM" },
          { r:"W", tip:"AFC Rushden & Diamonds (E) 0-1", comp:"AM" },
          { r:"W", tip:"Warrington Rylands (E) 1-3",     comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2025", position: 5,
        note: "Entrée en matière prolifique : 18 buts en six journées, trois victoires (dont 3-0 contre Dorking et 4-2 contre Worthing), deux nuls et une folle défaite 4-5 contre Weston-super-Mare. Chippenham pointe à la 5e place, en zone de barrages.",
        matches: [
          { r:"W", tip:"Cheshunt (E) 0-3",               comp:"AM" },
          { r:"W", tip:"Dorking (D) 3-0",                comp:"L" },
          { r:"W", tip:"Ebbsfleet United (E) 1-3",       comp:"L" },
          { r:"L", tip:"Weston-super-Mare (D) 4-5",      comp:"L" },
          { r:"D", tip:"Chelmsford City (E) 1-1",        comp:"L" },
          { r:"W", tip:"Worthing (D) 4-2",               comp:"L" },
          { r:"D", tip:"Hornchurch (E) 3-3",             comp:"L" },
        ],
      },
      {
        key: "09", label: "Septembre 2025", position: 7,
        note: "Mois contrasté : deux défaites d'entrée (à Slough puis contre Hampton & Richmond), avant un large succès à Enfield (1-4). En FA Cup, Tiverton est balayé (5-0) mais Dartford met fin à l'aventure au 3e tour qualificatif (1-2). Chippenham glisse au 7e rang, dernière place de barragiste.",
        matches: [
          { r:"L", tip:"Slough Town (E) 1-0",            comp:"L" },
          { r:"L", tip:"Hampton & Richmond (D) 1-3",     comp:"L" },
          { r:"W", tip:"Tiverton (D) 5-0",               comp:"FAC", tag:"2E TOUR QUALIFICATIF" },
          { r:"W", tip:"Enfield Town (E) 1-4",           comp:"L" },
          { r:"L", tip:"Dartford (D) 1-2",               comp:"FAC", tag:"3E TOUR QUALIFICATIF · ÉLIMINÉ" },
        ],
      },
      {
        key: "10", label: "Octobre 2025", position: 6,
        note: "Mois sans défaite : trois victoires à domicile (Hemel Hempstead, Dover, Dag & Red) et deux nuls à l'extérieur (Eastbourne, Torquay). Chippenham remonte au 6e rang, à trois points de la tête.",
        matches: [
          { r:"W", tip:"Hemel Hempstead Town (D) 3-2",   comp:"L" },
          { r:"D", tip:"Eastbourne Borough (E) 1-1",     comp:"L" },
          { r:"W", tip:"Dover Athletic (D) 3-1",         comp:"L" },
          { r:"D", tip:"Torquay United (E) 1-1",         comp:"L" },
          { r:"W", tip:"Dag & Red (D) 2-1",              comp:"L" },
        ],
      },
      {
        key: "11", label: "Novembre 2025",
        note: "Toujours invaincu en championnat : trois victoires d'affilée (dont 2-0 contre le leader Salisbury et un 3-4 fou à Maidstone), puis trois nuls. En FA Trophy, Horsham sort Chippenham aux tirs au but (3-3, 3 t.a.b. à 1) dès le 2e tour.",
        matches: [
          { r:"W", tip:"Chesham United (E) 2-4",         comp:"L" },
          { r:"W", tip:"Salisbury (D) 2-0",              comp:"L" },
          { r:"W", tip:"Maidstone United (E) 3-4",       comp:"L" },
          { r:"L", tip:"Horsham (E) 3-3",                comp:"FAT", tag:"2E TOUR · ÉLIMINÉ T.A.B. 3-1" },
          { r:"D", tip:"Tonbridge Angels (D) 2-2",       comp:"L" },
          { r:"D", tip:"Farnborough (D) 1-1",            comp:"L" },
          { r:"D", tip:"Maidenhead United (E) 2-2",      comp:"L" },
        ],
      },
    ],

    scorers: [],
    assists: [],
    ratings: [],
    flops:   [],

    transfers: [
      { type: "free", name: "Cyrus Bailey",   from: "Sans contrat (BU · Anglais · 16 ans · régen)",  date: "Juil. 2025" },
      { type: "free", name: "Bradley Macrae", from: "Sans contrat (MC · Anglais · 17 ans · régen)",  date: "Août 2025" },
      { type: "free", name: "Grant Knowles",  from: "Sans contrat (DC · Anglais · 17 ans · régen)",  date: "Août 2025" },
      { type: "loan", name: "George Alston",  from: "Swindon Town (MDC / MC · Anglais · 19 ans)",   date: "Août 2025" },
      { type: "loan", name: "Jerae Jones",    from: "Reading (AD / AG · Anglais · 19 ans)",         date: "Août 2025" },
      { type: "free", name: "Cameron Dixon",  from: "Sans contrat (BU · Anglais · 16 ans · régen)",  date: "Août 2025" },
      { type: "loan", name: "Jeremiah Okine-Peters", from: "Reading (AD · Anglais · 20 ans)",       date: "Sep. 2025" },
      { type: "free", name: "Kieran Talbot",  from: "Sans contrat (BU · Anglais · 16 ans · régen)",  date: "Sep. 2025" },
      { type: "free", name: "Jay Naylor",     from: "Sans contrat (MG · Anglais · 16 ans · régen)",  date: "Oct. 2025" },
      { type: "loan", name: "Kevin Mfuamba",  from: "West Brom (MDC · Anglais · 19 ans)",           date: "Oct. 2025" },
      { type: "loan", name: "Kai Source",     from: "Luton Town (DG · Anglais · 19 ans)",           date: "Oct. 2025" },
      { type: "free", name: "Sam Subuloye",   from: "Sans contrat (MD · Anglais · 16 ans · régen)",  date: "Nov. 2025" },
    ],
    departures: [
      { type: "loan", name: "Lewis Colwell",  to: "Concord Rangers (ALD · Anglais · 20 ans)",       date: "Août 2025" },
      { type: "loan", name: "Harlee Vozza",   to: "Concord Rangers (BU · Irlandais · 21 ans)",      date: "Août 2025" },
      { type: "loan", name: "Bradley Macrae", to: "Hendon (MC · Anglais · 17 ans · régen)",         date: "Sep. 2025" },
      { type: "loan", name: "Harry Messenger", to: "Hendon (DC · Anglais · 17 ans)",                date: "Oct. 2025" },
    ],

    cup: {
      name: "FA Cup",
      rounds: [
        { result: "W", round: "2e tour qualif.", score: "5 – 0", opponent: "Tiverton (D)" },
        { result: "L", round: "3e tour qualif.", score: "1 – 2", opponent: "Dartford (D) · éliminé" },
      ],
    },
    cup2: {
      name: "FA Trophy",
      rounds: [
        { result: "L", round: "2e tour", score: "3 – 3", opponent: "Horsham (E) · 3-1 t.a.b., éliminé" },
      ],
    },

    // Classement après 14 journées (fin octobre 2025)
    // 1er promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standings: [
      { pos:1,  team:"Totton",                 j:14, g:8,  n:4,  l:2,  bp:27, bc:12, db:15, pts:28, zone:"promo" },
      { pos:2,  team:"Salisbury",              j:13, g:9,  n:1,  l:3,  bp:23, bc:17, db:6, pts:28, zone:"promo-playoff" },
      { pos:3,  team:"Worthing",               j:14, g:8,  n:2,  l:4,  bp:22, bc:15, db:7, pts:26, zone:"promo-playoff" },
      { pos:4,  team:"Tonbridge Angels",       j:14, g:8,  n:2,  l:4,  bp:19, bc:14, db:5, pts:26, zone:"promo-playoff" },
      { pos:5,  team:"Hornchurch",             j:13, g:7,  n:4,  l:2,  bp:23, bc:12, db:11, pts:25, zone:"promo-playoff" },
      { pos:6,  team:"Chippenham Town",        j:14, g:7,  n:4,  l:3,  bp:33, bc:23, db:10, pts:25, zone:"promo-playoff", highlight:true },
      { pos:7,  team:"Slough Town",            j:14, g:6,  n:4,  l:4,  bp:15, bc:12, db:3, pts:22, zone:"promo-playoff" },
      { pos:8,  team:"Eastbourne Borough",     j:14, g:6,  n:3,  l:5,  bp:22, bc:19, db:3, pts:21 },
      { pos:9,  team:"Maidenhead United",      j:14, g:5,  n:5,  l:4,  bp:18, bc:14, db:4, pts:20 },
      { pos:10, team:"Maidstone United",       j:13, g:5,  n:5,  l:3,  bp:15, bc:12, db:3, pts:20 },
      { pos:11, team:"Torquay United",         j:13, g:5,  n:5,  l:3,  bp:18, bc:16, db:2, pts:20 },
      { pos:12, team:"Bath City",              j:14, g:5,  n:4,  l:5,  bp:19, bc:18, db:1, pts:19 },
      { pos:13, team:"Dover Athletic",         j:13, g:5,  n:3,  l:5,  bp:16, bc:11, db:5, pts:18 },
      { pos:14, team:"Chelmsford City",        j:13, g:5,  n:3,  l:5,  bp:20, bc:23, db:-3, pts:18 },
      { pos:15, team:"Ebbsfleet United",       j:14, g:5,  n:3,  l:6,  bp:15, bc:18, db:-3, pts:18 },
      { pos:16, team:"Hampton & Richmond",     j:14, g:4,  n:5,  l:5,  bp:20, bc:28, db:-8, pts:17 },
      { pos:17, team:"Enfield Town",           j:13, g:4,  n:3,  l:6,  bp:15, bc:21, db:-6, pts:15 },
      { pos:18, team:"Dorking",                j:14, g:4,  n:2,  l:8,  bp:19, bc:27, db:-8, pts:14 },
      { pos:19, team:"Dag & Red",              j:13, g:3,  n:4,  l:6,  bp:12, bc:12, db:0, pts:13 },
      { pos:20, team:"Chesham United",         j:13, g:3,  n:4,  l:6,  bp:18, bc:26, db:-8, pts:13 },
      { pos:21, team:"Horsham",                j:14, g:2,  n:7,  l:5,  bp:10, bc:18, db:-8, pts:13, zone:"releg" },
      { pos:22, team:"Weston-super-Mare",      j:14, g:2,  n:4,  l:8,  bp:17, bc:23, db:-6, pts:10, zone:"releg" },
      { pos:23, team:"Farnborough",            j:14, g:2,  n:4,  l:8,  bp:19, bc:28, db:-9, pts:10, zone:"releg" },
      { pos:24, team:"Hemel Hempstead Town",   j:13, g:1,  n:3,  l:9,  bp:10, bc:26, db:-16, pts:6, zone:"releg" },
    ],
    squad: [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
