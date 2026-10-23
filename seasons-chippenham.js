/**
 * CHIPPENHAM TOWN — PARTIE EN COURS
 * ────────────────────────────────────────────────
 * Saison suivie MOIS PAR MOIS (même format que Wolfsburg-Pep).
 *
 *  ▸ Pour ajouter un mois : pousse un bloc dans "months" :
 *       { key:"08", label:"Août 2025", matches:[ {r:"W", tip:"Adversaire (D) 2-1", comp:"L"}, ... ] }
 *    (D) = domicile, (E) = extérieur · score format DOMICILE-EXTÉRIEUR.
 *    comp : "L" = championnat (compte dans le bilan), "AM" = amical,
 *           coupes : "FAC" (FA Cup), "FAT" (FA Trophy), "PO" (barrages) — libellés dans "compNames".
 *    Barrages : matchs en comp:"PO" dans "months", et parcours dans "cup3" (même format qu'une coupe).
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
 *  ▸ "standingsTitle" / "standingsFinal" : titre du classement, et true quand la saison
 *    régulière est finie mais que la saison continue (barrages) → légende « Relégués », « Promus ».
 *  ▸ "objective" : objectif de la saison fixé par les dirigeants (affiché dans l'en-tête).
 *  ▸ "awards" : distinctions (entraîneur du mois…) : { label, winner, period, detail }
 *    Toutes restent, sur la page de la saison comme sur la page carrière.
 *  ▸ "splash" : à AJOUTER seulement quand la saison est terminée.
 *  ▸ "position" (dans un mois, facultatif) : classement en championnat à la fin du mois.
 *    Dès que 2 mois en ont une, la trajectoire mois par mois s'affiche.
 */
