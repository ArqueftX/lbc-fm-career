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
    lastUpdate:   "Août 2025",
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
    ],
    departures: [
      { type: "loan", name: "Lewis Colwell",  to: "Concord Rangers (ALD · Anglais · 20 ans)",       date: "Août 2025" },
      { type: "loan", name: "Harlee Vozza",   to: "Concord Rangers (BU · Irlandais · 21 ans)",      date: "Août 2025" },
    ],

    // Classement après 6 journées (fin août 2025)
    // 1er promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standings: [
      { pos:1,  team:"Tonbridge Angels",       j:6, g:5,  n:0,  l:1,  bp:11, bc:6, db:5, pts:15, zone:"promo" },
      { pos:2,  team:"Eastbourne Borough",     j:6, g:4,  n:1,  l:1,  bp:9, bc:5, db:4, pts:13, zone:"promo-playoff" },
      { pos:3,  team:"Salisbury",              j:6, g:4,  n:1,  l:1,  bp:11, bc:8, db:3, pts:13, zone:"promo-playoff" },
      { pos:4,  team:"Slough Town",            j:6, g:4,  n:0,  l:2,  bp:11, bc:6, db:5, pts:12, zone:"promo-playoff" },
      { pos:5,  team:"Chippenham Town",        j:6, g:3,  n:2,  l:1,  bp:18, bc:12, db:6, pts:11, zone:"promo-playoff", highlight:true },
      { pos:6,  team:"Dover Athletic",         j:6, g:3,  n:1,  l:2,  bp:7, bc:3, db:4, pts:10, zone:"promo-playoff" },
      { pos:7,  team:"Worthing",               j:6, g:3,  n:1,  l:2,  bp:8, bc:6, db:2, pts:10, zone:"promo-playoff" },
      { pos:8,  team:"Torquay United",         j:6, g:3,  n:1,  l:2,  bp:8, bc:8, db:0, pts:10 },
      { pos:9,  team:"Maidstone United",       j:6, g:2,  n:3,  l:1,  bp:6, bc:4, db:2, pts:9 },
      { pos:10, team:"Chelmsford City",        j:6, g:2,  n:2,  l:2,  bp:8, bc:6, db:2, pts:8 },
      { pos:11, team:"Enfield Town",           j:6, g:2,  n:2,  l:2,  bp:9, bc:9, db:0, pts:8 },
      { pos:12, team:"Totton",                 j:6, g:2,  n:2,  l:2,  bp:6, bc:7, db:-1, pts:8 },
      { pos:13, team:"Hornchurch",             j:6, g:1,  n:4,  l:1,  bp:7, bc:7, db:0, pts:7 },
      { pos:14, team:"Hampton & Richmond",     j:6, g:2,  n:1,  l:3,  bp:9, bc:13, db:-4, pts:7 },
      { pos:15, team:"Dorking",                j:6, g:2,  n:1,  l:3,  bp:6, bc:10, db:-4, pts:7 },
      { pos:16, team:"Dag & Red",              j:6, g:1,  n:3,  l:2,  bp:6, bc:5, db:1, pts:6 },
      { pos:17, team:"Bath City",              j:6, g:1,  n:3,  l:2,  bp:6, bc:6, db:0, pts:6 },
      { pos:18, team:"Chesham United",         j:6, g:1,  n:3,  l:2,  bp:9, bc:10, db:-1, pts:6 },
      { pos:19, team:"Weston-super-Mare",      j:6, g:1,  n:3,  l:2,  bp:9, bc:10, db:-1, pts:6 },
      { pos:20, team:"Farnborough",            j:6, g:1,  n:2,  l:3,  bp:10, bc:14, db:-4, pts:5 },
      { pos:21, team:"Ebbsfleet United",       j:6, g:1,  n:2,  l:3,  bp:4, bc:8, db:-4, pts:5, zone:"releg" },
      { pos:22, team:"Horsham",                j:6, g:1,  n:2,  l:3,  bp:5, bc:10, db:-5, pts:5, zone:"releg" },
      { pos:23, team:"Maidenhead United",      j:6, g:0,  n:4,  l:2,  bp:4, bc:6, db:-2, pts:4, zone:"releg" },
      { pos:24, team:"Hemel Hempstead Town",   j:6, g:0,  n:2,  l:4,  bp:4, bc:12, db:-8, pts:2, zone:"releg" },
    ],
    squad: [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
