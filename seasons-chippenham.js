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
 *  ▸ "records" : records du club battus pendant la saison (annoncés par le jeu) :
 *       { key:"buts-match", label:"…", value:"7", detail:"…", date:"…" }
 *    Tous restent sur la page de la saison ; sur la page carrière, un même "key"
 *    battu à nouveau remplace l'ancien.
 *  ▸ "objective" : objectif de la saison fixé par les dirigeants (affiché dans l'en-tête).
 *  ▸ "awards" : distinctions (entraîneur du mois…) : { label, winner, period, detail }
 *    Toutes restent, sur la page de la saison comme sur la page carrière.
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
    lastUpdate:   "Avril 2026",
    position:     null,
    compNames:    { FAC: "FA Cup", FAT: "FA Trophy" },
    objective:    "Maintien en National League South",

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
      {
        key: "01", label: "Janvier 2026", position: 3,
        note: "Le mois des nuls : quatre en six journées, dont un 2-2 arraché chez le leader Worthing. Une victoire à Dorking (0-2) et une défaite à Salisbury (2-0) complètent le tableau. Chippenham recule au 3e rang, à onze points de Worthing.",
        matches: [
          { r:"D", tip:"Worthing (E) 2-2",               comp:"L" },
          { r:"D", tip:"Slough Town (D) 2-2",            comp:"L" },
          { r:"D", tip:"Ebbsfleet United (D) 0-0",       comp:"L" },
          { r:"W", tip:"Dorking (E) 0-2",                comp:"L" },
          { r:"L", tip:"Salisbury (E) 2-0",              comp:"L" },
          { r:"D", tip:"Chesham United (D) 2-2",         comp:"L" },
        ],
      },
      {
        key: "02", label: "Février 2026", position: 4,
        note: "Mois offensif : quatre victoires, dont trois de suite pour finir, mais deux revers (4-2 chez Dag & Red, 0-1 contre Maidstone). Le 7-4 contre Maidenhead devient le record du club du plus grand nombre de buts marqués en un match. Chippenham est 4e, à un point de la 2e place, en zone de barrages et en passe de battre le meilleur classement de l'histoire du club (7e en 2021/22).",
        matches: [
          { r:"L", tip:"Dag & Red (E) 4-2",              comp:"L" },
          { r:"W", tip:"Torquay United (D) 2-0",         comp:"L" },
          { r:"L", tip:"Maidstone United (D) 0-1",       comp:"L" },
          { r:"W", tip:"Tonbridge Angels (E) 1-2",       comp:"L" },
          { r:"W", tip:"Farnborough (E) 1-2",            comp:"L" },
          { r:"W", tip:"Maidenhead United (D) 7-4",      comp:"L", tag:"RECORD DU CLUB" },
        ],
      },
      {
        key: "03", label: "Mars 2026", position: 2,
        note: "Cinq matchs sans défaite (quatre victoires, un nul), dont un 0-4 à Dover et un 5-1 contre Chelmsford. Doublés de Jerae Jones à Dover et de Tom Owen-Evans contre Chelmsford. Chippenham remonte à la 2e place, à six points de Worthing à cinq journées de la fin, et Nolann Queft est élu entraîneur du mois.",
        matches: [
          { r:"W", tip:"Enfield Town (D) 1-0",           comp:"L" },
          { r:"D", tip:"Hemel Hempstead Town (E) 1-1",   comp:"L" },
          { r:"W", tip:"Dover Athletic (E) 0-4",         comp:"L" },
          { r:"W", tip:"Eastbourne Borough (D) 1-0",     comp:"L" },
          { r:"W", tip:"Chelmsford City (D) 5-1",        comp:"L" },
        ],
      },
      {
        key: "04", label: "Avril 2026",
        note: "Le 2 avril, Nolann Queft prolonge son contrat jusqu'en juin 2028 : dirigeants et supporters sont « fous de joie ». Le lendemain, Chippenham doit se contenter d'un nul à Bath City (1-1, but de Jerae Jones sur un service d'Ethan Vaughan) malgré 65 % de possession et 16 tirs contre 3. Le 5 avril, le club lance le projet d'achat de son stade, le Thornbury Surfacing Stadium, à boucler d'ici juin 2026 : de quoi fêter une saison qui dépasse déjà largement l'objectif fixé, le simple maintien. Le 6 avril, Chippenham bat Totton (2-1, but contre son camp de Wells-Morrison puis Jeremiah Okine-Peters, élu homme du match avec 8,2) et repasse 2e. Le lendemain, c'est officiel : la place en barrages est assurée et, à trois journées de la fin, le club battra le meilleur classement de son histoire en National League South (7e en 2021/22). Le 11 avril, succès 0-2 à Hampton & Richmond (Owen-Evans dès la 2e minute, puis Jones) : à deux journées de la fin, Chippenham est à quatre points de Worthing, le titre reste mathématiquement possible. Le lendemain, les 95 buts inscrits en championnat deviennent le record du club sur une saison. Côté effectif, Reece Fleet (34 ans) rejoint gratuitement Concord Rangers le 14 avril, et le jeune attaquant Kieran Talbot (17 ans) signe un nouveau contrat jusqu'en 2028.",
        matches: [
          { r:"D", tip:"Bath City (E) 1-1",              comp:"L" },
          { r:"W", tip:"Totton (D) 2-1",                 comp:"L" },
          { r:"W", tip:"Hampton & Richmond (E) 0-2",     comp:"L" },
        ],
      },
    ],

    // Distinctions de la saison
    awards: [
      { label:"Entraîneur du mois", winner:"Nolann Queft", period:"Mars 2026", detail:"National League South · 4 victoires en 5 matchs · devant Alan Dunne (Tonbridge Angels) et Neil McDonald (Dag & Red)" },
    ],

    // Records du club battus cette saison
    records: [
      { key:"buts-match", label:"Buts marqués en un match", value:"7", detail:"7-4 contre Maidenhead United (D)", date:"28 fév. 2026" },
      // Mettre à jour à chaque but de championnat, puis au total final
      { key:"buts-saison", label:"Buts marqués en championnat sur une saison", value:"95", detail:"Record battu à deux journées de la fin", date:"12 avr. 2026" },
      // À la fin de la saison : remplacer value/detail par le classement final
      { key:"classement-nls", label:"Meilleur classement en National League South", value:"Top 6", detail:"Au pire 6e, assuré à 3 journées de la fin (2e à ce moment-là) · ancien record : 7e en 2021/22", date:"7 avr. 2026" },
    ],

    // Stats toutes compétitions : buteurs et passeurs au 11 avril 2026, moyennes au 1er avril 2026
    scorers: [
      { name: "T. Owen-Evans · J. Jones",     detail: "MOC / AG · ex-aequo",     value: 19 },
      { name: "Solomon Wanjau-Smith",         detail: "BU · Anglais · 26 ans",   value: 16 },
      { name: "E. Touray · J. Okine-Peters",  detail: "BU / AD · ex-aequo",      value: 8 },
    ],
    assists: [
      { name: "Ethan Vaughan",                detail: "DD · Gallois · 22 ans",   value: 13 },
      { name: "Jeremiah Okine-Peters",        detail: "AD · Anglais · 20 ans",   value: 10 },
      { name: "C. Bradbury · J. Jones",       detail: "MC / AG · ex-aequo",      value: 9 },
    ],
    // Meilleures et pires moyennes : au moins 21 matchs joués (la moitié des 41 journées de championnat jouées)
    ratings: [
      { name: "Jerae Jones",           detail: "AG · Anglais · 19 ans · 35 tit. / 1 rempl. · 17 buts · 9 passes D.",  value: 7.22 },
      { name: "Tom Owen-Evans",        detail: "MOC · Anglais · 29 ans · 38 tit. / 3 rempl. · 18 buts · 8 passes D.", value: 7.17 },
      { name: "Jeremiah Okine-Peters", detail: "AD · Anglais · 20 ans · 30 tit. / 1 rempl. · 7 buts · 10 passes D.",  value: 7.15 },
    ],
    flops: [
      { name: "Reece Fleet",           detail: "MDC · Anglais · 34 ans · 11 tit. / 15 rempl. · 1 passe D.",            value: 6.69 },
      { name: "Tom Mehew",             detail: "MDC · Anglais · 24 ans · 8 tit. / 15 rempl. · 2 passes D.",            value: 6.72 },
      { name: "Will Henry",            detail: "GB · Anglais · 27 ans · 43 tit.",                                      value: 6.74 },
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
      { type: "free", name: "Roman Robertson", from: "Sans contrat (AD · Anglais · 16 ans · régen)", date: "Jan. 2026" },
    ],
    departures: [
      { type: "loan", name: "Lewis Colwell",  to: "Concord Rangers (ALD · Anglais · 20 ans)",       date: "Août 2025" },
      { type: "loan", name: "Harlee Vozza",   to: "Concord Rangers (BU · Irlandais · 21 ans)",      date: "Août 2025" },
      { type: "loan", name: "Bradley Macrae", to: "Hendon (MC · Anglais · 17 ans · régen)",         date: "Sep. 2025" },
      { type: "loan", name: "Harry Messenger", to: "Hendon (DC · Anglais · 17 ans)",                date: "Oct. 2025" },
      { type: "loan", name: "Lewis Royston",  to: "Hayes & Yeading United (MC · Anglais · 18 ans)", date: "Déc. 2025" },
      { type: "loan", name: "Tom Harrison",   to: "Fin de prêt (DC · Anglais · 24 ans)",            date: "Jan. 2026" },
      { type: "free", name: "Aaron Amadi-Holloway", to: "Billericay Town (DC · Gallois · 33 ans)",   date: "Mars 2026" },
      { type: "free", name: "Reece Fleet",    to: "Concord Rangers (MDC · Anglais · 34 ans)",       date: "Avr. 2026" },
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

    // Classement après 44 journées (11 avril 2026) · top 4 assuré des barrages au moins, Horsham relégué
    // 1er promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standings: [
      { pos:1,  team:"Worthing",               j:44, g:25, n:11, l:8,  bp:68, bc:38, db:30, pts:86, zone:"promo" },
      { pos:2,  team:"Chippenham Town",        j:44, g:23, n:13, l:8,  bp:95, bc:60, db:35, pts:82, zone:"promo-playoff", highlight:true },
      { pos:3,  team:"Dag & Red",              j:44, g:21, n:15, l:8,  bp:71, bc:38, db:33, pts:78, zone:"promo-playoff" },
      { pos:4,  team:"Totton",                 j:44, g:22, n:11, l:11, bp:67, bc:45, db:22, pts:77, zone:"promo-playoff" },
      { pos:5,  team:"Bath City",              j:44, g:21, n:9,  l:14, bp:73, bc:59, db:14, pts:72, zone:"promo-playoff" },
      { pos:6,  team:"Salisbury",              j:44, g:20, n:10, l:14, bp:61, bc:56, db:5, pts:70, zone:"promo-playoff" },
      { pos:7,  team:"Tonbridge Angels",       j:44, g:18, n:13, l:13, bp:54, bc:45, db:9, pts:67, zone:"promo-playoff" },
      { pos:8,  team:"Torquay United",         j:44, g:17, n:15, l:12, bp:61, bc:54, db:7, pts:66 },
      { pos:9,  team:"Enfield Town",           j:44, g:20, n:6,  l:18, bp:57, bc:55, db:2, pts:66 },
      { pos:10, team:"Hornchurch",             j:44, g:19, n:8,  l:17, bp:61, bc:54, db:7, pts:65 },
      { pos:11, team:"Dover Athletic",         j:44, g:17, n:12, l:15, bp:58, bc:56, db:2, pts:63 },
      { pos:12, team:"Ebbsfleet United",       j:44, g:17, n:11, l:16, bp:48, bc:50, db:-2, pts:62 },
      { pos:13, team:"Maidstone United",       j:44, g:16, n:13, l:15, bp:57, bc:50, db:7, pts:61 },
      { pos:14, team:"Chelmsford City",        j:44, g:16, n:9,  l:19, bp:52, bc:63, db:-11, pts:57 },
      { pos:15, team:"Eastbourne Borough",     j:44, g:15, n:11, l:18, bp:57, bc:58, db:-1, pts:56 },
      { pos:16, team:"Dorking",                j:44, g:14, n:14, l:16, bp:56, bc:62, db:-6, pts:56 },
      { pos:17, team:"Slough Town",            j:44, g:13, n:12, l:19, bp:44, bc:60, db:-16, pts:51 },
      { pos:18, team:"Farnborough",            j:44, g:12, n:12, l:20, bp:58, bc:69, db:-11, pts:48 },
      { pos:19, team:"Chesham United",         j:44, g:12, n:12, l:20, bp:51, bc:68, db:-17, pts:48 },
      { pos:20, team:"Weston-super-Mare",      j:44, g:13, n:8,  l:23, bp:51, bc:70, db:-19, pts:47 },
      { pos:21, team:"Hemel Hempstead Town",   j:44, g:11, n:12, l:21, bp:41, bc:63, db:-22, pts:45, zone:"releg" },
      { pos:22, team:"Maidenhead United",      j:44, g:10, n:14, l:20, bp:51, bc:62, db:-11, pts:44, zone:"releg" },
      { pos:23, team:"Hampton & Richmond",     j:44, g:11, n:10, l:23, bp:51, bc:79, db:-28, pts:43, zone:"releg" },
      { pos:24, team:"Horsham",                j:44, g:9,  n:11, l:24, bp:42, bc:71, db:-29, pts:38, zone:"releg" },
    ],
    // Effectif au 15 avril 2026
    squad: [
      { n:"Will Henry",            p:"GB",   nat:"ENG", age:27 },
      { n:"Josh Sawyer",           p:"GB",   nat:"ENG", age:17 },
      { n:"Jac Poffley",           p:"DC",   nat:"WAL", age:20 },
      { n:"Canice Carroll",        p:"DC",   nat:"IRL", age:27 },
      { n:"Luke Haines",           p:"DC",   nat:"ENG", age:25 },
      { n:"Freddie Grant",         p:"DC",   nat:"ENG", age:29 },
      { n:"Grant Knowles",         p:"DG",   nat:"ENG", age:17 },
      { n:"Kai Source",            p:"DG",   nat:"ENG", age:19 },
      { n:"Will King",             p:"DG",   nat:"ENG", age:23 },
      { n:"Ethan Vaughan",         p:"DD",   nat:"WAL", age:22 },
      { n:"Jake Evans",            p:"DD",   nat:"ENG", age:27 },
      { n:"George Alston",         p:"MDC",  nat:"ENG", age:19 },
      { n:"Henry Sady",            p:"MDC",  nat:"ENG", age:20 },
      { n:"Kevin Mfuamba",         p:"MDC",  nat:"ENG", age:19 },
      { n:"Tom Mehew",             p:"MDC",  nat:"ENG", age:24 },
      { n:"Caine Bradbury",        p:"MC",   nat:"ENG", age:25 },
      { n:"Quévin Castro",         p:"MC",   nat:"POR", age:24 },
      { n:"Tom Owen-Evans",        p:"MOC",  nat:"ENG", age:29 },
      { n:"Cole Fleming",          p:"AD",   nat:"WAL", age:20 },
      { n:"Jeremiah Okine-Peters", p:"AD",   nat:"ENG", age:20 },
      { n:"Jerae Jones",           p:"AG",   nat:"ENG", age:19 },
      { n:"Olaf Koszela",          p:"BU",   nat:"POL", age:24 },
      { n:"Solomon Wanjau-Smith",  p:"BU",   nat:"ENG", age:26 },
      { n:"Ezio Touray",           p:"BU",   nat:"ITA", age:23 },
      { n:"Harry Parsons",         p:"BU",   nat:"ENG", age:23 },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

]
