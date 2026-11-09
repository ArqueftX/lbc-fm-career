/**
 * STADE BRESTOIS 29 — PARTIE EN COURS (FOOTBALL MANAGER 27)
 * ────────────────────────────────────────────────
 * Saison suivie MOIS PAR MOIS (même format que Chippenham).
 *
 *  ▸ Pour ajouter un mois : pousse un bloc dans "months" :
 *       { key:"08", label:"Août 2026", matches:[ {r:"W", tip:"Adversaire (D) 2-1"}, ... ] }
 *    (D) = domicile, (E) = extérieur · score format DOMICILE-EXTÉRIEUR.
 *    comp : absent ou "L" = championnat (compte dans le bilan), "AM" = amical,
 *           coupes : "CDF" (Coupe de France) — libellés dans "compNames".
 *    Le bilan (V/N/D, buts, points) se calcule TOUT SEUL à partir des matchs de championnat.
 *
 *  ▸ "standings"  : colle le classement à jour (la ligne highlight:true donne la position).
 *    "zone" d'une ligne : ucl, uel, uecl, releg-playoff, releg (+ champion:true) —
 *    la légende sous le classement se construit toute seule (voir standings-zones.js).
 *  ▸ "scorers/assists/ratings/flops" : stats cumulées, mises à jour chaque mois.
 *  ▸ "transfers/departures"    : mercato.
 *  ▸ "records" / "awards" : records du club et distinctions (voir seasons-chippenham.js).
 *  ▸ "objective" : objectif de la saison fixé par les dirigeants (affiché dans l'en-tête).
 *  ▸ "splash" : à AJOUTER seulement quand la saison est terminée.
 *  ▸ "position" (dans un mois, facultatif) : classement en championnat à la fin du mois.
 */