window['SEASONS_chippenham'] = [

  /* ─── SAISON 2026/27 · EN COURS ──────────────────────── */
  {
    id:           "chippenham-2026-27",
    year:         "2026/27",
    league:       "National League",
    status:       "en_cours",
    totalTeams:   24,
    seasonLength: 46,
    lastUpdate:   "Intersaison",
    position:     null,
    compNames:    { FAC: "FA Cup", FAT: "FA Trophy", PO: "Barrages" },

    months: [],

    scorers: [],
    assists: [],
    ratings: [],
    flops:   [],
    transfers:  [],
    departures: [],
    standings:  [],
    squad:      [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },

  /* ─── SAISON 2025/26 · TERMINÉE ──────────────────────── */
  {
    id:           "chippenham-2025-26",
    year:         "2025/26",
    league:       "National League South",
    status:       "termine",
    totalTeams:   24,
    seasonLength: 46,
    lastUpdate:   "Saison terminée",
    position:     null,
    compNames:    { FAC: "FA Cup", FAT: "FA Trophy", PO: "Barrages" },
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
        key: "04", label: "Avril 2026", position: 2,
        note: "Le 2 avril, Nolann Queft prolonge son contrat jusqu'en juin 2028 : dirigeants et supporters sont « fous de joie ». Le lendemain, Chippenham doit se contenter d'un nul à Bath City (1-1, but de Jerae Jones sur un service d'Ethan Vaughan) malgré 65 % de possession et 16 tirs contre 3. Le 5 avril, le club lance le projet d'achat de son stade, le Thornbury Surfacing Stadium, à boucler d'ici juin 2026 : de quoi fêter une saison qui dépasse déjà largement l'objectif fixé, le simple maintien. Le 6 avril, Chippenham bat Totton (2-1, but contre son camp de Wells-Morrison puis Jeremiah Okine-Peters, élu homme du match avec 8,2) et repasse 2e. Le lendemain, c'est officiel : la place en barrages est assurée et, à trois journées de la fin, le club battra le meilleur classement de son histoire en National League South (7e en 2021/22). Le 11 avril, succès 0-2 à Hampton & Richmond (Owen-Evans dès la 2e minute, puis Jones) : à deux journées de la fin, Chippenham est à quatre points de Worthing, le titre reste mathématiquement possible. Le lendemain, les 95 buts inscrits en championnat deviennent le record du club sur une saison. Côté effectif, Reece Fleet (34 ans) rejoint gratuitement Concord Rangers le 14 avril, Canice Carroll (27 ans) part libre à Banbury United le 16, et le jeune attaquant Kieran Talbot (17 ans) signe un nouveau contrat jusqu'en 2028. Le 18 avril, scénario fou contre Hornchurch : Chippenham mène 2-0 (Bradbury, Okine-Peters), se fait rejoindre à 2-2, puis Jerae Jones délivre le stade dans le temps additionnel (3-2, un but et deux passes décisives, 9,6 de note). Worthing chute dans le même temps : avant la dernière journée, Chippenham n'est plus qu'à un point du titre. Le 22 avril, Harlee Vozza revient de son prêt à Concord Rangers en grande forme (15 matchs, 7,91 de moyenne, 1 but et 4 passes décisives). Le 25, dernière journée : Chippenham bute sur Horsham, déjà relégué (0-0, 19 tirs à 6), pendant que Worthing gagne et file vers le titre. Chippenham termine la saison régulière à la 2e place avec 86 points, le meilleur classement de son histoire, et disputera les barrages pour la montée en National League. Grâce à sa 2e place, il est exempté du premier tour et affrontera en demi-finale, à domicile, le vainqueur de Bath City – Salisbury ; l'autre demi-finale opposera Dag & Red au vainqueur de Totton – Tonbridge Angels. Le 30 avril, le premier tour livre son verdict : ce sera un derby contre le grand rival Bath City, tandis que Tonbridge Angels a sorti Totton et défiera Dag & Red. Le 1er mai, Nolann Queft est élu entraîneur du mois pour la deuxième fois d'affilée.",
        matches: [
          { r:"D", tip:"Bath City (E) 1-1",              comp:"L" },
          { r:"W", tip:"Totton (D) 2-1",                 comp:"L" },
          { r:"W", tip:"Hampton & Richmond (E) 0-2",     comp:"L" },
          { r:"W", tip:"Hornchurch (D) 3-2",             comp:"L" },
          { r:"D", tip:"Horsham (E) 0-0",                comp:"L" },
        ],
      },
      {
        key: "05", label: "Mai 2026", position: 2,
        note: "Place aux barrages : le 3 mai, Chippenham domine son grand rival Bath City en demi-finale (2-0). Jeremiah Okine-Peters frappe deux fois en sept minutes (11e et 18e) et finit avec 8,8 ; 28 tirs à 6 pour Chippenham. Direction la finale, à un match de la National League : grâce à son meilleur classement, Chippenham la jouera à domicile, le dimanche 10 mai, contre Tonbridge Angels (7e), tombeur de Dag & Red dans l'autre demi-finale. Les 3 000 spectateurs du derby contre Bath City constituent la plus grosse affluence de l'histoire du club. Le 4 mai, Lewis Colwell revient de son prêt à Concord Rangers (11 matchs, 7,68 de moyenne). Le 5, Solomon Wanjau-Smith prolonge d'un an, jusqu'en juin 2027. Le 6, Lewis Royston rentre à son tour de Hayes & Yeading (28 matchs, 7,40, 4 buts et 3 passes décisives), mais Tom Owen-Evans se blesse à un orteil à l'entraînement (2 à 9 jours d'absence) : sa présence en finale est incertaine. Le 8 mai, treize jeunes à l'essai signent leur premier contrat (équipe U18, jusqu'en 2028) : Marvin Bell, Dylan Bryant, Andy Fish, Ben Johnston, Liam Holt, Liam Rowley, Tom Arthur, Andrew Howson, Kevin Leek, Alex Martin, Kailan Hankins, Lewis Cole et Jake Leach. Mauvaise nouvelle en revanche : Tom Mehew se tord le genou à l'entraînement et manquera la finale (5 à 9 jours d'absence). Le 10 mai, devant son public, Chippenham écrase Tonbridge Angels en finale (4-1) : Okine-Peters encore auteur d'un doublé en cinq minutes (3e, 5e), puis Ethan Vaughan et Harry Parsons. Chippenham Town monte en National League, une première dans l'histoire du club. Dans la foulée, Tom Owen-Evans est élu joueur de la saison de National League South, et Jerae Jones établit le record de la meilleure moyenne sur une saison dans la compétition (7,31 en 41 matchs). Le 12 mai, l'achat du Thornbury Surfacing Stadium est finalisé : le club est désormais propriétaire de son stade. Le 13, une pluie de records individuels tombe : 20 buts pour Jones (qui devient aussi le joueur le plus souvent élu homme du match, 9 fois), 14 passes décisives pour Vaughan et 13 matchs sans encaisser de but pour Will Henry. Lewis Royston est quant à lui renvoyé en équipe U18. Enfin, le 16 mai, le joueur de la saison Tom Owen-Evans prolonge d'un an, jusqu'en juin 2027, à la grande joie des supporters. Le 17 mai, le jeune ailier Jay Naylor (17 ans) signe un nouveau contrat jusqu'en 2028, et la montée fait grimper le prix des places : 23 € en moyenne pour un billet (+17 %), 437 € pour un abonnement (+14 %).",
        matches: [
          { r:"W", tip:"Bath City (D) 2-0",              comp:"PO", tag:"DEMI-FINALE · QUALIFIÉ" },
          { r:"W", tip:"Tonbridge Angels (D) 4-1",       comp:"PO", tag:"FINALE · PROMU EN NATIONAL LEAGUE" },
        ],
      },
    ],

    // Distinctions de la saison
    awards: [
      { label:"Entraîneur du mois", winner:"Nolann Queft", period:"Mars 2026", detail:"National League South · 4 victoires en 5 matchs · devant Alan Dunne (Tonbridge Angels) et Neil McDonald (Dag & Red)" },
      { label:"Joueur de la saison", winner:"Tom Owen-Evans", period:"Saison 2025/26", detail:"National League South · 44 matchs, 18 buts, 9 passes décisives, 7,16 de moyenne" },
      { label:"Entraîneur du mois", winner:"Nolann Queft", period:"Avril 2026", detail:"National League South · 3 victoires en 5 matchs · devant George Elokobi (Maidstone United) et Jake Leberl (Dover Athletic)" },
    ],

    // Records du club battus cette saison
    records: [
      { key:"buts-match", label:"Buts marqués en un match", value:"7", detail:"7-4 contre Maidenhead United (D)", date:"28 fév. 2026" },
      // Mettre à jour à chaque but de championnat, puis au total final
      { key:"buts-saison", label:"Buts marqués en championnat sur une saison", value:"98", detail:"Total de la saison régulière (46 journées) · record battu à deux journées de la fin", date:"12 avr. 2026" },
      { key:"affluence", label:"Affluence au Thornbury Surfacing Stadium", value:"3 000", detail:"Demi-finale des barrages contre Bath City (2-0) · ancien record : 2 625 contre Northampton en novembre 2019", date:"3 mai 2026" },
      { key:"buts-joueur-saison", label:"Buts d'un joueur sur une saison", value:"20", detail:"Jerae Jones", date:"13 mai 2026" },
      { key:"passes-joueur-saison", label:"Passes décisives d'un joueur sur une saison", value:"14", detail:"Ethan Vaughan", date:"13 mai 2026" },
      { key:"hdm-joueur-saison", label:"Titres d'homme du match sur une saison", value:"9", detail:"Jerae Jones", date:"13 mai 2026" },
      { key:"clean-sheets-saison", label:"Matchs sans encaisser de but (gardien)", value:"13", detail:"Will Henry", date:"13 mai 2026" },
      { key:"note-saison-nls", label:"Meilleure moyenne sur une saison en National League South", value:"7,31", detail:"Jerae Jones · 41 matchs · record de la compétition", date:"10 mai 2026" },
      { key:"classement-nls", label:"Meilleur classement en National League South", value:"2e", detail:"86 pts en saison régulière, puis promu via les barrages · ancien record : 7e en 2021/22", date:"10 mai 2026" },
    ],

    // Stats toutes compétitions, fin de saison (barrages compris)
    scorers: [
      { name: "Jerae Jones",                  detail: "AG · Anglais · 19 ans",   value: 20 },
      { name: "Tom Owen-Evans",               detail: "MOC · Anglais · 29 ans",  value: 19 },
      { name: "Solomon Wanjau-Smith",         detail: "BU · Anglais · 27 ans",   value: 16 },
    ],
    assists: [
      { name: "Ethan Vaughan",                detail: "DD · Gallois · 22 ans",   value: 14 },
      { name: "Jerae Jones",                  detail: "AG · Anglais · 19 ans",   value: 13 },
      { name: "C. Bradbury · J. Okine-Peters", detail: "MC / AD · ex-aequo",     value: 10 },
    ],
    // Meilleures et pires moyennes : au moins 23 matchs joués (la moitié des 46 journées de la saison)
    ratings: [
      { name: "Jerae Jones",           detail: "AG · Anglais · 19 ans · 42 tit. / 1 rempl. · 20 buts · 13 passes D.", value: 7.29 },
      { name: "Jeremiah Okine-Peters", detail: "AD · Anglais · 20 ans · 37 tit. / 1 rempl. · 13 buts · 10 passes D.", value: 7.26 },
      { name: "Tom Owen-Evans",        detail: "MOC · Anglais · 29 ans · 44 tit. / 3 rempl. · 19 buts · 9 passes D.",  value: 7.14 },
    ],
    flops: [
      { name: "Tom Mehew",             detail: "MDC · Anglais · 24 ans · 8 tit. / 18 rempl. · 2 passes D.",            value: 6.70 },
      { name: "Will Henry",            detail: "GB · Anglais · 27 ans · 50 tit.",                                      value: 6.78 },
      { name: "Freddie Grant",         detail: "DC · Anglais · 29 ans · 33 tit. / 1 rempl. · 2 passes D.",             value: 6.81 },
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
      { type: "loan", name: "Harlee Vozza",   from: "Retour de prêt de Concord Rangers (BU · Irlandais · 22 ans)", date: "Avr. 2026" },
      { type: "loan", name: "Lewis Colwell",  from: "Retour de prêt de Concord Rangers (DD · Anglais · 20 ans)",   date: "Mai 2026" },
      { type: "loan", name: "Lewis Royston",  from: "Retour de prêt de Hayes & Yeading United (MC · Anglais · 19 ans)", date: "Mai 2026" },
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
      { type: "free", name: "Canice Carroll", to: "Banbury United (DC · Irlandais · 27 ans)",       date: "Avr. 2026" },
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
    cup3: {
      name: "Barrages de National League South",
      phase: "2e de la saison régulière : exempté du premier tour · vainqueur, promu en National League",
      rounds: [
        { result: "W", round: "Demi-finale", score: "2 – 0", opponent: "Bath City (D)" },
        { result: "W", round: "Finale", score: "4 – 1", opponent: "Tonbridge Angels (D) · vainqueur 🏆" },
      ],
    },

    // Classement final de la saison régulière (46 journées, 25 avril 2026) · barrages à venir
    // 1er champion et promu, 2e-7e barrages pour la montée, 21e-24e relégués
    standingsTitle: "Classement final · saison régulière (vainqueur des barrages : Chippenham Town)",
    standingsFinal: true,
    standings: [
      { pos:1,  team:"Worthing",               j:46, g:26, n:11, l:9,  bp:71, bc:41, db:30, pts:89, zone:"promo", champion:true },
      { pos:2,  team:"Chippenham Town",        j:46, g:24, n:14, l:8,  bp:98, bc:62, db:36, pts:86, zone:"promo-playoff", highlight:true },
      { pos:3,  team:"Dag & Red",              j:46, g:22, n:16, l:8,  bp:74, bc:40, db:34, pts:82, zone:"promo-playoff" },
      { pos:4,  team:"Totton",                 j:46, g:22, n:12, l:12, bp:69, bc:48, db:21, pts:78, zone:"promo-playoff" },
      { pos:5,  team:"Bath City",              j:46, g:21, n:11, l:14, bp:77, bc:63, db:14, pts:74, zone:"promo-playoff" },
      { pos:6,  team:"Salisbury",              j:46, g:21, n:10, l:15, bp:62, bc:57, db:5, pts:73, zone:"promo-playoff" },
      { pos:7,  team:"Tonbridge Angels",       j:46, g:19, n:13, l:14, bp:57, bc:49, db:8, pts:70, zone:"promo-playoff" },
      { pos:8,  team:"Torquay United",         j:46, g:18, n:15, l:13, bp:64, bc:57, db:7, pts:69 },
      { pos:9,  team:"Hornchurch",             j:46, g:20, n:8,  l:18, bp:65, bc:57, db:8, pts:68 },
      { pos:10, team:"Dover Athletic",         j:46, g:18, n:13, l:15, bp:64, bc:58, db:6, pts:67 },
      { pos:11, team:"Enfield Town",           j:46, g:20, n:7,  l:19, bp:60, bc:59, db:1, pts:67 },
      { pos:12, team:"Maidstone United",       j:46, g:17, n:14, l:15, bp:61, bc:51, db:10, pts:65 },
      { pos:13, team:"Ebbsfleet United",       j:46, g:18, n:11, l:17, bp:50, bc:54, db:-4, pts:65 },
      { pos:14, team:"Eastbourne Borough",     j:46, g:16, n:12, l:18, bp:61, bc:61, db:0, pts:60 },
      { pos:15, team:"Chelmsford City",        j:46, g:16, n:10, l:20, bp:56, bc:69, db:-13, pts:58 },
      { pos:16, team:"Dorking",                j:46, g:14, n:15, l:17, bp:60, bc:67, db:-7, pts:57 },
      { pos:17, team:"Slough Town",            j:46, g:14, n:13, l:19, bp:47, bc:62, db:-15, pts:55 },
      { pos:18, team:"Farnborough",            j:46, g:13, n:13, l:20, bp:63, bc:71, db:-8, pts:52 },
      { pos:19, team:"Chesham United",         j:46, g:13, n:13, l:20, bp:54, bc:69, db:-15, pts:52 },
      { pos:20, team:"Weston-super-Mare",      j:46, g:14, n:8,  l:24, bp:54, bc:73, db:-19, pts:50 },
      { pos:21, team:"Hemel Hempstead Town",   j:46, g:11, n:12, l:23, bp:41, bc:66, db:-25, pts:45, zone:"releg" },
      { pos:22, team:"Maidenhead United",      j:46, g:10, n:14, l:22, bp:53, bc:70, db:-17, pts:44, zone:"releg" },
      { pos:23, team:"Hampton & Richmond",     j:46, g:11, n:11, l:24, bp:54, bc:83, db:-29, pts:44, zone:"releg" },
      { pos:24, team:"Horsham",                j:46, g:10, n:12, l:24, bp:43, bc:71, db:-28, pts:42, zone:"releg" },
    ],
    // Effectif en fin de saison (10 mai 2026)
    squad: [
      { n:"Will Henry",            p:"GB",   nat:"ENG", age:27 },
      { n:"Josh Sawyer",           p:"GB",   nat:"ENG", age:17 },
      { n:"Jac Poffley",           p:"DC",   nat:"WAL", age:20 },
      { n:"Luke Haines",           p:"DC",   nat:"ENG", age:25 },
      { n:"Freddie Grant",         p:"DC",   nat:"ENG", age:29 },
      { n:"Grant Knowles",         p:"DG",   nat:"ENG", age:17 },
      { n:"Kai Source",            p:"DG",   nat:"ENG", age:19 },
      { n:"Will King",             p:"DG",   nat:"ENG", age:23 },
      { n:"Lewis Colwell",         p:"DD",   nat:"ENG", age:20 },
      { n:"Ethan Vaughan",         p:"DD",   nat:"WAL", age:22 },
      { n:"Jake Evans",            p:"DD",   nat:"ENG", age:28 },
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
      { n:"Solomon Wanjau-Smith",  p:"BU",   nat:"ENG", age:27 },
      { n:"Harlee Vozza",          p:"BU",   nat:"IRL", age:22 },
      { n:"Ezio Touray",           p:"BU",   nat:"ITA", age:23 },
      { n:"Harry Parsons",         p:"BU",   nat:"ENG", age:23 },
    ],

    splash: {
      eyebrow:  "2025/26 · Chippenham Town · Saison 1",
      lines:    ["DEUXIÈMES.", "PROMUS !"],
      sub:      "National League South · 2e · 86 pts · Vainqueur des barrages",
      tagline:  "On leur demandait le maintien, ils ont offert la montée : 98 buts, une 2e place historique et des barrages maîtrisés (2-0 contre Bath City, 4-1 contre Tonbridge Angels). Pour la première fois de son histoire, Chippenham Town découvre la National League.",
    },
  },

]
