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
    lastUpdate:   "Novembre 2026 · J11",
    position:     11,
    compNames:    { CDF: "Coupe de France" },
    objective:    "S'installer durablement en Ligue 1",

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
        key: "11", label: "Novembre 2026",
        note: "Trois journées au programme en novembre : la réception de Lyon le 8, un déplacement à Strasbourg le 22, puis la venue du Paris FC le 28. Le 8, au stade Francis-Le Blé, Brest tire davantage (12 tirs à 7) mais l'OL, plus réaliste et maître du ballon (67 % de possession), s'impose 0-2 : Morton ouvre le score juste avant la pause (45e) et Nuamah, servi par Bidstrup, double la mise dans le temps additionnel (90e+3). Le 22, à la Meinau, les deux équipes livrent un match fou (4-4). Brest mène 3-0 à la pause grâce à Baldé (4e), Magnetti sur une passe de Lala (9e) et Ajorque servi par Baldé (26e). Strasbourg réduit l'écart dès la reprise par Harder (46e), Locko redonne trois buts d'avance aux Bretons sur une passe de Doumbia (48e), mais Reyna, auteur d'un match exceptionnel (9,9), sonne la révolte : il marque à la 64e puis sert Mara à la 68e, et les Alsaciens arrachent finalement le point du nul.",
        matches: [
          { r:"L", tip:"OL (D) 0-2" },
          { r:"D", tip:"Strasbourg (E) 4-4" },
        ],
      },
    ],

    scorers: [],
    assists: [],
    ratings: [],
    flops:   [],
    // Mercato d'été 2026
    transfers:  [],
    departures: [],
    standingsTitle: "Classement après la 9e journée",
    standings: [
      { pos:1,  team:"Toulouse FC",     j:9, g:5, n:4, l:0, bp:13, bc:3, db:10, pts:19, zone:"ucl" },
      { pos:2,  team:"LOSC",            j:9, g:6, n:1, l:2, bp:17, bc:8, db:9, pts:19, zone:"ucl" },
      { pos:3,  team:"PSG",             j:9, g:6, n:1, l:2, bp:19, bc:11, db:8, pts:19, zone:"ucl" },
      { pos:4,  team:"Paris FC",        j:8, g:5, n:2, l:1, bp:15, bc:5, db:10, pts:17, zone:"ucl" },
      { pos:5,  team:"Angers SCO",      j:9, g:5, n:2, l:2, bp:11, bc:9, db:2, pts:17, zone:"uel" },
      { pos:6,  team:"AJ Auxerre",      j:8, g:4, n:3, l:1, bp:12, bc:7, db:5, pts:15, zone:"uecl" },
      { pos:7,  team:"OGC Nice",        j:9, g:4, n:2, l:3, bp:13, bc:13, db:0, pts:14 },
      { pos:8,  team:"OL",              j:9, g:3, n:2, l:4, bp:10, bc:14, db:-4, pts:11 },
      { pos:9,  team:"OM",              j:9, g:3, n:1, l:5, bp:10, bc:10, db:0, pts:10 },
      { pos:10, team:"AS Monaco",       j:8, g:2, n:4, l:2, bp:8, bc:9, db:-1, pts:10 },
      { pos:11, team:"Brest",           j:9, g:3, n:1, l:5, bp:12, bc:14, db:-2, pts:10, highlight:true },
      { pos:12, team:"RC Lens",         j:9, g:2, n:3, l:4, bp:5, bc:10, db:-5, pts:9 },
      { pos:13, team:"ESTAC",           j:8, g:2, n:2, l:4, bp:8, bc:10, db:-2, pts:8 },
      { pos:14, team:"Rennes",          j:9, g:2, n:2, l:5, bp:10, bc:14, db:-4, pts:8 },
      { pos:15, team:"FC Lorient",      j:9, g:1, n:5, l:3, bp:2, bc:8, db:-6, pts:8 },
      { pos:16, team:"Havre AC",        j:9, g:2, n:1, l:6, bp:6, bc:17, db:-11, pts:7, zone:"releg-playoff" },
      { pos:17, team:"Strasbourg",      j:8, g:1, n:3, l:4, bp:6, bc:10, db:-4, pts:6, zone:"releg" },
      { pos:18, team:"Le Mans",         j:8, g:1, n:3, l:4, bp:7, bc:12, db:-5, pts:6, zone:"releg" },
    ],
    squad:      [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },
]
