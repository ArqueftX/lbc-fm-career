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
    lastUpdate:   "Septembre 2025",
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
    ],
    departures: [
      { type: "loan", name: "Lewis Colwell",  to: "Concord Rangers (ALD · Anglais · 20 ans)",       date: "Août 2025" },
      { type: "loan", name: "Harlee Vozza",   to: "Concord Rangers (BU · Irlandais · 21 ans)",      date: "Août 2025" },
      { type: "loan", name: "Bradley Macrae", to: "Hendon (MC · Anglais · 17 ans · régen)",         date: "Sep. 2025" },
    ],

    cup: {
      name: "FA Cup",
      rounds: [
        { result: "W", round: "2e tour qualif.", score: "5 – 0", opponent: "Tiverton (D)" },
        { result: "L", round: "3e tour qualif.", score: "1 – 2", opponent: "Dartford (D) · éliminé" },
      ],
    },

    // Classement après 9 journées (fin septembre 2025)
    // 1er promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standings: [
      { pos:1,  team:"Salisbury",              j:9, g:7,  n:1,  l:1,  bp:18, bc:12, db:6, pts:22, zone:"promo" },
      { pos:2,  team:"Tonbridge Angels",       j:9, g:6,  n:0,  l:3,  bp:13, bc:9, db:4, pts:18, zone:"promo-playoff" },
      { pos:3,  team:"Hornchurch",             j:9, g:4,  n:4,  l:1,  bp:14, bc:10, db:4, pts:16, zone:"promo-playoff" },
      { pos:4,  team:"Slough Town",            j:9, g:5,  n:1,  l:3,  bp:13, bc:9, db:4, pts:16, zone:"promo-playoff" },
      { pos:5,  team:"Worthing",               j:9, g:5,  n:1,  l:3,  bp:13, bc:9, db:4, pts:16, zone:"promo-playoff" },
      { pos:6,  team:"Totton",                 j:9, g:4,  n:3,  l:2,  bp:14, bc:9, db:5, pts:15, zone:"promo-playoff" },
      { pos:7,  team:"Chippenham Town",        j:9, g:4,  n:2,  l:3,  bp:23, bc:17, db:6, pts:14, zone:"promo-playoff", highlight:true },
      { pos:8,  team:"Dover Athletic",         j:9, g:4,  n:2,  l:3,  bp:10, bc:6, db:4, pts:14 },
      { pos:9,  team:"Eastbourne Borough",     j:9, g:4,  n:2,  l:3,  bp:13, bc:11, db:2, pts:14 },
      { pos:10, team:"Bath City",              j:9, g:3,  n:4,  l:2,  bp:14, bc:9, db:5, pts:13 },
      { pos:11, team:"Maidstone United",       j:9, g:3,  n:4,  l:2,  bp:11, bc:7, db:4, pts:13 },
      { pos:12, team:"Torquay United",         j:9, g:3,  n:4,  l:2,  bp:13, bc:13, db:0, pts:13 },
      { pos:13, team:"Chelmsford City",        j:9, g:3,  n:3,  l:3,  bp:13, bc:13, db:0, pts:12 },
      { pos:14, team:"Hampton & Richmond",     j:9, g:3,  n:3,  l:3,  bp:15, bc:17, db:-2, pts:12 },
      { pos:15, team:"Enfield Town",           j:9, g:3,  n:2,  l:4,  bp:12, bc:16, db:-4, pts:11 },
      { pos:16, team:"Dorking",                j:9, g:3,  n:2,  l:4,  bp:11, bc:15, db:-4, pts:11 },
      { pos:17, team:"Dag & Red",              j:9, g:2,  n:3,  l:4,  bp:8, bc:8, db:0, pts:9 },
      { pos:18, team:"Ebbsfleet United",       j:9, g:2,  n:3,  l:4,  bp:9, bc:12, db:-3, pts:9 },
      { pos:19, team:"Chesham United",         j:9, g:2,  n:3,  l:4,  bp:14, bc:20, db:-6, pts:9 },
      { pos:20, team:"Maidenhead United",      j:9, g:1,  n:5,  l:3,  bp:7, bc:9, db:-2, pts:8 },
      { pos:21, team:"Farnborough",            j:9, g:1,  n:4,  l:4,  bp:14, bc:19, db:-5, pts:7, zone:"releg" },
      { pos:22, team:"Horsham",                j:9, g:1,  n:4,  l:4,  bp:7, bc:14, db:-7, pts:7, zone:"releg" },
      { pos:23, team:"Weston-super-Mare",      j:9, g:1,  n:3,  l:5,  bp:11, bc:17, db:-6, pts:6, zone:"releg" },
      { pos:24, team:"Hemel Hempstead Town",   j:9, g:1,  n:3,  l:5,  bp:7, bc:16, db:-9, pts:6, zone:"releg" },
    ],
    squad: [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
