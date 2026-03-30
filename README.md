# 🏟️ La Berrichonne de Châteauroux — Carrière FM26

Site de suivi de carrière Football Manager 26, déployé sur GitHub Pages.

## 🚀 Mise en place (une seule fois)

### 1. Créer le repo GitHub

- Va sur [github.com/new](https://github.com/new)
- Nomme le repo `lbc-fm-career` (ou ce que tu veux)
- Laisse-le **public** (requis pour GitHub Pages gratuit)
- Ne coche rien d'autre → **Create repository**

### 2. Pousser le projet

```bash
# Dans le dossier du projet :
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/lbc-fm-career.git
git push -u origin main
```

### 3. Activer GitHub Pages

- Dans ton repo → **Settings** → **Pages**
- Source : **GitHub Actions**
- Sauvegarde

Le déploiement se lance automatiquement. Dans 1-2 minutes ton site est dispo à l'adresse :
```
https://TON_USERNAME.github.io/lbc-fm-career/
```

---

## ➕ Ajouter une nouvelle saison

1. Ouvre `src/data/seasons.js`
2. Copie le bloc `/* Template vide */` en bas du fichier
3. Remplis les données de la saison
4. Décommente le bloc (enlève `/*` et `*/`)
5. Commit + push → le site se met à jour tout seul en 1-2 min

```bash
git add src/data/seasons.js
git commit -m "Saison 2026/27 — Ligue 2, 1er"
git push
```

---

## 📁 Structure du projet

```
lbc-fm-career/
├── src/
│   ├── App.jsx          ← Composants React (UI)
│   ├── main.jsx         ← Point d'entrée
│   ├── index.css        ← Styles globaux
│   └── data/
│       └── seasons.js   ← ⭐ C'EST ICI QUE TU AJOUTES TES SAISONS
├── index.html
├── vite.config.js
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml   ← Auto-déploiement GitHub Actions
```

---

## 🛠️ Développement local (optionnel)

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 🎨 Format des données

### Structure d'une saison

| Champ | Type | Description |
|-------|------|-------------|
| `id` | string | Identifiant unique ex: `"2026-27"` |
| `year` | string | Affiché dans l'UI ex: `"2026/27"` |
| `league` | string | `"National"` / `"Ligue 2"` / `"Ligue 1"` |
| `position` | number | Position finale au classement |
| `totalTeams` | number | Nombre d'équipes dans la division |
| `points` | number | Points en championnat |
| `played/wins/draws/losses` | number | Stats de matchs |
| `gf/ga` | number | Buts pour / contre |
| `promoted` | string[] | Équipes promues |
| `relegated` | string[] | Équipes reléguées |
| `scorers/assists/ratings` | array | Top 3 joueurs dans chaque catégorie |
| `transfers` | array | Arrivées du mercato |
| `cup` | object | Parcours en coupe |
| `playoffs` | object / null | Barrages (optionnel) |
| `matches` | array | Séquence de résultats (dots interactifs) |
| `standings` | array | Classement complet |

### Format d'un match

```js
{ r: "W", tip: "FC Rouen (D) 4-1" }
// r = W (Victoire), D (Nul), L (Défaite)
// tip = texte affiché au survol
// (D) = Domicile, (E) = Extérieur
```

### Format d'une ligne de classement

```js
{ pos:1, team:"FC Rouen", j:32, g:19, n:7, l:6, bp:54, bc:31, db:23, pts:64, zone:"promo" }
// zone: "promo" = fond vert, "releg" = fond rouge
// highlight: true = mise en évidence (ton équipe)
```
