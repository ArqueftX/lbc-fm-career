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
    lastUpdate:   "Décembre 2025",
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
        key: "11", label: "Novembre 2025", position: 3,
        note: "Aucune défaite en championnat ce mois-ci (douze matchs sans perdre depuis le revers contre Hampton & Richmond début septembre) : trois victoires d'affilée (dont 2-0 contre le leader Salisbury et un 3-4 fou à Maidstone), puis trois nuls. Chippenham grimpe à la 3e place, à cinq points du leader Worthing. En FA Trophy, Horsham sort Chippenham aux tirs au but (3-3, 3 t.a.b. à 1) dès le 2e tour.",
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
      {
        key: "12", label: "Décembre 2025", position: 2,
        note: "Deux succès nets (2-0 contre Horsham, 0-4 à Weston-super-Mare) portent la série sans défaite en championnat à quatorze matchs, avant deux revers en fin d'année : Bath City (1-3) le lendemain de Noël, puis Totton (1-0). Chippenham termine 2025 à la 2e place, à cinq points du leader Worthing.",
        matches: [
          { r:"W", tip:"Horsham (D) 2-0",                comp:"L" },
          { r:"W", tip:"Weston-super-Mare (E) 0-4",      comp:"L" },
          { r:"L", tip:"Bath City (D) 1-3",              comp:"L" },
          { r:"L", tip:"Totton (E) 1-0",                 comp:"L" },
        ],
      },
    ],

    // Stats toutes compétitions, au 1er janvier 2026
    scorers: [
      { name: "Tom Owen-Evans",               detail: "MOC · Anglais · 28 ans",  value: 12 },
      { name: "J. Jones · S. Wanjau-Smith",   detail: "AG / BU · ex-aequo",      value: 11 },
      { name: "Ezio Touray",                  detail: "BU · Italien · 22 ans",   value: 7 },
    ],
    assists: [
      { name: "Ethan Vaughan",                detail: "DD · Gallois · 22 ans",   value: 9 },
      { name: "Caine Bradbury",               detail: "MC · Anglais · 24 ans",   value: 6 },
      { name: "Owen-Evans · Jones · Okine-Peters · King", detail: "4 joueurs à égalité", value: 5 },
    ],
    // Meilleures et pires moyennes : au moins 12 matchs joués (la moitié des 24 journées de championnat jouées)
    ratings: [
      { name: "Jerae Jones",           detail: "AG · Anglais · 19 ans · 18 tit. / 1 rempl. · 11 buts · 5 passes D.",  value: 7.19 },
      { name: "Jeremiah Okine-Peters", detail: "AD · Anglais · 20 ans · 17 tit. / 1 rempl. · 5 buts · 5 passes D.",   value: 7.19 },
      { name: "Tom Owen-Evans",        detail: "MOC · Anglais · 28 ans · 25 tit. / 1 rempl. · 12 buts · 5 passes D.", value: 7.18 },
    ],
    flops: [
      { name: "Kai Source",            detail: "DG · Anglais · 19 ans · 13 tit. · 1 passe D.",                         value: 6.66 },
      { name: "Reece Fleet",           detail: "MDC · Anglais · 33 ans · 10 tit. / 7 rempl. · 1 passe D.",             value: 6.67 },
      { name: "Tom Mehew",             detail: "MDC · Anglais · 24 ans · 5 tit. / 9 rempl.",                           value: 6.69 },
    ],

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
      { type: "loan", name: "Lewis Royston",  to: "Hayes & Yeading United (MC · Anglais · 18 ans)", date: "Déc. 2025" },
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

    // Classement après 24 journées (fin décembre 2025)
    // 1er promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standings: [
      { pos:1,  team:"Worthing",               j:24, g:14, n:6,  l:4,  bp:39, bc:21, db:18, pts:48, zone:"promo" },
      { pos:2,  team:"Chippenham Town",        j:24, g:12, n:7,  l:5,  bp:55, bc:37, db:18, pts:43, zone:"promo-playoff", highlight:true },
      { pos:3,  team:"Totton",                 j:24, g:12, n:7,  l:5,  bp:41, bc:24, db:17, pts:43, zone:"promo-playoff" },
      { pos:4,  team:"Hornchurch",             j:24, g:12, n:4,  l:8,  bp:38, bc:30, db:8, pts:40, zone:"promo-playoff" },
      { pos:5,  team:"Enfield Town",           j:24, g:11, n:4,  l:9,  bp:36, bc:33, db:3, pts:37, zone:"promo-playoff" },
      { pos:6,  team:"Salisbury",              j:24, g:11, n:4,  l:9,  bp:35, bc:36, db:-1, pts:37, zone:"promo-playoff" },
      { pos:7,  team:"Dag & Red",              j:24, g:9,  n:9,  l:6,  bp:29, bc:19, db:10, pts:36, zone:"promo-playoff" },
      { pos:8,  team:"Dover Athletic",         j:24, g:9,  n:8,  l:7,  bp:31, bc:25, db:6, pts:35 },
      { pos:9,  team:"Bath City",              j:23, g:10, n:5,  l:8,  bp:34, bc:29, db:5, pts:35 },
      { pos:10, team:"Maidstone United",       j:24, g:9,  n:7,  l:8,  bp:29, bc:27, db:2, pts:34 },
      { pos:11, team:"Tonbridge Angels",       j:24, g:9,  n:6,  l:9,  bp:30, bc:29, db:1, pts:33 },
      { pos:12, team:"Ebbsfleet United",       j:23, g:9,  n:5,  l:9,  bp:28, bc:29, db:-1, pts:32 },
      { pos:13, team:"Slough Town",            j:24, g:9,  n:5,  l:10, bp:23, bc:28, db:-5, pts:32 },
      { pos:14, team:"Chelmsford City",        j:23, g:8,  n:7,  l:8,  bp:31, bc:35, db:-4, pts:31 },
      { pos:15, team:"Eastbourne Borough",     j:24, g:8,  n:6,  l:10, bp:33, bc:33, db:0, pts:30 },
      { pos:16, team:"Torquay United",         j:23, g:7,  n:9,  l:7,  bp:26, bc:28, db:-2, pts:30 },
      { pos:17, team:"Dorking",                j:24, g:8,  n:5,  l:11, bp:29, bc:34, db:-5, pts:29 },
      { pos:18, team:"Chesham United",         j:24, g:8,  n:5,  l:11, bp:34, bc:41, db:-7, pts:29 },
      { pos:19, team:"Horsham",                j:24, g:7,  n:7,  l:10, bp:20, bc:27, db:-7, pts:28 },
      { pos:20, team:"Hampton & Richmond",     j:24, g:7,  n:7,  l:10, bp:31, bc:45, db:-14, pts:28 },
      { pos:21, team:"Farnborough",            j:24, g:6,  n:7,  l:11, bp:33, bc:43, db:-10, pts:25, zone:"releg" },
      { pos:22, team:"Maidenhead United",      j:24, g:5,  n:9,  l:10, bp:24, bc:30, db:-6, pts:24, zone:"releg" },
      { pos:23, team:"Weston-super-Mare",      j:24, g:6,  n:5,  l:13, bp:29, bc:37, db:-8, pts:23, zone:"releg" },
      { pos:24, team:"Hemel Hempstead Town",   j:24, g:5,  n:6,  l:13, bp:21, bc:39, db:-18, pts:21, zone:"releg" },
    ],
    // Effectif au 1er janvier 2026
    squad: [
      { n:"Will Henry",            p:"GB",   nat:"ENG", age:27 },
      { n:"Josh Sawyer",           p:"GB",   nat:"ENG", age:17 },
      { n:"Jac Poffley",           p:"DC",   nat:"WAL", age:19 },
      { n:"Canice Carroll",        p:"DC",   nat:"IRL", age:26 },
      { n:"Luke Haines",           p:"DC",   nat:"ENG", age:25 },
      { n:"Tom Harrison",          p:"DC",   nat:"ENG", age:24 },
      { n:"Freddie Grant",         p:"DC",   nat:"ENG", age:29 },
      { n:"Aaron Amadi-Holloway",  p:"DC",   nat:"WAL", age:32 },
      { n:"Grant Knowles",         p:"DG",   nat:"ENG", age:17 },
      { n:"Kai Source",            p:"DG",   nat:"ENG", age:19 },
      { n:"Will King",             p:"DG",   nat:"ENG", age:23 },
      { n:"Ethan Vaughan",         p:"DD",   nat:"WAL", age:22 },
      { n:"Jake Evans",            p:"DD",   nat:"ENG", age:27 },
      { n:"George Alston",         p:"MDC",  nat:"ENG", age:19 },
      { n:"Henry Sady",            p:"MDC",  nat:"ENG", age:20 },
      { n:"Reece Fleet",           p:"MDC",  nat:"ENG", age:33 },
      { n:"Kevin Mfuamba",         p:"MDC",  nat:"ENG", age:19 },
      { n:"Tom Mehew",             p:"MDC",  nat:"ENG", age:24 },
      { n:"Caine Bradbury",        p:"MC",   nat:"ENG", age:24 },
      { n:"Quévin Castro",         p:"MC",   nat:"POR", age:24 },
      { n:"Tom Owen-Evans",        p:"MOC",  nat:"ENG", age:28 },
      { n:"Cole Fleming",          p:"AD",   nat:"WAL", age:20 },
      { n:"Jeremiah Okine-Peters", p:"AD",   nat:"ENG", age:20 },
      { n:"Jerae Jones",           p:"AG",   nat:"ENG", age:19 },
      { n:"Olaf Koszela",          p:"BU",   nat:"POL", age:23 },
      { n:"Solomon Wanjau-Smith",  p:"BU",   nat:"ENG", age:26 },
      { n:"Ezio Touray",           p:"BU",   nat:"ITA", age:22 },
      { n:"Harry Parsons",         p:"BU",   nat:"ENG", age:23 },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
