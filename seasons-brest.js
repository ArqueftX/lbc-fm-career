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
    lastUpdate:   "Août 2026 · pré-saison",
    position:     null,
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
        key: "08", label: "Août 2026",
        note: "Le 1er août, Brest boucle son stage autrichien par une cinquième victoire en cinq matchs amicaux, 4-1 sur la pelouse du FavAC (26 tirs à 5). Kanté ouvre le score sur une passe de Kamory Doumbia (10e), puis Doumbia double lui-même la mise (21e). Un but contre son camp de Le Guen relance le FavAC (37e), mais Diambou, servi par Magnetti (51e), puis Locko, sur une passe de Lala (73e), mettent fin au suspense. Doumbia, déjà homme du match à Leoben, signe cette fois la note parfaite (10/10).",
        matches: [
          { r:"W", tip:"FavAC (E) 1-4",                 comp:"AM" },
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
    standings:  [],
    squad:      [],

    // splash: { ... }  ← à ajouter à la fin de la saison
  },
]
