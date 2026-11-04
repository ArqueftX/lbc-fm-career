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

  /* ─── SAISON 2026/27 · EN COURS ──────────────────────── */
  {
    id:           "brest-2026-27",
    year:         "2026/27",
    league:       "Ligue 1",
    status:       "en_cours",
    totalTeams:   18,
    seasonLength: 34,
    lastUpdate:   "Janvier 2027 · J15",
    position:     12,
    compNames:    { CDF: "Coupe de France" },
    objective:    "Terminer en milieu de tableau en Ligue 1",

    months: [
      {
        key: "07", label: "Juillet 2026 · pré-saison",
        note: "Arq Queft 1er du Nom prend les commandes du Stade Brestois 29 pour sa première saison sur Football Manager 27. Les dirigeants fixent le cap : faire de Brest une équipe installée durablement en Ligue 1 et se montrer compétitif en Coupe de France, tout en formant des jeunes grâce au centre de formation du club ; ils reconnaissent qu'il est encore trop tôt pour juger le travail du nouvel entraîneur. Le 22 juillet, en Autriche, le premier match amical tourne à la démonstration au Stadion Leoben : Brest écrase le DSV Leoben 6-1 (28 tirs à 4, 64 % de possession). Magnetti ouvre le score sur une passe de Baldé (14e), Chotard double la mise (21e), puis, après la réduction du score de Sturm (35e), Lala (41e), Kamory Doumbia sur une passe de Versini (58e), Diambou servi par Zogbé (60e) et Nonge sur une passe de Le Guen (80e) complètent la marque. Doumbia est élu homme du match (8,1). Seule ombre au tableau : Ludovic Ajorque se blesse de manière anodine et souffre d'une rupture du tendon rotulien ; l'avant-centre de 32 ans, confié à un spécialiste, sera absent six semaines à deux mois. Le stage autrichien se poursuit avec trois nouvelles victoires. Le 25 juillet, le SV Donau résiste longtemps (28 tirs à 6) avant de céder sur un but de Giovani Versini, servi par Diambou (0-1, 61e) ; Versini est élu homme du match (8,5). Le 27, Brest déroule à Donaufeld (1-5) : Kanté (2e) et Mboup (14e) marquent sur des passes de Joseph Nonge, avant que ce dernier ne s'offre un doublé (20e, sur une passe de Diambou, puis 43e). Holzer réduit l'écart (48e), puis Edjouma, servi par N'Guessan, clôt la marque (60e). Nonge signe un match parfait (10/10). Le jeune Djylian N'Guessan (17 ans), prêté par Saint-Étienne, se fait toutefois une foulure à la cheville (8 jours à 2 semaines d'absence). Enfin, le 30 juillet, Brest s'impose 0-4 à Krems/Getzersdorf : Baldé ouvre le score dès la 2e minute sur une passe de Chotard, Lucas Tousart, homme du match (9,0), s'offre un doublé (77e, puis 80e sur une passe de Doumbia), et Magnetti, servi par Locko, conclut (84e). La pré-saison est pour l'instant parfaite : quatre victoires en quatre matchs, 16 buts marqués et 2 encaissés.",
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
        key: "01", label: "Janvier 2027",
        note: "Janvier s'annonce chargé, avec cinq rendez-vous : la réception de l'OM le samedi 2, le 10e tour de la Coupe de France à Colmar le 9, puis trois journées de Ligue 1, à Monaco le 17, à Lens le 23 et contre Strasbourg à domicile le 30. Le 1er janvier, au vu des bons résultats de la première partie de saison, les dirigeants revoient leurs attentes à la hausse : l'objectif en Ligue 1 n'est plus seulement de s'installer dans l'élite, mais de terminer en milieu de tableau. Le même jour, Bradley Locko voit sa superbe frappe contre l'ESTAC élue but du mois de décembre en Ligue 1, deuxième distinction de la saison pour l'arrière gauche ; il est toutefois actuellement à l'infirmerie, touché par une contracture. Toujours le 1er janvier, Mama Baldé (31 ans), un des meilleurs éléments du club selon les supporters, prolonge de deux ans, jusqu'en juin 2029. Le 2, au stade Francis-Le Blé, l'année commence mal : sans tir cadré, Brest s'incline face à l'OM (0-1) sur un but de Højbjerg, servi par Emerson à la 75e. La série de trois victoires prend fin, et Brest recule à la 12e place. Le lendemain, Joris Chotard (25 ans), tout juste rétabli, s'engage sur le long terme : le milieu prolonge de quatre ans, jusqu'en juin 2031, à la grande satisfaction des supporters. Le 9, au Colmar Stadium, Brest passe sans trembler le 10e tour de la Coupe de France (0-3). Après une première période sans but, Choisy ouvre le score sur une passe d'Edjouma (63e), Ajorque double la mise, servi par Locko (70e), puis Magnetti, à nouveau sur un service d'Edjouma, conclut (85e). Auteur de deux passes décisives, Noah Edjouma est élu homme du match (8,2).",
        matches: [
          { r:"L", tip:"OM (D) 0-1" },
          { r:"W", tip:"SR Colmar (E) 0-3",             comp:"CDF", tag:"10e tour" },
        ],
      },
    ],

    // Stats au 20 décembre 2026 (14 journées de Ligue 1 + 1 match de Coupe de France, toutes compétitions)
    scorers: [
      { name: "Ludovic Ajorque",       detail: "BU · Français · 32 ans",          value: 6 },
      { name: "K. Doumbia · M. Baldé", detail: "MC / MOD · ex-aequo",             value: 3 },
      { name: "Magnetti · Locko · Mboup", detail: "3 joueurs à égalité",          value: 2 },
    ],
    assists: [
      { name: "Kenny Lala",            detail: "DD · Martiniquais · 35 ans",      value: 4 },
      { name: "Baldé · Locko · Mboup", detail: "3 joueurs à égalité",             value: 3 },
    ],
    // Meilleures et pires moyennes : au moins 7 matchs joués (la moitié des 14 journées)
    ratings: [
      { name: "Kamory Doumbia",        detail: "MC · Malien · 23 ans · 9 tit. / 1 rempl. · 3 buts · 1 passe D.",  value: 7.13 },
      { name: "Justin Bourgault",      detail: "DG · Français · 21 ans · 1 tit. / 9 rempl.",                      value: 7.07 },
      { name: "Bradley Locko",         detail: "DG · Français · 24 ans · 14 tit. / 1 rempl. · 2 buts · 3 passes D.", value: 7.05 },
    ],
    flops: [
      { name: "Djylian N'Guessan",     detail: "BU · Français · 18 ans · 1 tit. / 6 rempl.",                      value: 6.32 },
      { name: "Joseph Nonge",          detail: "MC · Belge · 21 ans · 2 tit. / 9 rempl.",                          value: 6.59 },
      { name: "Gautier Lloris",        detail: "DC · Français · 31 ans · 15 tit. · 1 passe D.",                    value: 6.65 },
    ],
    // Mercato d'été 2026
    transfers:  [],
    departures: [
      { type: "loan", name: "Djylian N'Guessan",  to: "Fin de prêt, retour à Saint-Étienne (BU · Français · 18 ans)", date: "Déc. 2026" },
    ],
    cup: {
      name: "Coupe de France",
      rounds: [
        { result: "W", round: "9e tour", score: "0 – 1", opponent: "AS Gamaches (E)" },
        { result: "W", round: "10e tour", score: "0 – 3", opponent: "SR Colmar (E)" },
      ],
    },
    standingsTitle: "Classement après la 15e journée",
    standings: [
      { pos:1,  team:"Toulouse FC",     j:14, g:7, n:7, l:0, bp:23, bc:9, db:14, pts:28, zone:"ucl" },
      { pos:2,  team:"PSG",             j:15, g:9, n:1, l:5, bp:29, bc:17, db:12, pts:28, zone:"ucl" },
      { pos:3,  team:"LOSC",            j:15, g:8, n:4, l:3, bp:23, bc:13, db:10, pts:28, zone:"ucl" },
      { pos:4,  team:"AS Monaco",       j:15, g:7, n:5, l:3, bp:22, bc:14, db:8, pts:26, zone:"ucl" },
      { pos:5,  team:"Angers SCO",      j:14, g:7, n:3, l:4, bp:19, bc:19, db:0, pts:24, zone:"uel" },
      { pos:6,  team:"Paris FC",        j:14, g:6, n:4, l:4, bp:18, bc:13, db:5, pts:22, zone:"uecl" },
      { pos:7,  team:"AJ Auxerre",      j:15, g:5, n:7, l:3, bp:18, bc:14, db:4, pts:22 },
      { pos:8,  team:"FC Lorient",      j:15, g:5, n:7, l:3, bp:11, bc:11, db:0, pts:22 },
      { pos:9,  team:"OM",              j:15, g:6, n:2, l:7, bp:18, bc:18, db:0, pts:20 },
      { pos:10, team:"OL",              j:15, g:5, n:5, l:5, bp:19, bc:21, db:-2, pts:20 },
      { pos:11, team:"OGC Nice",        j:15, g:5, n:4, l:6, bp:16, bc:21, db:-5, pts:19 },
      { pos:12, team:"Brest",           j:15, g:5, n:3, l:7, bp:21, bc:22, db:-1, pts:18, highlight:true },
      { pos:13, team:"RC Lens",         j:15, g:4, n:5, l:6, bp:15, bc:17, db:-2, pts:17 },
      { pos:14, team:"Strasbourg",      j:15, g:3, n:6, l:6, bp:19, bc:22, db:-3, pts:15 },
      { pos:15, team:"ESTAC",           j:14, g:4, n:2, l:8, bp:13, bc:19, db:-6, pts:14 },
      { pos:16, team:"Le Mans",         j:15, g:3, n:4, l:8, bp:10, bc:19, db:-9, pts:13, zone:"releg-playoff" },
      { pos:17, team:"Havre AC",        j:14, g:4, n:1, l:9, bp:10, bc:23, db:-13, pts:13, zone:"releg" },
      { pos:18, team:"Rennes",          j:14, g:3, n:2, l:9, bp:11, bc:23, db:-12, pts:11, zone:"releg" },
    ],
    // Effectif au 31 décembre 2026 (sans N'Guessan, rentré à Saint-Étienne)
    squad: [
      { n:"Mathieu Patouillet",    p:"GB",   nat:"FRA", age:22 },
      { n:"Egil Selvik",           p:"GB",   nat:"NOR", age:29 },
      { n:"Luck Zogbé",            p:"DD",   nat:"CIV", age:24 },
      { n:"Kenny Lala",            p:"DD",   nat:"MTQ", age:35 },
      { n:"Bradley Locko",         p:"DG",   nat:"FRA", age:24 },
      { n:"Justin Bourgault",      p:"DG",   nat:"FRA", age:21 },
      { n:"Gautier Lloris",        p:"DC",   nat:"FRA", age:31 },
      { n:"Brendan Chardonnet",    p:"DC",   nat:"FRA", age:31 },
      { n:"Raphaël Le Guen",       p:"DC",   nat:"FRA", age:20 },
      { n:"Mamady Diambou",        p:"MD",   nat:"MLI", age:24 },
      { n:"Lucas Tousart",         p:"MD",   nat:"FRA", age:29 },
      { n:"Hugo Magnetti",         p:"MD",   nat:"FRA", age:28 },
      { n:"Kamory Doumbia",        p:"MC",   nat:"MLI", age:23 },
      { n:"Joris Chotard",         p:"MC",   nat:"FRA", age:25 },
      { n:"Joseph Nonge",          p:"MC",   nat:"BEL", age:21 },
      { n:"Mama Baldé",            p:"MOD",  nat:"GNB", age:31 },
      { n:"Giovani Versini",       p:"MOD",  nat:"FRA", age:22 },
      { n:"Noah Edjouma",          p:"MOD",  nat:"FRA", age:21 },
      { n:"Pathé Mboup",           p:"MOG",  nat:"SEN", age:23 },
      { n:"Ludovic Ajorque",       p:"BU",   nat:"FRA", age:32 },
    ],

    awards: [
      { label:"Équipe-type de la semaine", winner:"Bradley Locko", period:"14e journée", detail:"Ligue 1 · arrière gauche · 1 but contre l'ESTAC (2-0), note de 8,1" },
      { label:"But du mois", winner:"Bradley Locko", period:"Décembre 2026", detail:"Ligue 1 · superbe frappe contre l'ESTAC (2-0), le 12 décembre" },
    ],

    records: [
      { key:"buts-match-l1", label:"Buts dans un match de championnat", value:"8", detail:"4-4 à Strasbourg (Ligue 1) · ancien record : 3-2 à Lille le 17 octobre 2026", date:"22 nov. 2026" },
    ],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },
]