window['SEASONS_brest'] = [

  /* ─── SAISON 2027/28 · EN COURS ──────────────────────── */
  {
    id:           "brest-2027-28",
    year:         "2027/28",
    league:       "Ligue 1",
    status:       "en_cours",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Septembre 2027 · J7",
    position:     7,
    compNames:    { CDF: "Coupe de France" },
    objective:    "Terminer en milieu de tableau en Ligue 1",

    // Stats au 20 septembre 2027 (7 journées de Ligue 1)
    scorers: [
      { name: "Pathé Mboup",           detail: "MOG · Sénégalais · 23 ans",       value: 3 },
      { name: "Doumbia · Baldé · Brunner", detail: "3 joueurs à égalité",         value: 1 },
    ],
    assists: [
      { name: "Zogbé · Sakai · Kaio César · Baldé · Le Guen · Chotard", detail: "6 joueurs à égalité", value: 1 },
    ],
    // Meilleures et pires moyennes : au moins 4 matchs joués (la moitié des 7 journées)
    ratings: [
      { name: "Gotoku Sakai",          detail: "DG · Japonais · 36 ans · 7 tit. · 1 passe D.",                     value: 7.07 },
      { name: "Luck Zogbé",            detail: "DD · Ivoirien · 25 ans · 6 tit. / 1 rempl. · 1 passe D.",          value: 7.03 },
      { name: "Kamory Doumbia",        detail: "MC · Malien · 24 ans · 5 tit. / 1 rempl. · 1 but",                 value: 6.92 },
    ],
    flops: [
      { name: "Kaio César",            detail: "MOD · Brésilien · 23 ans · 7 tit. · 1 passe D.",                   value: 6.55 },
      { name: "Mama Baldé",            detail: "BU · Bissau-Guinéen · 31 ans · 7 tit. · 1 but · 1 passe D.",       value: 6.59 },
      { name: "Alireza Beiranvand",    detail: "GB · Iranien · 34 ans · 7 tit.",                                   value: 6.69 },
    ],
    // Effectif au 20 septembre 2027
    squad: [
      { n:"Alireza Beiranvand",    p:"GB",   nat:"IRN", age:34 },
      { n:"Egil Selvik",           p:"GB",   nat:"NOR", age:30 },
      { n:"Mathieu Patouillet",    p:"GB",   nat:"FRA", age:23 },
      { n:"Justin Bengui Joao",    p:"GB",   nat:"ANG", age:22 },
      { n:"Luck Zogbé",            p:"DD",   nat:"CIV", age:25 },
      { n:"Gotoku Sakai",          p:"DG",   nat:"JPN", age:36 },
      { n:"Justin Bourgault",      p:"DG",   nat:"FRA", age:22 },
      { n:"Brendan Chardonnet",    p:"DC",   nat:"FRA", age:32 },
      { n:"Václav Jemelka",        p:"DC",   nat:"CZE", age:32 },
      { n:"Raphaël Le Guen",       p:"DC",   nat:"FRA", age:21 },
      { n:"Joris Chotard",         p:"MD",   nat:"FRA", age:25 },
      { n:"Hugo Magnetti",         p:"MD",   nat:"FRA", age:29 },
      { n:"Lucas Tousart",         p:"MD",   nat:"FRA", age:30 },
      { n:"Mamady Diambou",        p:"MD",   nat:"MLI", age:24 },
      { n:"Kamory Doumbia",        p:"MC",   nat:"MLI", age:24 },
      { n:"Joseph Nonge",          p:"MC",   nat:"BEL", age:22 },
      { n:"Kaio César",            p:"MOD",  nat:"BRA", age:23 },
      { n:"Giovani Versini",       p:"MOD",  nat:"FRA", age:23 },
      { n:"Pathé Mboup",           p:"MOG",  nat:"SEN", age:23 },
      { n:"Mama Baldé",            p:"BU",   nat:"GNB", age:31 },
      { n:"Paris Brunner",         p:"BU",   nat:"GER", age:21 },
    ],
    standingsTitle: "Classement au 11 septembre 2027",
    standings: [
      { pos:1,  team:"AS Monaco",      j:5, g:3, n:2, l:0, bp:10, bc:2, db:8, pts:11, zone:"ucl" },
      { pos:2,  team:"AJ Auxerre",     j:5, g:3, n:2, l:0, bp:12, bc:5, db:7, pts:11, zone:"ucl" },
      { pos:3,  team:"Rennes",         j:5, g:3, n:1, l:1, bp:7, bc:5, db:2, pts:10, zone:"ucl" },
      { pos:4,  team:"OL",             j:5, g:3, n:1, l:1, bp:7, bc:5, db:2, pts:10, zone:"ucl" },
      { pos:5,  team:"PSG",            j:5, g:3, n:1, l:1, bp:5, bc:3, db:2, pts:10, zone:"uel" },
      { pos:6,  team:"Paris FC",       j:6, g:2, n:3, l:1, bp:5, bc:3, db:2, pts:9, zone:"uecl" },
      { pos:7,  team:"Brest",          j:6, g:2, n:2, l:2, bp:6, bc:5, db:1, pts:8, highlight:true },
      { pos:8,  team:"OGC Nice",       j:6, g:2, n:2, l:2, bp:11, bc:11, db:0, pts:8 },
      { pos:9,  team:"FC Lorient",     j:5, g:2, n:1, l:2, bp:7, bc:6, db:1, pts:7 },
      { pos:10, team:"Toulouse FC",    j:5, g:2, n:1, l:2, bp:9, bc:9, db:0, pts:7 },
      { pos:11, team:"LOSC",           j:5, g:2, n:1, l:2, bp:5, bc:7, db:-2, pts:7 },
      { pos:12, team:"OM",             j:5, g:1, n:3, l:1, bp:6, bc:8, db:-2, pts:6 },
      { pos:13, team:"RC Lens",        j:6, g:1, n:3, l:2, bp:3, bc:6, db:-3, pts:6 },
      { pos:14, team:"Angers SCO",     j:5, g:1, n:2, l:2, bp:3, bc:5, db:-2, pts:5 },
      { pos:15, team:"Reims",          j:5, g:0, n:4, l:1, bp:5, bc:6, db:-1, pts:4 },
      { pos:16, team:"Strasbourg",     j:5, g:1, n:1, l:3, bp:2, bc:6, db:-4, pts:4, zone:"releg-playoff" },
      { pos:17, team:"Havre AC",       j:5, g:0, n:1, l:4, bp:2, bc:7, db:-5, pts:1, zone:"releg" },
      { pos:18, team:"Saint-Étienne",  j:5, g:0, n:1, l:4, bp:2, bc:8, db:-6, pts:1, zone:"releg" },
    ],

    months: [
      {
        key: "06", label: "Juin 2027 · intersaison",
        note: "Le 5 juin, le milieu Axel Lassus (18 ans), joueur de la réserve, signe son premier contrat professionnel, jusqu'en juin 2030. Le 20, neuf jeunes joueurs, tous âgés de 19 ans, arrivent en fin de contrat et quittent le club libres : Evan Mailly, Paul Rivoal, Yanis Ettori, Enzo Ngoma, Nathan Thomas, Mattéo Piveteau, Yessine Ben Mahmoud, Tia Davy et Hugo Bourgoin. Le 24, le défenseur central Noa Lango (18 ans) est prêté au FC Chambly, en Ligue 3, jusqu'à la fin de la saison, pour y gagner du temps de jeu. Le lendemain, le jeune attaquant Jaden Choisy (17 ans), révélation de la fin de saison, est à son tour prêté à Valenciennes jusqu'à la fin de la saison, après avoir décliné les propositions de Concarneau, Quevilly-Rouen et Fleury. Le 26, le milieu Kevin Braun (16 ans), des U19, signe son premier contrat professionnel, jusqu'en 2030. Le 29, Mama Baldé, remis de sa cheville cassée, reprend l'entraînement complet. Le 30, les prêts arrivent à leur terme : le gardien Egil Selvik (36 matchs) retourne à Watford, Manu Hernando (12 matchs) au Racing Santander et Noah Edjouma (34 matchs, 4 buts, 5 passes décisives) au LOSC. Le même jour, plusieurs contrats arrivent à leur terme : trois cadres de la saison passée s'en vont libres, Bradley Locko à l'AS Monaco, Kenny Lala au Ferencváros et le meilleur buteur Ludovic Ajorque à Ipswich, tout comme le jeune défenseur central Sékou Sylla (19 ans), qui rejoint Reims. Le gardien Romain Cagnon et le milieu Abdoul Samaké quittent eux aussi le club en fin de contrat, tandis que le jeune milieu Hamidou Makalou (20 ans) revient de prêt.",
        matches: [],
      },
      {
        key: "07", label: "Juillet 2027 · pré-saison",
        note: "Pour sa deuxième saison, les dirigeants reconduisent l'objectif d'un milieu de tableau en Ligue 1 et attendent de Brest qu'il se montre compétitif en Coupe de France ; ils se disent contents des progrès accomplis. Le 1er juillet, deux recrues sont officialisées : le Japonais Gotoku Sakai (36 ans), arrière polyvalent et expérimenté, et Egil Selvik, le gardien prêté la saison passée, qui s'engage cette fois définitivement jusqu'en 2029. Le même jour, cinq jeunes joueurs quittent le club en fin de contrat : Angelo Bico, Sacha Viel, Kenan Moulangou, Noah Mockhtari et Romain Decker. Le 3, le milieu Axel Lassus (18 ans) est prêté à l'AS Cannes jusqu'à la fin de la saison. Le 4, Brest recrute libre le gardien international iranien Alireza Beiranvand (34 ans), pour un an. Le 10, c'est au tour de l'ailier brésilien Kaio César (23 ans) de s'engager libre jusqu'en 2031, mais Mamady Diambou se fait une élongation des ischio-jambiers à l'entraînement (8 jours à 2 semaines d'absence). Le 11, Brest ouvre sa préparation par une courte défaite à Guingamp (1-0), sur un but d'Ewan Aucon (67e), élu homme du match. Le 12, Yacouba Kamissoko (16 ans), ailier des U19, signe son premier contrat professionnel, jusqu'en 2030. Le 14, à Białystok, Brest arrache le nul face au Jagiellonia (3-3) malgré un triplé de Youssuf Sylla, homme du match : Cedric Bayiha (16e, sur une passe de Joseph Nonge), Justin Bourgault (45e+2, servi par Bayiha) et Nonge (56e, sur un service de Kaio César) marquent pour les Brestois. Le 15, le défenseur central tchèque Václav Jemelka (32 ans) arrive du Viktoria Plzeň, avec un contrat jusqu'en 2029. Le 17, au stade Francis-Le Blé, Brest remporte face au FC Midtjylland (3-1) le jubilé de Brendan Chardonnet, recordman des matchs de championnat avec le club : Lenny Dan ouvre le score sur une passe d'Hugo Magnetti (9e), Billing égalise (25e), puis Ludovic Ajorque, revenu exceptionnellement pour l'occasion, s'offre un doublé et est élu homme du match (73e, servi par Pathé Mboup, puis 83e, sur une passe de Kamory Doumbia). Le même jour, Mboup, un des meilleurs joueurs de l'équipe selon les supporters, prolonge de quatre ans, jusqu'en 2031. Le 24, le défenseur Gautier Lloris (32 ans) quitte le club pour Reims. Le soir même, au Portugal, Brest s'impose à Sintrense (3-4) dans un match fou : Giovani Versini, auteur de quatre passes décisives, obtient la note parfaite (10/10), servant Lenny Dan (14e, puis 68e), Raphaël Le Guen (23e) et Mamady Diambou (73e), malgré le triplé de Tungumuna. Enfin, le 31, Brest gagne à Middlesbrough (2-3) : Bayiha, sur une passe de Luck Zogbé (9e), et Bourgault, servi par Versini (21e), donnent l'avantage aux Brestois, Leo Castledine, homme du match, égalise par un doublé éclair (40e, 41e), avant que Versini, servi par Bayiha, ne donne la victoire aux siens (52e). Bilan de la préparation : trois victoires, un nul et une défaite.",
        matches: [
          { r:"L", tip:"EA Guingamp (E) 1-0",           comp:"AM" },
          { r:"D", tip:"Jagiellonia (E) 3-3",           comp:"AM" },
          { r:"W", tip:"FC Midtjylland (D) 3-1",        comp:"AM", tag:"Jubilé de Chardonnet" },
          { r:"W", tip:"Sintrense (E) 3-4",             comp:"AM" },
          { r:"W", tip:"Middlesbrough (E) 2-3",         comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2027", position: 13,
        note: "Août mêle les derniers matchs amicaux, à West Bromwich le mercredi 4 et contre Liverpool au stade Francis-Le Blé le samedi 7, et la reprise de la Ligue 1 : Brest reçoit Nice le dimanche 15 puis Rennes le samedi 21 pour le derby breton, avant un déplacement à Marseille le samedi 28. Le 4, au stade des Hawthorns, Brest partage les points avec West Brom (3-3) au terme d'un match très ouvert : Giovani Versini, servi par Mama Baldé, ouvre le score (8e), Price égalise dans la foulée (8e), puis Baldé s'offre un doublé, sur des passes de Justin Bourgault (17e) et de Versini (21e), avant que Price (42e) et Morgan (47e) ne ramènent les Anglais à hauteur. Baldé est élu homme du match (9,0). Le 6, Brest recrute le jeune gardien angolais Justin Bengui Joao (22 ans), en provenance de l'OL pour 1,9 million d'euros, avec un contrat jusqu'en 2030. Le même jour, mauvaise nouvelle : Egil Selvik se blesse à la hanche à l'entraînement après une mauvaise chute et sera absent deux à trois mois. Le 7, Liverpool s'impose au stade Francis-Le Blé (0-1) sur un but de Danns (61e), servi par Virgil van Dijk, élu homme du match ; Alireza Beiranvand, titularisé, se montre solide (7,4). La préparation se termine sur un bilan de trois victoires, deux nuls et deux défaites. Le 15, pour la reprise de la Ligue 1 au stade Francis-Le Blé, Brest renverse Nice (2-1) : Cabezas Hurtado, servi par Sofiane Diop, ouvre le score pour les Aiglons (51e), Pathé Mboup égalise sur une passe de Mama Baldé (74e), puis Bombito marque contre son camp dans le temps additionnel (90e+1). Sofiane Diop est élu homme du match (7,6). Le 18, deux jeunes des U19 signent leur premier contrat professionnel, jusqu'en 2030 : l'attaquant Cedric Bayiha, révélation de la préparation avec deux buts et deux passes décisives, et le latéral Quentin Bourda, tous deux âgés de 16 ans. Le 21, le derby breton tourne encore à l'avantage de Rennes, vainqueur au stade Francis-Le Blé (0-1) sur un but tardif d'Esteban Lepaul, servi par Blas (85e) ; Lepaul est élu homme du match (7,8). Le 28, à l'Orange Vélodrome, Brest s'incline face à l'OM (1-0) sur un but de Kondogbia juste avant la pause, servi par Gouiri (44e) ; Jeffrey de Lange, le gardien marseillais, est élu homme du match (7,5). Après trois journées, Brest pointe à la 13e place avec 3 points.",
        matches: [
          { r:"D", tip:"West Brom (E) 3-3",             comp:"AM" },
          { r:"L", tip:"Liverpool (D) 0-1",             comp:"AM" },
          { r:"W", tip:"OGC Nice (D) 2-1" },
          { r:"L", tip:"Rennes (D) 0-1" },
          { r:"L", tip:"OM (E) 1-0" },
        ],
      },
      {
        key: "09", label: "Septembre 2027",
        note: "Le 1er septembre, Brest frappe un gros coup en attaque : l'avant-centre allemand Paris Brunner (21 ans), sept fois sélectionné avec les Espoirs, arrive de l'AS Monaco en prêt jusqu'à la fin de la saison, avec une clause d'achat de 17,25 millions d'euros. Dirigeants et supporters sont enthousiastes. Le même jour, le jeune milieu Hamidou Makalou (21 ans) est prêté à Nancy, en Ligue 2, jusqu'à la fin de la saison. Le soir même, pour la 4e journée, Brest bat Angers au stade Francis-Le Blé (2-0) : Mama Baldé, servi par Kaio César (20e), puis Pathé Mboup, sur une passe de Luck Zogbé (23e), font la différence en trois minutes. Angers ne cadre pas le moindre tir, et Zogbé est élu homme du match (8,8). Le 4, Toulouse arrache le nul au stade Francis-Le Blé (1-1) : Russell-Rowe ouvre le score sur une passe de Vossah (17e), mais Kamory Doumbia, servi par Joris Chotard, égalise au retour des vestiaires (50e) et est élu homme du match (8,0). Zogbé et Doumbia sont tous deux nommés dans l'équipe-type de la semaine. Le 11, au stade Jean-Bouin, Brest ramène un nouveau nul du Paris FC (1-1) : Mboup ouvre le score sur un centre de Gotoku Sakai (27e), avant l'égalisation d'Enes Ünal, servi par Lees-Melou (39e). Sakai est élu homme du match (8,5). Le 17, Brest bat Lorient au stade Francis-Le Blé (1-0) grâce à Paris Brunner, entré en jeu, qui marque son premier but sous le maillot brestois à la 82e minute, sur une passe de Raphaël Le Guen. Brest reste invaincu en septembre (deux victoires, deux nuls) et pointe à la 5e place au soir de la 7e journée.",
        matches: [
          { r:"W", tip:"Angers SCO (D) 2-0" },
          { r:"D", tip:"Toulouse FC (D) 1-1" },
          { r:"D", tip:"Paris FC (E) 1-1" },
          { r:"W", tip:"FC Lorient (D) 1-0" },
        ],
      },
    ],

    transfers:  [
      { type: "free", name: "Gotoku Sakai",      from: "Libre (DG / DC / DD · Japonais · 36 ans)", date: "Juil. 2027" },
      { type: "buy",  name: "Egil Selvik",       from: "Watford, après son prêt (GB · Norvégien · 29 ans)", date: "Juil. 2027", amount: "1,2M €" },
      { type: "free", name: "Alireza Beiranvand", from: "Libre (GB · Iranien · 34 ans)", date: "Juil. 2027" },
      { type: "free", name: "Kaio César",        from: "Libre (MOD / MOG · Brésilien · 23 ans)", date: "Juil. 2027" },
      { type: "buy",  name: "Justin Bengui Joao", from: "OL (GB · Angolais · 22 ans)", date: "Août 2027", amount: "1,9M €" },
      { type: "loan", name: "Paris Brunner",     from: "Prêt de l'AS Monaco jusqu'à la fin de la saison, avec une clause d'achat de 17,25M € (BU · Allemand · 21 ans)", date: "Sept. 2027" },
      { type: "buy",  name: "Václav Jemelka",    from: "Viktoria Plzeň (DC · Tchèque · 32 ans)", date: "Juil. 2027", amount: "775K €" },
    ],
    departures: [
      { type: "free", name: "Bradley Locko",     to: "Libre, rejoint l'AS Monaco (DG · Français · 25 ans)", date: "Juil. 2027" },
      { type: "free", name: "Kenny Lala",        to: "Libre, rejoint le Ferencváros (DD · Martiniquais · 35 ans)", date: "Juil. 2027" },
      { type: "free", name: "Ludovic Ajorque",   to: "Libre, rejoint Ipswich (BU · Français · 33 ans)", date: "Juil. 2027" },
      { type: "sell", name: "Gautier Lloris",    to: "Reims (DC · Français · 32 ans)", date: "Juil. 2027", amount: "825K €" },
      { type: "loan", name: "Axel Lassus",       to: "Prêt à l'AS Cannes jusqu'à la fin de la saison (MC · Français · 18 ans)", date: "Juil. 2027" },
      { type: "loan", name: "Noa Lango", to: "Prêt au FC Chambly (Ligue 3) jusqu'à la fin de la saison (DC · Français · 18 ans)", date: "Juin 2027" },
      { type: "loan", name: "Hamidou Makalou",   to: "Prêt à Nancy (Ligue 2) jusqu'à la fin de la saison (MD · Malien · 21 ans)", date: "Sept. 2027" },
      { type: "loan", name: "Jaden Choisy", to: "Prêt à Valenciennes jusqu'à la fin de la saison (BU · Français · 17 ans)", date: "Juin 2027" },
      { type: "loan", name: "Egil Selvik", to: "Fin de prêt, retour à Watford (GB · Norvégien · 29 ans)", date: "Juin 2027" },
      { type: "loan", name: "Manu Hernando", to: "Fin de prêt, retour au Racing Santander (DC · Espagnol · 28 ans)", date: "Juin 2027" },
      { type: "loan", name: "Noah Edjouma", to: "Fin de prêt, retour au LOSC (MOD · Français · 21 ans)", date: "Juin 2027" },
    ],
  },

  /* ─── SAISON 2026/27 · TERMINÉE ──────────────────────── */
  {
    id:           "brest-2026-27",
    year:         "2026/27",
    league:       "Ligue 1",
    status:       "termine",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Saison terminée",
    position:     9,
    compNames:    { CDF: "Coupe de France" },
    objective:    "Terminer en milieu de tableau en Ligue 1",

    months: [
      {
        key: "07", label: "Juillet 2026 · pré-saison",
        note: "Arq Queft 1er du Nom prend les commandes du Stade Brestois 29 pour sa première saison sur Football Manager 27. Les dirigeants fixent le cap : faire de Brest une équipe installée durablement en Ligue 1 et se montrer compétitif en Coupe de France, tout en formant des jeunes grâce au centre de formation du club ; ils reconnaissent qu'il est encore trop tôt pour juger le travail du nouvel entraîneur. Il hérite aussi de deux joueurs prêtés avant son arrivée : le gardien norvégien Egil Selvik, prêté par Watford, et le jeune ailier Noah Edjouma, prêté par le LOSC. Le 22 juillet, en Autriche, le premier match amical tourne à la démonstration au Stadion Leoben : Brest écrase le DSV Leoben 6-1 (28 tirs à 4, 64 % de possession). Magnetti ouvre le score sur une passe de Baldé (14e), Chotard double la mise (21e), puis, après la réduction du score de Sturm (35e), Lala (41e), Kamory Doumbia sur une passe de Versini (58e), Diambou servi par Zogbé (60e) et Nonge sur une passe de Le Guen (80e) complètent la marque. Doumbia est élu homme du match (8,1). Seule ombre au tableau : Ludovic Ajorque se blesse de manière anodine et souffre d'une rupture du tendon rotulien ; l'avant-centre de 32 ans, confié à un spécialiste, sera absent six semaines à deux mois. Le stage autrichien se poursuit avec trois nouvelles victoires. Le 25 juillet, le SV Donau résiste longtemps (28 tirs à 6) avant de céder sur un but de Giovani Versini, servi par Diambou (0-1, 61e) ; Versini est élu homme du match (8,5). Le 27, Brest déroule à Donaufeld (1-5) : Kanté (2e) et Mboup (14e) marquent sur des passes de Joseph Nonge, avant que ce dernier ne s'offre un doublé (20e, sur une passe de Diambou, puis 43e). Holzer réduit l'écart (48e), puis Edjouma, servi par N'Guessan, clôt la marque (60e). Nonge signe un match parfait (10/10). Le jeune Djylian N'Guessan (17 ans), prêté par Saint-Étienne, se fait toutefois une foulure à la cheville (8 jours à 2 semaines d'absence). Enfin, le 30 juillet, Brest s'impose 0-4 à Krems/Getzersdorf : Baldé ouvre le score dès la 2e minute sur une passe de Chotard, Lucas Tousart, homme du match (9,0), s'offre un doublé (77e, puis 80e sur une passe de Doumbia), et Magnetti, servi par Locko, conclut (84e). La pré-saison est pour l'instant parfaite : quatre victoires en quatre matchs, 16 buts marqués et 2 encaissés.",
        matches: [
          { r:"W", tip:"DSV Leoben (E) 1-6",            comp:"AM" },
          { r:"W", tip:"SV Donau (E) 0-1",              comp:"AM" },
          { r:"W", tip:"SR Donaufeld (E) 1-5",          comp:"AM" },
          { r:"W", tip:"SPG Krems/Getzersdorf (E) 0-4", comp:"AM" },
        ],
      },
      {
        key: "08", label: "Août 2026", position: 9,
        note: "Le 1er août, Brest boucle son stage autrichien par une cinquième victoire en cinq matchs amicaux, 4-1 sur la pelouse du FavAC (26 tirs à 5). Kanté ouvre le score sur une passe de Kamory Doumbia (10e), puis Doumbia double lui-même la mise (21e). Un but contre son camp de Le Guen relance le FavAC (37e), mais Diambou, servi par Magnetti (51e), puis Locko, sur une passe de Lala (73e), mettent fin au suspense. Doumbia, déjà homme du match à Leoben, signe cette fois la note parfaite (10/10). Place maintenant à la Ligue 1, avec deux journées au programme en août : à Le Mans le samedi 22, puis la réception de Toulouse le 29. Mauvaise nouvelle à la veille du premier match : le jeune attaquant malien Ibrahim Kanté (19 ans), buteur à deux reprises pendant la pré-saison, se fait une torsion du genou sur une frappe à l'entraînement et sera absent deux à quatre semaines. Le 22 août, pour la 1re journée de Ligue 1 au stade Marie-Marvingt, Brest s'impose au Mans (1-2) en renversant la situation. Mené après le but de Quarshie, servi par Larouci (32e), le club breton égalise juste avant la pause par Pathé Mboup, sur une passe de Locko (45e). Mboup, élu homme du match (8,0), délivre ensuite la passe décisive à Le Guen, qui offre la victoire à la 82e. La victoire coûte cher : victime d'un tacle, Giovani Versini (22 ans) souffre d'une distension des ligaments du genou et sera absent quatre à sept semaines ; Lala a lui aussi été touché pendant la rencontre. Le 29 août, pour la première au stade Francis-Le Blé, Brest tombe face à Toulouse (1-3), porté par un Casper Tengstedt intenable : l'attaquant toulousain ouvre le score dès la 7e minute, double la mise sur une passe de Dønnum (23e) puis signe un triplé à l'heure de jeu sur un service d'Hidalgo (56e). Entre-temps, Baldé, servi par Mboup, avait redonné espoir aux Brestois (37e). Largement dominés (18 tirs à 5, 62 % de possession pour Toulouse), les hommes d'Arq Queft 1er du Nom terminent le mois à la 9e place, avec une victoire et une défaite. Au programme de septembre : au Havre le 5, la réception du PSG le 13, puis un déplacement à Auxerre le 19.",
        matches: [
          { r:"W", tip:"FavAC (E) 1-4",                 comp:"AM" },
          { r:"W", tip:"Le Mans (E) 1-2" },
          { r:"L", tip:"Toulouse FC (D) 1-3" },
        ],
      },
      {
        key: "09", label: "Septembre 2026", position: 17,
        note: "Le mercato d'été se referme sans le moindre mouvement : aucune arrivée, aucun départ, Brest aborde la saison avec l'effectif hérité de l'intersaison. Sur le terrain, septembre tourne au cauchemar. Le 5, au Havre, Edjouma ouvre pourtant le score dès la 9e minute, mais Fofana renverse la situation avant la pause avec un doublé (36e sur une passe d'Ilić, 40e sur un service de Nakamura) : défaite 2-1. Le 13, au stade Francis-Le Blé, le PSG de Luis Enrique fait la différence en première période grâce à un doublé de Fabián (2e, puis 38e sur une passe de Vitinha) ; Lucas Tousart réduit aussitôt l'écart (39e), mais Brest, privé du ballon (27 % de possession), ne reviendra pas (1-2). Le 19, enfin, à Auxerre, Ludovic Ajorque fait son retour de blessure en tant que titulaire, mais Cameron Archer crucifie les Brestois en fin de match, sur des passes d'Ahamada (87e) puis de Namaso (90e+4) : défaite 2-0. Trois revers de rang : après cinq journées, Brest glisse à la 17e place, en zone rouge, avec trois points.",
        matches: [
          { r:"L", tip:"Havre AC (E) 2-1" },
          { r:"L", tip:"PSG (D) 1-2" },
          { r:"L", tip:"AJ Auxerre (E) 2-0" },
        ],
      },
      {
        key: "10", label: "Octobre 2026", position: 11,
        note: "La trêve internationale est mise à profit pour sécuriser trois cadres : le défenseur central Brendan Chardonnet (31 ans) prolonge de trois ans le 3 octobre, jusqu'en juin 2029 ; le lendemain, l'international malien Kamory Doumbia (23 ans) s'engage jusqu'en 2030 ; puis le milieu Lucas Tousart (29 ans) signe à son tour jusqu'en 2029 le 7 octobre. Supporters ravis à chaque fois. Sur le terrain, Brest relève la tête. Le 9, au stade Francis-Le Blé, les Bretons font tomber le leader Angers (2-0) grâce à un doublé de Ludovic Ajorque, servi par Zogbé dès la 5e minute puis par Locko à la 50e ; l'avant-centre, revenu de sa longue blessure, est élu homme du match (8,3). Le 17, à Lille, Brest s'incline au bout d'un match fou (3-2) : après un but contre son camp de Lala (25e), Mboup égalise sur une passe de Lala (48e), Sahraoui redonne l'avantage au LOSC (61e), Chardonnet, servi par Lloris, répond deux minutes plus tard (63e), mais Giroud, sur un service de Mbappé, offre la victoire aux Lillois dans le temps additionnel (90e+4). Le 24, retour au succès à domicile contre Nice (3-1) : Doumbia, sur une passe de Magnetti (10e), puis Ajorque, servi par Lala (11e), frappent coup sur coup ; Mendy réduit l'écart (17e) avant que Baldé, sur une passe de Locko, ne mette les siens à l'abri (37e). Magnetti est élu homme du match (7,9). Le 31, enfin, Brest ramène un point de Lorient (0-0), Lala étant le meilleur sur le terrain (7,4). Bilan du mois : deux victoires, un nul et une défaite, et une remontée de la 17e à la 11e place, à neuf points du podium. Revers à l'infirmerie : Giovani Versini, à peine rétabli, se fait une élongation à un adducteur en match amical face au RC Lens 2 le 25 (8 jours à 2 semaines d'absence), et le milieu Joris Chotard sort touché à Lorient, victime d'une élongation à un mollet (3 semaines à 2 mois d'absence).",
        matches: [
          { r:"W", tip:"Angers SCO (D) 2-0" },
          { r:"L", tip:"LOSC (E) 3-2" },
          { r:"W", tip:"OGC Nice (D) 3-1" },
          { r:"D", tip:"FC Lorient (E) 0-0" },
        ],
      },
      {
        key: "11", label: "Novembre 2026", position: 14,
        note: "Trois journées au programme en novembre : la réception de Lyon le 8, un déplacement à Strasbourg le 22, puis la venue du Paris FC le 28. Le 8, au stade Francis-Le Blé, Brest tire davantage (12 tirs à 7) mais l'OL, plus réaliste et maître du ballon (67 % de possession), s'impose 0-2 : Morton ouvre le score juste avant la pause (45e) et Nuamah, servi par Bidstrup, double la mise dans le temps additionnel (90e+3). Le 22, à la Meinau, les deux équipes livrent un match fou (4-4). Brest mène 3-0 à la pause grâce à Baldé (4e), Magnetti sur une passe de Lala (9e) et Ajorque servi par Baldé (26e). Strasbourg réduit l'écart dès la reprise par Harder (46e), Locko redonne trois buts d'avance aux Bretons sur une passe de Doumbia (48e), mais Reyna, auteur d'un match exceptionnel (9,9), sonne la révolte : il marque à la 64e puis sert Mara à la 68e, avant d'arracher lui-même l'égalisation à la 89e, signant un doublé. Avec huit buts, ce match devient un nouveau record du club en championnat, devant le 3-2 de Lille. Après onze journées, Brest pointe à la 14e place, avec 11 points, à égalité avec Rennes, barragiste. Le 28, enfin, Brest partage les points avec le Paris FC (1-1) : Koleosho, servi par Kebbal, ouvre le score pour les Parisiens (17e), mais Ludovic Ajorque égalise six minutes plus tard sur une passe de Mama Baldé (23e), élu homme du match (7,2). Bilan du mois : une défaite et deux nuls, et une 14e place avec 12 points, un de plus que l'ESTAC, barragiste. Le 30 novembre, le tirage du 9e tour de la Coupe de France envoie Brest chez l'AS Gamaches, pensionnaire d'une division inférieure, le dimanche 20 décembre au stade Serge-Leleu. Ibrahim Kanté, lui, évolue désormais avec la réserve.",
        matches: [
          { r:"L", tip:"OL (D) 0-2" },
          { r:"D", tip:"Strasbourg (E) 4-4" },
          { r:"D", tip:"Paris FC (D) 1-1" },
        ],
      },
      {
        key: "12", label: "Décembre 2026", position: 10,
        note: "Trois matchs au programme avant la trêve : un déplacement à Rennes le samedi 5 décembre, la réception de l'ESTAC le 12, puis l'entrée en lice en Coupe de France, au 9e tour, chez l'AS Gamaches le dimanche 20. Le 5, au Roazhon Park, Brest signe une victoire solide à Rennes (0-2) : Hugo Magnetti, servi par Lala, ouvre le score (18e), puis Kamory Doumbia, sur une passe de Mboup, double la mise juste après la pause (48e). Magnetti est élu homme du match (8,1). Brest remonte à la 10e place avec 15 points, et enfonce un peu plus Rennes, 17e. Coup dur le lendemain pour Giovani Versini : décidément maudit cette saison, l'ailier se blesse une troisième fois, victime d'un tacle appuyé lors d'un match amical face à la réserve du Plougastel FC. Touché au cartilage du genou, il est confié à un spécialiste et sera absent huit à onze semaines. Le 12, au stade Francis-Le Blé, Brest enchaîne une deuxième victoire de rang face à l'ESTAC (2-0) : Bradley Locko, servi par Tousart, ouvre le score juste avant la pause (44e), puis Ludovic Ajorque, après avoir vu son penalty repoussé, reprend lui-même le ballon pour doubler la mise (49e). Locko est élu homme du match (8,1). Avec 18 points, Brest grimpe à la 9e place, à quatre longueurs de l'Europe. Le lendemain, Lucas Tousart écope de son cinquième carton jaune de la saison : le milieu sera suspendu pour un match à compter du 15 décembre. Le 15, Bradley Locko, buteur et homme du match contre l'ESTAC, est retenu dans l'équipe-type de la 14e journée de Ligue 1. Bonne nouvelle le 17 : après sept semaines d'absence, Joris Chotard, remis de son élongation au mollet, reprend l'entraînement complet. Le 20, Brest fait son entrée en Coupe de France au 9e tour, au stade Serge-Leleu, chez l'AS Gamaches, et doit attendre la toute fin du match pour se qualifier (0-1). Sans Tousart, suspendu, les Bretons écrasent la rencontre (28 tirs à 2, 63 % de possession) mais butent longtemps sur Vesperini, avant que Kamory Doumbia, servi par Mama Baldé, ne délivre enfin les siens à la 89e minute. Le jeune Justin Bourgault est élu homme du match (8,4). Brest termine l'année civile à la 10e place, avec 18 points, après trois victoires de rang toutes compétitions confondues. Le 22, le tirage du 10e tour de la Coupe de France envoie de nouveau les Bretons chez un petit poucet : le SR Colmar, pensionnaire de National 2, au Colmar Stadium le samedi 9 janvier 2027. Le 31 décembre, enfin, le prêt de Djylian N'Guessan prend fin : le jeune attaquant de 18 ans rentre à Saint-Étienne après sept apparitions sous le maillot brestois, sans but (6,32 de moyenne).",
        matches: [
          { r:"W", tip:"Rennes (E) 0-2" },
          { r:"W", tip:"ESTAC (D) 2-0" },
          { r:"W", tip:"AS Gamaches (E) 0-1",           comp:"CDF", tag:"9e tour" },
        ],
      },
      {
        key: "01", label: "Janvier 2027", position: 10,
        note: "Janvier s'annonce chargé, avec cinq rendez-vous : la réception de l'OM le samedi 2, le 10e tour de la Coupe de France à Colmar le 9, puis trois journées de Ligue 1, à Monaco le 17, à Lens le 23 et contre Strasbourg à domicile le 30. Le 1er janvier, au vu des bons résultats de la première partie de saison, les dirigeants revoient leurs attentes à la hausse : l'objectif en Ligue 1 n'est plus seulement de s'installer dans l'élite, mais de terminer en milieu de tableau. Le même jour, Bradley Locko voit sa superbe frappe contre l'ESTAC élue but du mois de décembre en Ligue 1, deuxième distinction de la saison pour l'arrière gauche ; il est toutefois actuellement à l'infirmerie, touché par une contracture. Toujours le 1er janvier, Mama Baldé (31 ans), un des meilleurs éléments du club selon les supporters, prolonge de deux ans, jusqu'en juin 2029. Le 2, au stade Francis-Le Blé, l'année commence mal : sans tir cadré, Brest s'incline face à l'OM (0-1) sur un but de Højbjerg, servi par Emerson à la 75e. La série de trois victoires prend fin, et Brest recule à la 12e place. Le lendemain, Joris Chotard (25 ans), tout juste rétabli, s'engage sur le long terme : le milieu prolonge de quatre ans, jusqu'en juin 2031, à la grande satisfaction des supporters. Le 9, au Colmar Stadium, Brest passe sans trembler le 10e tour de la Coupe de France (0-3). Après une première période sans but, le jeune Jaden Choisy, lancé depuis les U19, ouvre le score sur une passe d'Edjouma (63e), Ajorque double la mise, servi par Locko (70e), puis Magnetti, à nouveau sur un service d'Edjouma, conclut (85e). À 16 ans et 235 jours, Choisy devient à la fois le plus jeune joueur et le plus jeune buteur de l'histoire du club, et bat les deux records de précocité de la Coupe de France. Auteur de deux passes décisives, Noah Edjouma est élu homme du match (8,2). Revers à l'issue de la rencontre : Brendan Chardonnet reçoit son cinquième carton jaune de la saison et sera suspendu pour le déplacement à Monaco, le 17 janvier. Le lendemain, le tirage au sort du 11e tour, les huitièmes de finale, offre une affiche : Brest recevra l'AS Saint-Étienne (Ligue 2), le club d'où était prêté Djylian N'Guessan, au stade Francis-Le Blé le mercredi 3 février. Le 17, privé de Chardonnet, suspendu, Brest s'incline au stade Louis-II face à l'AS Monaco (2-0). Ansu Fati ouvre le score dès la 21e minute sur un service de Minamino, et Abline, servi par Belmokhtar, scelle le sort du match à la 88e. Dominés (38 % de possession) et sans la moindre occasion franche, les Brestois ne cadrent que trois tirs ; Ansu Fati est élu homme du match (7,6). Brest reste 12e après la 16e journée. Six jours plus tard, au stade Bollaert-Delelis, Brest ramène un point de Lens (0-0). Chardonnet de retour et Locko remis de sa contracture, la défense tient bon ; les Brestois, moins souvent en possession du ballon (44 %), cadrent pourtant davantage (cinq tirs contre trois) et se procurent la seule occasion franche de la rencontre, mais Risser reste invaincu. Le défenseur lensois Jean-Clair Todibo est élu homme du match (7,3), Selvik est le meilleur Brestois (7,2). Avec ce point, Brest conserve sa 12e place (19 points). Le 27, le tirage des quarts de finale de la Coupe de France est effectué avant même les huitièmes : en cas de qualification contre Saint-Étienne, Brest affrontera le vainqueur de FC Lorient - RC Lens. Le 30, au stade Francis-Le Blé, Brest renoue enfin avec la victoire en Ligue 1 face à Strasbourg (2-1). Ludovic Ajorque ouvre le score sur un service de Chardonnet (26e). Godo égalise sur penalty à la 75e, mais Luck Zogbé délivre le public brestois à la 89e et offre les trois points aux siens ; le latéral ivoirien est élu homme du match (7,5). Avec six tirs cadrés sur huit, les Brestois ont été plus réalistes que des Strasbourgeois davantage en possession (54 %). Seule ombre au tableau : Joris Chotard se blesse sur une accélération, victime d'une élongation des ischio-jambiers (9 jours à 2 semaines d'absence), et devrait manquer le huitième de finale de Coupe de France contre Saint-Étienne. Grâce à ce succès, Brest termine le mois à la 10e place (22 points), en remontant de deux rangs. Bilan de janvier en Ligue 1 : une victoire, un nul et deux défaites, et une qualification en Coupe de France.",
        matches: [
          { r:"L", tip:"OM (D) 0-1" },
          { r:"W", tip:"SR Colmar (E) 0-3",             comp:"CDF", tag:"10e tour" },
          { r:"L", tip:"AS Monaco (E) 2-0" },
          { r:"D", tip:"RC Lens (E) 0-0" },
          { r:"W", tip:"Strasbourg (D) 2-1" },
        ],
      },
      {
        key: "02", label: "Février 2027", position: 14,
        note: "Février s'ouvre sur le huitième de finale de la Coupe de France : Brest reçoit l'AS Saint-Étienne (Ligue 2) au stade Francis-Le Blé le mercredi 3, avec un quart de finale contre Lorient ou Lens à la clé, mais sans Joris Chotard, blessé. Suivent quatre journées de Ligue 1 : un déplacement à Nice le samedi 6, la réception de Rennes le vendredi 12 pour le derby breton, puis un déplacement chez le PSG le dimanche 21, avant de recevoir le leader, l'AS Monaco, le samedi 27. Le 1er février, Brest se renforce en défense centrale : l'Espagnol Manu Hernando (28 ans) arrive en prêt du Racing Santander jusqu'à la fin de la saison, avec une option d'achat de 575 000 €. Dirigeants comme supporters saluent l'opération. Le 3, au stade Francis-Le Blé et sous un vent violent, Brest se qualifie pour les quarts de finale de la Coupe de France en battant Saint-Étienne (2-0). Le latéral Luck Zogbé est encore décisif : il sert Noah Edjouma pour l'ouverture du score (14e), puis Joseph Nonge pour le break (34e). Les Brestois dominent la rencontre (19 tirs à 12, sept cadrés contre deux) et Selvik garde sa cage inviolée. Pour sa première apparition, Manu Hernando se montre solide en défense centrale (7,6). Avec ses deux passes décisives, Zogbé est élu homme du match (8,7). Lorient ayant éliminé Lens, le quart de finale sera un derby breton : Brest se déplacera au stade du Moustoir le mercredi 3 mars. Bonne nouvelle le 6 : Giovani Versini, blessé au cartilage du genou depuis décembre, termine sa rééducation et reprend l'entraînement complet ; encore loin de sa meilleure condition, il devra toutefois être ménagé. Le soir même, à l'Allianz Riviera, Brest arrache un point à Nice (1-1). Mama Baldé ouvre le score sur un service de Pathé Mboup (23e), mais Jansson, servi par Boudaoui, égalise à la 84e. Les Niçois ont multiplié les tirs (18 à 11, dix cadrés), mais Selvik a tenu bon, et c'est Brest qui s'est procuré le plus d'occasions franches (deux contre une). Mboup, passeur décisif, est élu homme du match (8,1), mais il paie cher son match : victime d'un tacle appuyé, il souffre d'une élongation à un adducteur (7 jours à 2 semaines d'absence) et devrait manquer le derby contre Rennes. Dépassé au classement par l'OL, l'OM et Rennes, Brest recule à la 13e place (23 points) après la 19e journée. Le 10, le tirage des demi-finales de la Coupe de France est effectué : en cas de victoire à Lorient, Brest affrontera le vainqueur de Strasbourg - Reims ; l'autre demi-finale opposera le vainqueur de Pau FC - AS Monaco à celui de PSG - AJ Auxerre. Le 12, le derby breton tourne mal au stade Francis-Le Blé : privé de Mboup, Brest s'incline face à Rennes (1-2). Thomasson, servi par Merlin, ouvre le score dès la 7e minute, et les Rennais confisquent le ballon (60 % de possession). Ludovic Ajorque égalise enfin à la 74e, servi par Luck Zogbé, mais Lepaul, sur une passe de Szymański, offre la victoire aux visiteurs à la 87e ; l'attaquant rennais est élu homme du match (7,5). Brest reste 13e (23 points) après la 20e journée. Coup dur le 18 : Brendan Chardonnet, pilier de la défense centrale, se blesse à la hanche à l'entraînement après une collision avec un coéquipier. Confié à un spécialiste, il sera absent deux à trois mois. L'arrivée de Manu Hernando prend tout son sens. Le 21, le déplacement au Parc des Princes vire à la correction : Brest s'incline lourdement face au PSG (6-1). Fabián, servi par Désiré Doué, ouvre le score dès la 2e minute, puis double la mise sur une passe de Ferran Torres (52e). Hugo Magnetti, sur un service de Noah Edjouma, réduit l'écart (58e), mais les Parisiens déroulent ensuite : Akliouche, sur une passe de Vitinha (66e), Ferran Torres, servi par Doué (68e), Doué lui-même, sur un service de Perrone (71e), puis à nouveau Akliouche, servi par Torres (87e), alourdissent la marque. Auteur d'un but et de deux passes décisives, Ferran Torres est élu homme du match (9,7). Le 27, au stade Francis-Le Blé, le leader monégasque frappe d'entrée : Minamino, servi par Balogun, ouvre le score dès la 4e minute, puis Balogun, sur une passe de Vanderson, double la mise (27e). Dominés (33 % de possession, 2,58 xG contre 0,95), les Brestois ne réduisent l'écart qu'au bout du temps additionnel par Joseph Nonge, servi par Edjouma (90e+2) ; Balogun est élu homme du match (8,5). Février se termine sans la moindre victoire en Ligue 1 (un nul et trois défaites), et Brest glisse à la 14e place (23 points), à cinq points de la zone de barrage. Seule éclaircie du mois : la qualification pour les quarts de finale de la Coupe de France.",
        matches: [
          { r:"W", tip:"AS Saint-Étienne (D) 2-0",      comp:"CDF", tag:"11e tour (huitièmes)" },
          { r:"D", tip:"OGC Nice (E) 1-1" },
          { r:"L", tip:"Rennes (D) 1-2" },
          { r:"L", tip:"PSG (E) 6-1" },
          { r:"L", tip:"AS Monaco (D) 1-2" },
        ],
      },
      {
        key: "03", label: "Mars 2027", position: 14,
        note: "Le 3 mars, au stade du Moustoir, l'aventure en Coupe de France s'arrête en quart de finale : dans un derby breton serré, Brest s'incline face à Lorient (1-0). Les Merlus confisquent le ballon (68 % de possession) sans se montrer dangereux, mais Ibrahima Baldé, servi par Théo Le Bris, fait la différence à la 79e ; Le Bris est élu homme du match (7,9). Le 7, Brest réagit en Ligue 1 au stade Jean-Bouin face au Paris FC (1-2). Ludovic Ajorque, servi par Mama Baldé, ouvre le score après 39 secondes de jeu : c'est le but le plus rapide de l'histoire du club. Ikoné égalise à la 61e, mais Noah Edjouma, sur un service de Bradley Locko, offre la victoire aux siens dans le temps additionnel (90e+4). Mama Baldé est élu homme du match (7,9). Brest renoue avec la victoire en championnat, une première depuis le 30 janvier, mais perd Hugo Magnetti, touché aux ligaments du genou (5 à 8 semaines d'absence). Le 13, au stade Francis-Le Blé, Ajorque ouvre encore le score face à Lille, sur une passe de Locko (12e), mais Olivier Giroud renverse la rencontre avant la pause, servi par Ethan Mbappé (26e) puis par Bakwa (44e) ; Brest s'incline (1-2) malgré neuf tirs cadrés, et Giroud est élu homme du match (8,7). Le soir même, la presse évoque un entraîneur de plus en plus sous pression : les résultats sont jugés en deçà des attentes, et les dirigeants étudieraient discrètement d'autres options. Luck Zogbé est tout de même nommé dans l'équipe-type de la 24e journée. Le 21, au Stadium de Toulouse, Brest ramène un bon point face au deuxième du championnat (1-1) : Hidalgo, servi par Mário Rui, ouvre le score (71e), mais Mama Baldé égalise six minutes plus tard sur une passe de Pathé Mboup (77e). Les Brestois se sont procuré le plus d'occasions (2,41 xG contre 0,82), et Mboup est élu homme du match (7,6). Brest termine le mois à la 14e place (27 points), trois points devant Le Havre, barragiste, loin de l'objectif du milieu de tableau fixé par les dirigeants.",
        matches: [
          { r:"L", tip:"FC Lorient (E) 1-0",            comp:"CDF", tag:"Quarts de finale" },
          { r:"W", tip:"Paris FC (E) 1-2" },
          { r:"L", tip:"LOSC (D) 1-2" },
          { r:"D", tip:"Toulouse FC (E) 1-1" },
        ],
      },
      {
        key: "04", label: "Avril 2027", position: 13,
        note: "Avril propose quatre journées de Ligue 1 : la réception de Lorient le vendredi 2, un déplacement à Marseille le dimanche 11, la venue du Mans le samedi 17, puis un déplacement à Lyon le samedi 24. Le 2, au stade Francis-Le Blé, Brest prend sa revanche sur Lorient, un mois après l'élimination en Coupe de France (3-1). Gautier Lloris ouvre le score sur un service de Pathé Mboup (17e), Lucas Tousart double la mise sur une passe de Joris Chotard (61e), puis Kamory Doumbia, de nouveau servi par Mboup, alourdit la marque (65e) ; Tosin réduit l'écart à la 79e. Avec deux passes décisives, Mboup est élu homme du match (7,8). La victoire coûte toutefois cher : Joris Chotard se fait une élongation à un mollet (3 semaines à 2 mois d'absence) et Ludovic Ajorque une élongation à un adducteur (9 jours à 3 semaines). Le 4, le jeune attaquant Mathis Lainé (20 ans), auteur de 17 buts en National 2 avec la réserve, prolonge jusqu'en 2030, à la grande satisfaction des supporters. Le 8, onze jeunes à l'essai signent leur premier contrat au centre de formation et rejoignent les U19 : Yacouba Kamissoko, Pape Gueye, Simone De Martino, Quentin Bourda, Kevin Braun, Lenny Dan, Alexis Boubee, Cedric Bayiha, Gérald Kanté, Franck Guillerm et Layvin Granet, tous Français et âgés de 15 ou 16 ans. Le 11, à l'Orange Vélodrome, Pathé Mboup ouvre le score (16e), mais l'OM renverse la rencontre : Højbjerg égalise à la 22e, puis Gouiri donne l'avantage aux Marseillais dès la reprise (46e), à chaque fois sur une passe de Timothy Weah, élu homme du match (8,1). Brest s'incline (2-1) malgré quatorze tirs. Le 17, sous un vent de tempête, Brest bat Le Mans à domicile (1-0) grâce à Mama Baldé, servi par Joseph Nonge juste avant la pause (43e) ; Nonge est élu homme du match (7,6), et Brest remonte à la 13e place. Le 20, le jeune Pape Gueye (16 ans), milieu des U19 arrivé au début du mois, signe son premier contrat professionnel, jusqu'en 2030. Le 22, Hugo Magnetti, remis de sa distension des ligaments du genou, reprend l'entraînement complet. Le 24, au Groupama Stadium, Brest signe sa plus belle performance de la saison face à l'OL (0-3) : Pathé Mboup ouvre le score sur une passe de Kamory Doumbia (13e), Ludovic Ajorque, de retour de blessure, double la mise sur un service de Mama Baldé (43e), puis Doumbia, servi par Mboup, scelle le succès dès la reprise (46e). Doumbia est élu homme du match (8,1), et Selvik garde sa cage inviolée face aux dix tirs cadrés lyonnais. Coup dur en fin de match : Mama Baldé se casse la cheville et sera absent deux à trois mois. Dans la foulée, Selvik, Manu Hernando, Mama Baldé et Kamory Doumbia sont nommés dans l'équipe-type de la 29e journée, et la presse rapporte que la pression est retombée : convaincus par la série en cours, les dirigeants soutiennent pleinement leur entraîneur. Avec trois victoires en quatre matchs, Brest termine le mois à la 13e place (36 points), onze points devant Le Mans, barragiste, et à cinq points de la 6e place, toujours en deçà de l'objectif du milieu de tableau mais sur une bonne dynamique.",
        matches: [
          { r:"W", tip:"FC Lorient (D) 3-1" },
          { r:"L", tip:"OM (E) 2-1" },
          { r:"W", tip:"Le Mans (D) 1-0" },
          { r:"W", tip:"OL (E) 0-3" },
        ],
      },
      {
        key: "05", label: "Mai 2027", position: 9,
        note: "Mai, dernier mois de la saison, propose cinq journées de Ligue 1 : un déplacement à Troyes le dimanche 2, la réception d'Auxerre le 9 et du Havre le 16, un déplacement à Angers le samedi 22, puis la venue de Lens le samedi 29 pour la dernière journée. Le 2, au stade de l'Aube, l'ESTAC ouvre le score dès la 8e minute par Dermane Karim, servi par Boura, mais Lucas Tousart égalise sur une passe de Noah Edjouma (37e) avant que Ludovic Ajorque, servi par Giovani Versini, n'offre la victoire aux siens dans le temps additionnel (1-2, 90e+3) ; Karim est élu homme du match (7,4). Le 4, Brendan Chardonnet, remis de sa blessure à la hanche, reprend l'entraînement complet. Le 9, au stade Francis-Le Blé, Brest écrase Auxerre (4-1) : Ajorque ouvre le score sur une passe de Justin Bourgault (74e), Archer égalise aussitôt (75e), puis Versini, servi par Luck Zogbé (85e), Ajorque, sur un service de Versini (90e), et Joseph Nonge, de nouveau servi par Zogbé (90e+4), font la différence en fin de match. Auteur de deux passes décisives, Zogbé est élu homme du match (9,0). Grâce à ce quatrième succès consécutif, Brest grimpe à la 8e place. Les 14 et 15, deux jeunes des U19 signent leur premier contrat professionnel, jusqu'en 2030 : le milieu Simone De Martino et le défenseur Franck Guillerm, tous deux âgés de 16 ans. Le 15, Mamady Diambou met fin aux rumeurs de départ en prolongeant de deux ans, jusqu'en juin 2029. À la mi-mai, la Coupe de France rend son verdict : l'AS Monaco la remporte en finale face à Lorient, le club qui avait éliminé Brest en quart de finale. Le 16, la série s'arrête face au Havre (0-1) : Junior Mwanga, servi par Ilić, inscrit le seul but de la rencontre (25e) et est élu homme du match (8,3). Le 19, Joris Chotard reprend l'entraînement après sept semaines d'absence. Le 22, au stade Raymond-Kopa, Brest ramène un point d'Angers (0-0) ; dominés (38 % de possession, 1,41 xG contre 0,30), les Brestois doivent beaucoup à Egil Selvik, élu homme du match (7,3). Le 29, pour la dernière journée, Brest bat Lens au stade Francis-Le Blé (2-1) : Gautier Lloris (11e) puis Noah Edjouma (62e) marquent, tous deux sur des passes de Kenny Lala, élu homme du match (8,1), avant que Ganiou ne réduise l'écart (75e). Le jeune Jaden Choisy, 17 ans, est titularisé en pointe, tandis que Brendan Chardonnet dispute son 277e match de championnat sous le maillot brestois, un record pour le club : il dépasse Bruno Grougi (276). Brest termine la saison à la 9e place avec 46 points, dans la première moitié du tableau : l'objectif du milieu de tableau fixé par les dirigeants est atteint. Au lendemain de la saison, le club salue plusieurs records individuels : Ludovic Ajorque (15 buts) et Pathé Mboup (8 passes décisives, 4 titres d'homme du match) signent les meilleures saisons de l'histoire du club dans leur domaine, et Egil Selvik établit un nouveau record avec 9 matchs sans encaisser de but. Bradley Locko signe la meilleure note moyenne de l'histoire du club sur une saison (7,01 en 36 matchs), et le public du stade Francis-Le Blé bat lui aussi un record, avec une affluence moyenne de 14 210 spectateurs, contre 13 549 en 2010. Kenny Lala, lui, est nommé dans l'équipe-type de la dernière journée.",
        matches: [
          { r:"W", tip:"ESTAC (E) 1-2" },
          { r:"W", tip:"AJ Auxerre (D) 4-1" },
          { r:"L", tip:"Havre AC (D) 0-1" },
          { r:"D", tip:"Angers SCO (E) 0-0" },
          { r:"W", tip:"RC Lens (D) 2-1" },
        ],
      },
    ],

    // Stats finales (34 journées de Ligue 1 + 4 matchs de Coupe de France, toutes compétitions)
    scorers: [
      { name: "Ludovic Ajorque",       detail: "BU · Français · 33 ans",          value: 15 },
      { name: "Mama Baldé",            detail: "MOD · Bissau-Guinéen · 31 ans",   value: 6 },
      { name: "Kamory Doumbia",        detail: "MC · Malien · 24 ans",            value: 5 },
    ],
    assists: [
      { name: "Pathé Mboup",           detail: "MOG · Sénégalais · 23 ans",       value: 8 },
      { name: "Zogbé · Lala · Locko",  detail: "3 joueurs à égalité",             value: 6 },
      { name: "N. Edjouma · M. Baldé", detail: "MOD / MOD · ex-aequo",            value: 5 },
    ],
    // Meilleures et pires moyennes : au moins 17 matchs joués (la moitié de la saison)
    ratings: [
      { name: "Luck Zogbé",            detail: "DD · Ivoirien · 24 ans · 4 tit. / 33 rempl. · 1 but · 6 passes D.", value: 7.13 },
      { name: "Justin Bourgault",      detail: "DG · Français · 21 ans · 5 tit. / 19 rempl. · 1 passe D.",         value: 7.09 },
      { name: "B. Locko · K. Doumbia", detail: "DG / MC · ex-aequo",                                                value: 7.01 },
    ],
    flops: [
      { name: "G. Lloris · J. Chotard", detail: "DC / MC · ex-aequo",                                               value: 6.73 },
      { name: "Selvik · Diambou · Ajorque", detail: "3 joueurs à égalité",                                          value: 6.76 },
      { name: "Lucas Tousart",         detail: "MD · Français · 30 ans · 28 tit. / 6 rempl. · 3 buts · 1 passe D.", value: 6.80 },
    ],
    // Mercato
    transfers:  [
      { type: "loan", name: "Manu Hernando", from: "Prêt du Racing Santander jusqu'à la fin de la saison, avec option d'achat de 575 000 € (DC · Espagnol · 28 ans)", date: "Févr. 2027" },
    ],
    departures: [
      { type: "loan", name: "Djylian N'Guessan",  to: "Fin de prêt, retour à Saint-Étienne (BU · Français · 18 ans)", date: "Déc. 2026" },
    ],
    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "9e tour", score: "0 – 1", opponent: "AS Gamaches (E)" },
        { result: "W", round: "10e tour", score: "0 – 3", opponent: "SR Colmar (E)" },
        { result: "W", round: "11e tour (huitièmes)", score: "2 – 0", opponent: "AS Saint-Étienne (D)" },
        { result: "L", round: "Quarts de finale", score: "1 – 0", opponent: "FC Lorient (E)" },
      ],
    },
    standingsTitle: "Classement final",
    standings: [
      { pos:1,  team:"PSG",            j:34, g:24, n:3, l:7, bp:79, bc:31, db:48, pts:75, zone:"ucl", champion:true },
      { pos:2,  team:"Toulouse FC",    j:34, g:17, n:15, l:2, bp:54, bc:29, db:25, pts:66, zone:"ucl" },
      { pos:3,  team:"AS Monaco",      j:34, g:18, n:7, l:9, bp:62, bc:40, db:22, pts:61, zone:"ucl" },
      { pos:4,  team:"LOSC",           j:34, g:15, n:10, l:9, bp:50, bc:36, db:14, pts:55, zone:"ucl" },
      { pos:5,  team:"OM",             j:34, g:14, n:10, l:10, bp:42, bc:36, db:6, pts:52, zone:"uel" },
      { pos:6,  team:"Rennes",         j:34, g:14, n:7, l:13, bp:48, bc:44, db:4, pts:49, zone:"uel" },
      { pos:7,  team:"FC Lorient",     j:34, g:12, n:12, l:10, bp:25, bc:26, db:-1, pts:48, zone:"uecl" },
      { pos:8,  team:"AJ Auxerre",     j:34, g:12, n:11, l:11, bp:45, bc:46, db:-1, pts:47 },
      { pos:9,  team:"Brest",          j:34, g:13, n:7, l:14, bp:47, bc:47, db:0, pts:46, highlight:true },
      { pos:10, team:"RC Lens",        j:34, g:12, n:8, l:14, bp:39, bc:43, db:-4, pts:44 },
      { pos:11, team:"OGC Nice",       j:34, g:11, n:11, l:12, bp:37, bc:44, db:-7, pts:44 },
      { pos:12, team:"OL",             j:34, g:10, n:11, l:13, bp:37, bc:45, db:-8, pts:41 },
      { pos:13, team:"Paris FC",       j:34, g:9, n:13, l:12, bp:42, bc:42, db:0, pts:40 },
      { pos:14, team:"Strasbourg",     j:34, g:9, n:12, l:13, bp:38, bc:49, db:-11, pts:39 },
      { pos:15, team:"Angers SCO",     j:34, g:10, n:9, l:15, bp:37, bc:50, db:-13, pts:39 },
      { pos:16, team:"Havre AC",       j:34, g:9, n:5, l:20, bp:25, bc:46, db:-21, pts:32, zone:"releg-playoff" },
      { pos:17, team:"Le Mans",        j:34, g:7, n:9, l:18, bp:30, bc:49, db:-19, pts:30, zone:"releg" },
      { pos:18, team:"ESTAC",          j:34, g:7, n:6, l:21, bp:24, bc:58, db:-34, pts:27, zone:"releg" },
    ],
    // Effectif en fin de saison (29 mai 2027), avec Jaden Choisy, intégré au groupe pro
    squad: [
      { n:"Mathieu Patouillet",    p:"GB",   nat:"FRA", age:23 },
      { n:"Egil Selvik",           p:"GB",   nat:"NOR", age:29 },
      { n:"Luck Zogbé",            p:"DD",   nat:"CIV", age:24 },
      { n:"Kenny Lala",            p:"DD",   nat:"MTQ", age:35 },
      { n:"Bradley Locko",         p:"DG",   nat:"FRA", age:25 },
      { n:"Justin Bourgault",      p:"DG",   nat:"FRA", age:21 },
      { n:"Gautier Lloris",        p:"DC",   nat:"FRA", age:31 },
      { n:"Brendan Chardonnet",    p:"DC",   nat:"FRA", age:32 },
      { n:"Raphaël Le Guen",       p:"DC",   nat:"FRA", age:20 },
      { n:"Manu Hernando",         p:"DC",   nat:"ESP", age:28 },
      { n:"Mamady Diambou",        p:"MD",   nat:"MLI", age:24 },
      { n:"Lucas Tousart",         p:"MD",   nat:"FRA", age:30 },
      { n:"Hugo Magnetti",         p:"MD",   nat:"FRA", age:28 },
      { n:"Kamory Doumbia",        p:"MC",   nat:"MLI", age:24 },
      { n:"Joris Chotard",         p:"MC",   nat:"FRA", age:25 },
      { n:"Joseph Nonge",          p:"MC",   nat:"BEL", age:22 },
      { n:"Mama Baldé",            p:"MOD",  nat:"GNB", age:31 },
      { n:"Giovani Versini",       p:"MOD",  nat:"FRA", age:23 },
      { n:"Noah Edjouma",          p:"MOD",  nat:"FRA", age:21 },
      { n:"Pathé Mboup",           p:"MOG",  nat:"SEN", age:23 },
      { n:"Jaden Choisy",          p:"MOD",  nat:"FRA", age:17 },
      { n:"Ludovic Ajorque",       p:"BU",   nat:"FRA", age:33 },
    ],

    awards: [
      { label:"Équipe-type de la semaine", winner:"Bradley Locko", period:"14e journée", detail:"Ligue 1 · arrière gauche · 1 but contre l'ESTAC (2-0), note de 8,1" },
      { label:"But du mois", winner:"Bradley Locko", period:"Décembre 2026", detail:"Ligue 1 · superbe frappe contre l'ESTAC (2-0), le 12 décembre" },
      { label:"Équipe-type de la semaine", winner:"Luck Zogbé", period:"24e journée", detail:"Ligue 1 · latéral droit, note de 7,3" },
      { label:"Équipe-type de la semaine", winner:"L. Zogbé · K. Doumbia", period:"4e et 5e journées (2027/28)", detail:"Ligue 1 · après la victoire contre Angers (2-0) et le nul contre Toulouse (1-1)" },
      { label:"Équipe-type de la semaine", winner:"Kenny Lala", period:"34e journée", detail:"Ligue 1 · latéral droit, deux passes décisives contre Lens (2-1), note de 8,1" },
      { label:"Équipe-type de la semaine", winner:"Selvik · Hernando · M. Baldé · Doumbia", period:"29e journée", detail:"Ligue 1 · quatre Brestois après la victoire à Lyon (0-3)" },
    ],

    records: [
      { key:"buts-match-l1", label:"Buts dans un match de championnat", value:"8", detail:"4-4 à Strasbourg (Ligue 1) · ancien record : 3-2 à Lille le 17 octobre 2026", date:"22 nov. 2026" },
      { key:"plus-jeune-joueur", label:"Plus jeune joueur à disputer un match", value:"16 ans et 235 jours", detail:"Jaden Choisy · à Colmar (Coupe de France, 10e tour) · ancien record : Lenny Pintor, 17 ans et 132 jours face à Quevilly-Rouen · également record de la Coupe de France (Axel Koukaba, 16 ans et 322 jours avec Guingamp)", date:"9 janv. 2027" },
      { key:"plus-jeune-buteur", label:"Plus jeune buteur", value:"16 ans et 235 jours", detail:"Jaden Choisy · à Colmar (Coupe de France, 10e tour) · également record de la Coupe de France (Mezian Mesloub, 17 ans et 42 jours avec Metz)", date:"9 janv. 2027" },
      { key:"matchs-championnat", label:"Matchs de championnat joués", value:"277", detail:"Brendan Chardonnet · ancien record : Bruno Grougi, 276 matchs", date:"29 mai 2027" },
      { key:"affluence-moyenne", label:"Affluence moyenne", value:"14 210", detail:"Stade Francis-Le Blé · ancien record : 13 549 spectateurs en 2010", date:"Saison 2026/27" },
      { key:"note-moyenne-saison", label:"Meilleure note moyenne sur une saison", value:"7,01", detail:"Bradley Locko · 36 matchs", date:"Saison 2026/27" },
      { key:"buts-saison", label:"Buts sur une saison", value:"15", detail:"Ludovic Ajorque · toutes compétitions", date:"Saison 2026/27" },
      { key:"passes-saison", label:"Passes décisives sur une saison", value:"8", detail:"Pathé Mboup · toutes compétitions", date:"Saison 2026/27" },
      { key:"hdm-saison", label:"Titres d'homme du match sur une saison", value:"4", detail:"Pathé Mboup", date:"Saison 2026/27" },
      { key:"clean-sheets-saison", label:"Matchs sans encaisser de but sur une saison", value:"9", detail:"Egil Selvik", date:"Saison 2026/27" },
      { key:"but-plus-rapide", label:"But le plus rapide", value:"39 s", detail:"Ludovic Ajorque · au Paris FC (Ligue 1, victoire 1-2)", date:"7 mars 2027" },
    ],

    splash: {
      eyebrow:  "2026/27 · Stade Brestois 29 · Saison 1",
      lines:    ["NEUVIÈMES.", "OBJECTIF ATTEINT."],
      sub:      "Ligue 1 · 9e · 46 pts · Quarts de finale de la Coupe de France",
      tagline:  "Pour sa première saison, Arq Queft 1er du Nom a vite installé Brest en Ligue 1, au point que les dirigeants ont relevé l'objectif en janvier : finir en milieu de tableau. Après un hiver difficile et une pression grandissante en mars, sept victoires lors des douze dernières journées ont ramené les Brestois dans la première moitié du classement. 9e avec 46 points, un quart de finale de Coupe de France, et Ludovic Ajorque meilleur buteur avec 15 buts : l'objectif est atteint.",
    },
  },
]
