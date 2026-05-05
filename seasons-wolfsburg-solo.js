/**
 * VfL WOLFSBURG — SOLO — DONNÉES DES SAISONS
 * Mis à jour mois après mois.
 */
window.SEASONS_wolfsburgsolo = [

  /* ─── SAISON 1 · EN COURS ─────────────────────────────── */
  {
    id:         "wolfsburg-solo-s1",
    year:       "Saison 1",
    league:     "Bundesliga",
    status:     "en_cours",
    position:   9,
    totalTeams: 18,
    points:     2,
    played:     2,
    wins:       0,
    draws:      2,
    losses:     0,
    gf:         2,
    ga:         2,
    promoted:   [],
    relegated:  [],

    scorers: [
      { name: "Adam Daghim", detail: "AD · Danois · 19 ans · Prêt RB Salzburg", value: 1 },
    ],
    assists:  [],
    ratings:  [],

    transfers: [
      { type: "sell", name: "Panos Katseris", from: "FC Lorient", date: "Été 2025", amount: "2,2M €" },
    ],

    departures: [
      { type: "loan", name: "Moritz Jenz",       to: "Crystal Palace", date: "Été 2025" },
      { type: "loan", name: "Mattias Svanberg",   to: "Wolves",         date: "Été 2025" },
    ],

    cup: {
      name: "DFB-Pokal",
      rounds: [
        { result: "L", round: "1er tour", score: "1 – 0", opponent: "E. Braunschweig (E)" },
      ],
    },

    cup2: null,
    playoffs: null,
    splash: null,

    // Uniquement matchs de Bundesliga
    matches: [
      { r:"D", tip:"Heidenheim (E) 1-1" },
      { r:"D", tip:"Mainz 05 (D) 1-1"  },
    ],

    standings: [],
  },

]
