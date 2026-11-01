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
    lastUpdate:   "Août 2026 · J2",
    position:     9,
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
    ],

    scorers: [],
    assists: [],
    ratings: [],
    flops:   [],
    // Mercato d'été 2026
    transfers:  [],
    departures: [],
    standingsTitle: "Classement après la 2e journée",
    standings: [
      { pos:1,  team:"Toulouse FC",     j:2, g:1, n:1, l:0, bp:3, bc:1, db:2, pts:4, zone:"ucl" },
      { pos:2,  team:"OL",              j:2, g:1, n:1, l:0, bp:2, bc:0, db:2, pts:4, zone:"ucl" },
      { pos:3,  team:"AJ Auxerre",      j:2, g:1, n:1, l:0, bp:2, bc:1, db:1, pts:4, zone:"ucl" },
      { pos:4,  team:"Angers SCO",      j:2, g:1, n:1, l:0, bp:2, bc:1, db:1, pts:4, zone:"ucl" },
      { pos:5,  team:"Paris FC",        j:1, g:1, n:0, l:0, bp:3, bc:0, db:3, pts:3, zone:"uel" },
      { pos:6,  team:"OGC Nice",        j:1, g:1, n:0, l:0, bp:3, bc:0, db:3, pts:3, zone:"uecl" },
      { pos:7,  team:"OM",              j:1, g:1, n:0, l:0, bp:2, bc:0, db:2, pts:3 },
      { pos:8,  team:"LOSC",            j:2, g:1, n:0, l:1, bp:2, bc:1, db:1, pts:3 },
      { pos:9,  team:"Brest",           j:2, g:1, n:0, l:1, bp:3, bc:4, db:-1, pts:3, highlight:true },
      { pos:10, team:"FC Lorient",      j:2, g:1, n:0, l:1, bp:1, bc:3, db:-2, pts:3 },
      { pos:11, team:"Rennes",          j:1, g:0, n:1, l:0, bp:2, bc:2, db:0, pts:1 },
      { pos:12, team:"AS Monaco",       j:1, g:0, n:1, l:0, bp:0, bc:0, db:0, pts:1 },
      { pos:13, team:"PSG",             j:2, g:0, n:1, l:1, bp:2, bc:4, db:-2, pts:1 },
      { pos:14, team:"Havre AC",        j:2, g:0, n:1, l:1, bp:0, bc:2, db:-2, pts:1 },
      { pos:15, team:"Le Mans",         j:1, g:0, n:0, l:1, bp:1, bc:2, db:-1, pts:0 },
      { pos:16, team:"RC Lens",         j:1, g:0, n:0, l:1, bp:0, bc:1, db:-1, pts:0, zone:"releg-playoff" },
      { pos:17, team:"Strasbourg",      j:1, g:0, n:0, l:1, bp:0, bc:2, db:-2, pts:0, zone:"releg" },
      { pos:18, team:"ESTAC",           j:2, g:0, n:0, l:2, bp:0, bc:4, db:-4, pts:0, zone:"releg" },
    ],
    squad:      [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },
]
