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
    lastUpdate:   "Août 2026 · J5",
    position:     16,
    compNames:    { FAC: "FA Cup", FAT: "FA Trophy", PO: "Barrages" },
    objective:    "Maintien en National League",

    months: [
      {
        key: "05", label: "Mai 2026 · intersaison",
        note: "Le 22 mai, Ethan Vaughan, recordman des passes décisives du club (14), prolonge d'un an jusqu'en juin 2027 : les supporters saluent l'engagement d'un des éléments les plus prometteurs de l'effectif. Premier renfort de l'été le 25 mai : le défenseur central Toby Byron (24 ans), libre, champion de National League South avec Worthing, signe jusqu'en 2027 — un choix qui laisse dirigeants et supporters sceptiques. Le 27 mai, le jeune milieu central gallois Alex Martin, 15 ans, est promu des U18 en équipe première (contrat jusqu'en 2028). Le 28, la presse annonce que le président Neil Blackmore pourrait bientôt se retirer et laisser le contrôle du club à un autre membre du comité directeur ; dans la foulée, un groupe de supporters chercherait à racheter le club et pourrait faire une offre au président d'ici peu. Les fans sont partagés. Côté contrats, trois joueurs prolongent d'un an, jusqu'en juin 2027 : le latéral droit Lewis Colwell (20 ans) le 29 mai, puis le défenseur central gallois Jac Poffley (20 ans) et le milieu Lewis Royston (19 ans), toujours en U18, le 30. Le même jour, le milieu offensif portugais Quévin Castro (24 ans) quitte le club libre. Le 31 mai, le latéral droit Joshua Addae (22 ans), libre après une saison à Chesham United, s'engage jusqu'en 2027. Ce même jour, neuf joueurs arrivés en fin de contrat sont laissés libres : Jake Evans, Tom Mehew, Harry Parsons, Caine Bradbury, Cole Fleming, Harlee Vozza, Ezio Touray, Bevan Cross et Henry Sady. Côté prêts, trois joueurs rentrent : le jeune gardien des U18 Massimo Sardo (18 ans), après une belle saison à Welton Rovers (42 matchs, 7,27 de moyenne), le défenseur gauche polonais des U18 Piotr Petrynski (18 ans), prêté à Swindon Supermarine, et Bevan Cross, de retour de Yate Town et qui fait partie des joueurs libérés. Harry Messenger et Bradley Macrae, tous deux 17 ans, restent prêtés à Hendon.",
        matches: [],
      },
      {
        key: "06", label: "Juin 2026 · intersaison",
        note: "Le 1er juin, les rumeurs de reprise se précisent : Chippenham Town serait en pourparlers avec une association de supporters nouvellement fondée, menée par Gary Lewis, abonné du club et investisseur de la région. En attendant que la situation s'éclaircisse, les dirigeants imposent un embargo sur les transferts : plus aucun mouvement n'est autorisé. Le 3 juin, le président Neil Blackmore (65 ans) prépare sa retraite : il ne travaillera plus au quotidien avec l'équipe et n'occupera désormais que des fonctions à temps partiel. Le 5 juin, le jeune défenseur gauche Grant Knowles (17 ans) prolonge d'un an, jusqu'en juin 2027, au grand plaisir des supporters. Le 6 juin, la reprise est officielle : Chippenham Town passe aux mains du holding de supporters mené par Gary Lewis. Le nouvel homme fort se dit « ravi que le club soit désormais entre les mains de milliers de supporters très attachés à son avenir ». Dans la foulée, l'embargo est levé : le club retrouve l'accès au marché des transferts. Le 8 juin, le jeune ailier droit des U18 Roman Robertson (17 ans) signe un nouveau contrat, jusqu'en juin 2028. Premier renfort depuis la levée de l'embargo le 14 juin : le latéral droit Luciano D'Auria-Henry (23 ans) arrive libre de Farnborough (45 matchs de National League South la saison dernière) et signe jusqu'en 2027. Il portera le numéro 22 et espère se relancer à Chippenham ; dirigeants et supporters saluent la recrue. Le 19 juin, un autre ailier des U18, Sam Subuloye (17 ans), signe à son tour un nouveau contrat jusqu'en juin 2028. Le 21 juin, nouveau renfort libre : l'ailier droit Tarik Gidaree (23 ans), en fin de contrat à Slough Town (35 matchs de National League South, 5 buts), s'engage jusqu'en 2027 avec le numéro 23 — les supporters restent un peu réservés. Le 22, l'avant-centre des U18 Cyrus Bailey (17 ans) prolonge lui aussi jusqu'en juin 2028. Le 24 juin, la National League dévoile son calendrier : le championnat se jouera d'août à mai, avec une reprise le samedi 8 août 2026, et le mercato restera ouvert jusqu'au 25 mars 2027. Forest Green Rovers est le tenant du titre. Le 25 juin, les dirigeants fixent les objectifs de cette première saison à ce niveau : obtenir le maintien en National League et atteindre la phase principale de la FA Cup, en restant si possible compétitif en FA Trophy. Ils se disent très contents des progrès accomplis et de l'accroissement de la stature du club ; dirigeants comme supporters sont fous de joie. Le même jour, Jerae Jones, prêté par Reading, décroche un nouveau record du club : sa moyenne de 7,29 en 43 matchs la saison dernière est la meilleure jamais obtenue par un joueur de Chippenham Town sur une saison. Le calendrier de National League est dévoilé : Chippenham débutera le samedi 8 août à Woking, ira à Halifax Town, demi-finaliste de la National League Cup, pour le Boxing Day, et terminera la saison le lundi 26 avril 2027 à Barnet. Avant cela, la pré-saison démarre en juillet par trois matchs amicaux : à Mold Alexandra le 4, puis à domicile contre Millwall le 7 et Swindon Town le 14. Le 30 juin, fin des prêts de la saison de la montée : cinq joueurs rentrent dans leur club, dont les deux hommes forts offensifs, Jerae Jones (43 matchs, 7,29 de moyenne, 20 buts, 13 passes décisives) et Jeremiah Okine-Peters (38 matchs, 7,26, 13 buts, 10 passes), tous deux de retour à Reading. Kevin Mfuamba (39 matchs, 5 buts) retrouve West Brom, Kai Source (37 matchs, 2 buts, 3 passes) Luton Town et George Alston (43 matchs, 3 passes) Swindon Town. En sens inverse, Harry Messenger (35 matchs, 7,44 de moyenne, 3 buts, 8 passes) et Bradley Macrae, 17 ans tous les deux, reviennent de leur prêt à Hendon.",
        matches: [],
      },
      {
        key: "07", label: "Juillet 2026 · pré-saison",
        note: "Le 1er juillet, l'attaquant polonais Olaf Koszela (24 ans), en fin de contrat, quitte le club pour rejoindre Stal Stalowa Wola, en Pologne. Le même jour, le jeune gardien Marvin Bell (16 ans) est promu des U18 en équipe première. Le programme de pré-saison s'étoffe : après Mold Alexandra (le 4, à l'extérieur), Millwall (le 7) et Swindon Town (le 14), Chippenham recevra aussi Enfield Town le samedi 25 juillet. Pour la reprise, le 4 juillet à Mold Alexandra, les hommes de Nolann Queft dominent largement (22 tirs à 5, 12 cadrés) mais doivent attendre la 88e minute et une égalisation de Freddie Grant, servi par Luke Haines, pour arracher le nul (1-1). Grant signe la meilleure note du match (8,4). Les recrues D'Auria-Henry et Byron font leurs débuts en cours de match ; Gidaree, lui, doit sortir dès la 13e minute sur blessure : une élongation des ischio-jambiers qui le tiendra éloigné des terrains deux à trois semaines. Le 5 juillet, l'ailier Charlie Pavey (20 ans), libre depuis la fin de son contrat à Aston Villa, est pris à l'essai pour une semaine. Le même jour, le jeune gardien Massimo Sardo (18 ans), revenu de prêt, signe un nouveau contrat jusqu'en juin 2028. Le lendemain, c'est au tour de l'autre gardien de 18 ans, Josh Sawyer, de prolonger jusqu'en 2028. Le 7 juillet, au Thornbury Surfacing Stadium, Chippenham s'incline de peu face à Millwall (2-3). Deux fois menés après le doublé d'Azeez (7e, 20e), les hommes de Nolann Queft reviennent à chaque fois : Bradley Macrae égalise sur penalty à la 18e, puis sert Charlie Pavey, l'ailier à l'essai, pour le 2-2 juste avant la pause (41e). Mazou-Sacko donne la victoire aux Londoniens à l'heure de jeu (64e). Le jeune gardien Marvin Bell, titulaire, est le meilleur des siens (7,6). Nouvelle courte défaite le 14 juillet, toujours à domicile, contre Swindon Town (0-1) : dans un match équilibré (10 tirs partout), Owiti marque l'unique but à la 19e minute, sur une passe décisive de George Alston, l'ancien prêté de Chippenham revenu dans son club. Toby Byron est le Chippenhamois le mieux noté (7,3). Le 16 juillet, l'essai de Charlie Pavey (20 ans), buteur contre Millwall, est concluant : l'ailier, libre depuis la fin de son contrat à Aston Villa, s'engage jusqu'en 2028 et portera le numéro 19. Dirigeants et supporters saluent la recrue. Le 18 juillet, le jeune défenseur gauche polonais Piotr Petrynski (19 ans), revenu de Swindon Supermarine, repart en prêt jusqu'à la fin de la saison, cette fois à Telford United, avec la promesse d'y être titulaire. Le 20 juillet, le milieu Lewis Royston (19 ans), qui avait prolongé fin mai, est promu des U18 en équipe première. Mauvaise nouvelle le lendemain : à peine remis de son élongation, Tarik Gidaree, aligné avec les U18 pour retrouver du rythme, se blesse gravement lors d'un match amical face aux U18 de Birmingham City. Victime d'une entorse des ligaments croisés sur un tacle, la recrue de l'été est absente pour 9 à 13 mois : sa saison est probablement terminée avant même d'avoir commencé. Le 22 juillet, Chippenham enregistre une nouvelle recrue en défense centrale : Tate Ferdinand (18 ans), libre après la fin de son contrat à Brighton, s'engage jusqu'en 2028 et portera le numéro 20. Dirigeants et supporters se réjouissent de l'arrivée d'un joueur de ce calibre. Le 25 juillet, Chippenham remporte enfin son premier match de la pré-saison, à domicile contre Enfield Town (2-0). Largement supérieurs (21 tirs à 2, aucun tir cadré concédé), les hommes de Nolann Queft ouvrent le score dès la 14e minute par le jeune Kailan Hankins, sur une passe décisive de Joshua Addae, puis Tom Owen-Evans, servi par Charlie Pavey, scelle le succès à la 85e. Addae est le mieux noté (7,9), devant Tate Ferdinand pour sa première apparition (7,8). Le même jour, le défenseur central Luke Haines (25 ans), l'un des meilleurs éléments du club, prolonge de deux ans, jusqu'en juin 2028, pour le plus grand bonheur des supporters. La pré-saison s'achève sur un bilan d'une victoire, un nul et deux défaites ; Lewis Royston, promu le 20 juillet, a entre-temps retrouvé les U18. Le programme d'août est chargé, avec six journées de National League : à Woking (8 août), contre Halifax Town (11), à Scunthorpe (15), contre Truro City (22), à Morecambe (25) et contre Hartlepool (29).",
        matches: [
          { r:"D", tip:"Mold Alexandra (E) 1-1",         comp:"AM" },
          { r:"L", tip:"Millwall (D) 2-3",               comp:"AM" },
          { r:"L", tip:"Swindon Town (D) 0-1",           comp:"AM" },
          { r:"W", tip:"Enfield Town (D) 2-0",           comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2026",
        note: "Premiers pas en National League le 8 août au Laithwaite Community Stadium, et premier revers : Chippenham s'incline 2-0 à Woking malgré une nette domination (18 tirs à 5, 10 cadrés à 4). Le tournant survient à la 31e minute, quand Toby Byron marque contre son camp ; Beautyman achève les espoirs de revenir en transformant un penalty à la 89e. Seule consolation : titularisé sur l'aile droite, le jeune Gallois Jake Leach devient, à 16 ans et 73 jours, le plus jeune joueur de l'histoire du club, effaçant Harry Messenger (16 ans et 310 jours). Le 9 août, la billetterie annonce 246 abonnements vendus pour cette première saison en National League, contre 200 la saison dernière. Le 11 août, pour le premier match de National League au Thornbury Surfacing Stadium, Halifax Town s'impose 2-0 : Hmami transforme un penalty à la 20e puis double la mise neuf minutes plus tard, sur une passe de Howells. Malgré 12 tirs (6 cadrés) contre 8, Chippenham reste muet et pointe à la 24e et dernière place après deux journées, sans point ni but marqué. Le 12 août, Lewis Royston (19 ans), redescendu en U18 pendant la pré-saison, est de nouveau promu en équipe première. Le 13 août, Chippenham se renforce en attaque : Joseph Owiti (18 ans), l'avant-centre de Swindon Town qui avait marqué l'unique but de l'amical du 14 juillet, est prêté jusqu'à la fin de la saison. Courtisé par plusieurs clubs, dont Eastbourne Borough, il portera le numéro 9. Dirigeants et supporters sont enthousiastes. Le 15 août, sous un vent de tempête à l'Attis Arena, Chippenham décroche sa première victoire en National League à Scunthorpe (0-1) : dès la 8e minute, Luciano D'Auria-Henry, servi par Charlie Pavey, inscrit l'unique but du match. Le latéral droit est élu homme du match (7,9), tandis qu'Owiti fait ses débuts professionnels sur l'aile gauche. Chippenham remonte à la 18e place. Le 20 août, nouveau renfort en défense : le latéral gauche Jahmari Lindsay (21 ans), formé à Manchester United, est prêté par Leicester, club de Premier League, jusqu'à la fin de la saison. Il portera le numéro 5 ; les supporters se réjouissent de l'arrivée d'un titulaire en puissance. Ses débuts tournent pourtant au cauchemar le 22 août contre Truro City, alors dernier : mené dès la 2e minute sur un penalty de Marsh, Chippenham perd Lindsay, expulsé à la 9e pour un tacle dangereux. Réduit à dix, il encaisse deux nouveaux buts, de Law (14e) et d'Ajayi (35e), avant que Tom Owen-Evans, servi par D'Auria-Henry, ne réduise l'écart juste avant la pause (42e). Défaite 1-3 malgré 61 % de possession : Chippenham glisse à la 20e place, et Lindsay sera suspendu pour le déplacement à Morecambe. Le même jour, le gardien titulaire Will Henry (28 ans), recordman des clean sheets du club, prolonge de deux ans, jusqu'en juin 2028, au grand bonheur des supporters. Le 25 août, troisième prêt du mois : le milieu offensif irlandais Glory Nzingo (21 ans), arrivé à Swansea en provenance de Reims en 2023, rejoint Chippenham jusqu'à la fin de la saison. Il portera le numéro 35, et les supporters sont contents d'accueillir un joueur important. Titularisé le soir même au Mazuma Mobile Stadium, Nzingo fait ses débuts professionnels lors d'une victoire de caractère à Morecambe (1-2). Privé de Lindsay, suspendu, Chippenham perd encore un joueur sur expulsion, Solomon Wanjau-Smith (37e, tacle dangereux), mais ouvre le score juste avant la pause par Tom Owen-Evans, servi par D'Auria-Henry (45e+2). Azeez égalise à la 68e, avant que Charlie Pavey, sur une passe d'Owen-Evans, n'offre la victoire à la 75e. D'Auria-Henry est une nouvelle fois élu homme du match, et Chippenham remonte à la 16e place ; Wanjau-Smith manquera la réception de Hartlepool.",
        matches: [
          { r:"L", tip:"Woking (E) 2-0" },
          { r:"L", tip:"Halifax Town (D) 0-2" },
          { r:"W", tip:"Scunthorpe (E) 0-1" },
          { r:"L", tip:"Truro City (D) 1-3" },
          { r:"W", tip:"Morecambe (E) 1-2" },
        ],
      },
    ],

    scorers: [],
    assists: [],
    ratings: [],
    flops:   [],
    // Mercato d'été 2026
    transfers:  [
      { type: "free", name: "Toby Byron",     from: "Sans contrat, ex-Worthing (DC · Anglais · 24 ans)", date: "Mai 2026" },
      { type: "free", name: "Joshua Addae",   from: "Sans contrat, ex-Chesham United (DD · Anglais · 22 ans)", date: "Mai 2026" },
      { type: "loan", name: "Massimo Sardo",  from: "Retour de prêt de Welton Rovers (GB · Anglais · 18 ans)", date: "Mai 2026" },
      { type: "loan", name: "Piotr Petrynski", from: "Retour de prêt de Swindon Supermarine (DG · Polonais · 18 ans)", date: "Mai 2026" },
      { type: "loan", name: "Bevan Cross",    from: "Retour de prêt de Yate Town (MO / BU · Anglais · 23 ans)", date: "Mai 2026" },
      { type: "free", name: "Luciano D'Auria-Henry", from: "Sans contrat, ex-Farnborough (DD · Anglais · 23 ans)", date: "Juin 2026" },
      { type: "free", name: "Tarik Gidaree",  from: "Sans contrat, ex-Slough Town (AD · Anglais · 23 ans)", date: "Juin 2026" },
      { type: "loan", name: "Harry Messenger", from: "Retour de prêt de Hendon (DC · Anglais · 17 ans)", date: "Juin 2026" },
      { type: "loan", name: "Bradley Macrae", from: "Retour de prêt de Hendon (MC · Anglais · 17 ans)",  date: "Juin 2026" },
      { type: "free", name: "Charlie Pavey",  from: "Sans contrat, ex-Aston Villa (AD · Anglais · 20 ans)", date: "Juil. 2026" },
      { type: "free", name: "Tate Ferdinand", from: "Sans contrat, ex-Brighton (DC · Anglais · 18 ans)", date: "Juil. 2026" },
      { type: "loan", name: "Joseph Owiti",   from: "Prêt de Swindon Town jusqu'à la fin de la saison (BU · Anglais · 18 ans)", date: "Août 2026" },
      { type: "loan", name: "Jahmari Lindsay", from: "Prêt de Leicester jusqu'à la fin de la saison, indemnité de prêt de 15,75K € (DG · Anglais · 21 ans)", date: "Août 2026" },
      { type: "loan", name: "Glory Nzingo",   from: "Prêt de Swansea jusqu'à la fin de la saison, indemnité de prêt de 12,25K € (MOC · Irlandais · 21 ans)", date: "Août 2026" },
    ],
    departures: [
      { type: "free", name: "Quévin Castro",         to: "Sans club (MC · Portugais · 24 ans)", date: "Mai 2026" },
      { type: "free", name: "Jake Evans",            to: "Sans club (DD · Anglais · 28 ans)", date: "Mai 2026" },
      { type: "free", name: "Tom Mehew",             to: "Sans club (MDC · Anglais · 25 ans)", date: "Mai 2026" },
      { type: "free", name: "Harry Parsons",         to: "Sans club (BU · Anglais · 23 ans)", date: "Mai 2026" },
      { type: "free", name: "Caine Bradbury",        to: "Sans club (MC · Anglais · 25 ans)", date: "Mai 2026" },
      { type: "free", name: "Cole Fleming",          to: "Sans club (AD · Gallois · 20 ans)", date: "Mai 2026" },
      { type: "free", name: "Harlee Vozza",          to: "Sans club (BU · Irlandais · 22 ans)", date: "Mai 2026" },
      { type: "free", name: "Ezio Touray",           to: "Sans club (BU · Italien · 23 ans)", date: "Mai 2026" },
      { type: "free", name: "Bevan Cross",           to: "Sans club (MO / BU · Anglais · 23 ans)", date: "Mai 2026" },
      { type: "free", name: "Henry Sady",            to: "Sans club (MDC · Anglais · 20 ans)", date: "Mai 2026" },
      { type: "loan", name: "Jerae Jones",           to: "Fin de prêt, retour à Reading (AG · Anglais · 19 ans)", date: "Juin 2026" },
      { type: "loan", name: "Jeremiah Okine-Peters", to: "Fin de prêt, retour à Reading (AD · Anglais · 20 ans)", date: "Juin 2026" },
      { type: "loan", name: "Kevin Mfuamba",         to: "Fin de prêt, retour à West Brom (MDC · Anglais · 19 ans)", date: "Juin 2026" },
      { type: "loan", name: "Kai Source",            to: "Fin de prêt, retour à Luton Town (DG · Anglais · 19 ans)", date: "Juin 2026" },
      { type: "loan", name: "George Alston",         to: "Fin de prêt, retour à Swindon Town (MDC · Anglais · 19 ans)", date: "Juin 2026" },
      { type: "free", name: "Olaf Koszela",          to: "Stal Stalowa Wola, Pologne (BU · Polonais · 24 ans)", date: "Juil. 2026" },
      { type: "loan", name: "Piotr Petrynski",       to: "Telford United, prêt jusqu'à la fin de la saison (DG · Polonais · 19 ans)", date: "Juil. 2026" },
    ],
    standingsTitle: "Classement après la 5e journée",
    standings: [
      { pos:1,  team:"Rochdale",              j:5, g:4, n:0, l:1, bp:11, bc:5, db:6, pts:12, zone:"promo" },
      { pos:2,  team:"Yeovil Town",           j:5, g:4, n:0, l:1, bp:10, bc:5, db:5, pts:12, zone:"promo-playoff" },
      { pos:3,  team:"Newport County",        j:5, g:3, n:2, l:0, bp:10, bc:4, db:6, pts:11, zone:"promo-playoff" },
      { pos:4,  team:"Fylde",                 j:5, g:3, n:1, l:1, bp:6, bc:2, db:4, pts:10, zone:"promo-playoff" },
      { pos:5,  team:"Halifax Town",          j:5, g:3, n:1, l:1, bp:7, bc:5, db:2, pts:10, zone:"promo-playoff" },
      { pos:6,  team:"Solihull Moors",        j:5, g:3, n:1, l:1, bp:7, bc:5, db:2, pts:10, zone:"promo-playoff" },
      { pos:7,  team:"Worthing",              j:5, g:3, n:0, l:2, bp:9, bc:4, db:5, pts:9, zone:"promo-playoff" },
      { pos:8,  team:"Barnet",                j:5, g:3, n:0, l:2, bp:9, bc:6, db:3, pts:9 },
      { pos:9,  team:"Southend",              j:5, g:3, n:0, l:2, bp:7, bc:4, db:3, pts:9 },
      { pos:10, team:"Altrincham",            j:5, g:2, n:3, l:0, bp:6, bc:4, db:2, pts:9 },
      { pos:11, team:"Carlisle",              j:5, g:2, n:2, l:1, bp:10, bc:6, db:4, pts:8 },
      { pos:12, team:"South Shields",         j:5, g:2, n:2, l:1, bp:6, bc:4, db:2, pts:8 },
      { pos:13, team:"Scunthorpe",            j:5, g:2, n:1, l:2, bp:7, bc:3, db:4, pts:7 },
      { pos:14, team:"Morecambe",             j:5, g:2, n:1, l:2, bp:5, bc:5, db:0, pts:7 },
      { pos:15, team:"Truro City",            j:5, g:2, n:0, l:3, bp:9, bc:6, db:3, pts:6 },
      { pos:16, team:"Chippenham Town",       j:5, g:2, n:0, l:3, bp:4, bc:8, db:-4, pts:6, highlight:true },
      { pos:17, team:"Aldershot Town",        j:5, g:1, n:2, l:2, bp:5, bc:7, db:-2, pts:5 },
      { pos:18, team:"Woking",                j:5, g:1, n:2, l:2, bp:4, bc:7, db:-3, pts:5 },
      { pos:19, team:"Gateshead",             j:5, g:1, n:1, l:3, bp:4, bc:8, db:-4, pts:4 },
      { pos:20, team:"Hartlepool",            j:5, g:1, n:1, l:3, bp:3, bc:12, db:-9, pts:4 },
      { pos:21, team:"Braintree",             j:5, g:1, n:0, l:4, bp:3, bc:10, db:-7, pts:3, zone:"releg" },
      { pos:22, team:"Boreham Wood",          j:5, g:0, n:2, l:3, bp:3, bc:9, db:-6, pts:2, zone:"releg" },
      { pos:23, team:"Sutton United",         j:5, g:0, n:1, l:4, bp:1, bc:5, db:-4, pts:1, zone:"releg" },
      { pos:24, team:"Tamworth",              j:5, g:0, n:1, l:4, bp:4, bc:16, db:-12, pts:1, zone:"releg" },
    ],
    records: [
      { key:"plus-jeune-joueur", label:"Plus jeune joueur à disputer un match", value:"16 ans et 73 jours", detail:"Jake Leach · à Woking (National League) · ancien record : Harry Messenger, 16 ans et 310 jours à Ebbsfleet United", date:"8 août 2026" },
    ],

    // Effectif au 1er août 2026 (+ Lewis Royston, promu le 12 août, et Joseph Owiti, Jahmari Lindsay et Glory Nzingo, prêtés les 13, 20 et 25 août)
    squad: [
      { n:"Marvin Bell",           p:"GB",   nat:"ENG", age:16 },
      { n:"Will Henry",            p:"GB",   nat:"ENG", age:28 },
      { n:"Josh Sawyer",           p:"GB",   nat:"ENG", age:18 },
      { n:"Harry Messenger",       p:"DC",   nat:"ENG", age:17 },
      { n:"Jac Poffley",           p:"DC",   nat:"WAL", age:20 },
      { n:"Tate Ferdinand",        p:"DC",   nat:"ENG", age:18 },
      { n:"Toby Byron",            p:"DC",   nat:"ENG", age:24 },
      { n:"Luke Haines",           p:"DC",   nat:"ENG", age:25 },
      { n:"Freddie Grant",         p:"DC",   nat:"ENG", age:29 },
      { n:"Grant Knowles",         p:"DG",   nat:"ENG", age:17 },
      { n:"Jahmari Lindsay",       p:"DG",   nat:"ENG", age:21 },
      { n:"Liam Rowley",           p:"DG",   nat:"ENG", age:16 },
      { n:"Lewis Colwell",         p:"DD",   nat:"ENG", age:20 },
      { n:"Joshua Addae",          p:"DD",   nat:"ENG", age:23 },
      { n:"Luciano D'Auria-Henry", p:"DD",   nat:"ENG", age:23 },
      { n:"Ethan Vaughan",         p:"DD",   nat:"WAL", age:22 },
      { n:"Tom Arthur",            p:"MD",   nat:"ENG", age:16 },
      { n:"Andrew Howson",         p:"MD",   nat:"ENG", age:16 },
      { n:"Bradley Macrae",        p:"MC",   nat:"ENG", age:17 },
      { n:"Lewis Royston",         p:"MC",   nat:"ENG", age:19 },
      { n:"Alex Martin",           p:"MC",   nat:"WAL", age:15 },
      { n:"Glory Nzingo",          p:"MOC",  nat:"IRL", age:21 },
      { n:"Tom Owen-Evans",        p:"MOC",  nat:"ENG", age:29 },
      { n:"Tarik Gidaree",         p:"AD",   nat:"ENG", age:23 },
      { n:"Charlie Pavey",         p:"AD",   nat:"ENG", age:20 },
      { n:"Jake Leach",            p:"AD",   nat:"WAL", age:16 },
      { n:"Lewis Cole",            p:"AD",   nat:"ENG", age:16 },
      { n:"Solomon Wanjau-Smith",  p:"BU",   nat:"ENG", age:27 },
      { n:"Joseph Owiti",          p:"BU",   nat:"ENG", age:18 },
      { n:"Kailan Hankins",        p:"BU",   nat:"ENG", age:16 },
    ],

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
        note: "Place aux barrages : le 3 mai, Chippenham domine son grand rival Bath City en demi-finale (2-0). Jeremiah Okine-Peters frappe deux fois en sept minutes (11e et 18e) et finit avec 8,8 ; 28 tirs à 6 pour Chippenham. Direction la finale, à un match de la National League : grâce à son meilleur classement, Chippenham la jouera à domicile, le dimanche 10 mai, contre Tonbridge Angels (7e), tombeur de Dag & Red dans l'autre demi-finale. Les 3 000 spectateurs du derby contre Bath City constituent la plus grosse affluence de l'histoire du club. Le 4 mai, Lewis Colwell revient de son prêt à Concord Rangers (11 matchs, 7,68 de moyenne). Le 5, Solomon Wanjau-Smith prolonge d'un an, jusqu'en juin 2027. Le 6, Lewis Royston rentre à son tour de Hayes & Yeading (28 matchs, 7,40, 4 buts et 3 passes décisives), mais Tom Owen-Evans se blesse à un orteil à l'entraînement (2 à 9 jours d'absence) : sa présence en finale est incertaine. Le 8 mai, treize jeunes à l'essai signent leur premier contrat (équipe U18, jusqu'en 2028) : Marvin Bell, Dylan Bryant, Andy Fish, Ben Johnston, Liam Holt, Liam Rowley, Tom Arthur, Andrew Howson, Kevin Leek, Alex Martin, Kailan Hankins, Lewis Cole et Jake Leach. Mauvaise nouvelle en revanche : Tom Mehew se tord le genou à l'entraînement et manquera la finale (5 à 9 jours d'absence). Le 10 mai, devant son public, Chippenham écrase Tonbridge Angels en finale (4-1) : Okine-Peters encore auteur d'un doublé en cinq minutes (3e, 5e), puis Ethan Vaughan et Harry Parsons. Chippenham Town monte en National League, une première dans l'histoire du club. Dans la foulée, Tom Owen-Evans est élu joueur de la saison de National League South, et Jerae Jones établit le record de la meilleure moyenne sur une saison dans la compétition (7,31 en 41 matchs). Le 13 mai, une pluie de records individuels tombe : 20 buts pour Jones (qui devient aussi le joueur le plus souvent élu homme du match, 9 fois), 14 passes décisives pour Vaughan et 13 matchs sans encaisser de but pour Will Henry. Côté club, l'achat du Thornbury Surfacing Stadium est finalisé le 12 mai : Chippenham est désormais propriétaire de son stade. Le 13, Lewis Royston est renvoyé en équipe U18. Le 16, Tom Owen-Evans, joueur de la saison, prolonge d'un an jusqu'en juin 2027, à la grande joie des supporters. Le 17, le jeune ailier Jay Naylor (17 ans) signe un nouveau contrat jusqu'en 2028, Will King part libre à Metropolitan Police, et la montée fait grimper le prix des places : 23 € en moyenne pour un billet (+17 %), 437 € pour un abonnement (+14 %). Le 18 mai, fin officielle de la saison : les joueurs partent en vacances, reprise de la pré-saison le lundi 29 juin 2026.",
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
      { key:"note-joueur-saison", label:"Meilleure moyenne d'un joueur sur une saison", value:"7,29", detail:"Jerae Jones · 43 matchs", date:"25 juin 2026" },
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
      { type: "free", name: "Will King",      to: "Metropolitan Police (DG / MC · Anglais · 23 ans)", date: "Mai 2026" },
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
      { n:"Lewis Royston",         p:"MC",   nat:"ENG", age:19 },
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
