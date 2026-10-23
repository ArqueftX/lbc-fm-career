# Les CARQrières — récaps de carrières Football Manager 26

Site statique (GitHub Pages) qui raconte des carrières FM26. Il est partagé publiquement : les récaps doivent être exacts et soignés.

## Fonctionnement des mises à jour

- Le propriétaire dépose ses captures du jeu sur l'artefact « Mes images » (https://claude.ai/artifact/RLLqr1yVgTcoVAy8HouQBL), dans la collection `photos`. Repérer les nouvelles avec `createdAt`. Pour lire une image : `Artifact read` avec `path=<assetId>`, une image à la fois.
- Depuis le 22/10/2026 (captures du 02/04/2026 in-game et après), le champ `date` / `sortKey` d'une image est **la date in-game** de l'actu : s'en servir pour ranger chaque actu dans le bon mois. Avant, ce champ était faux (souvent 16/03/27).
- Un mois en cours peut être ouvert dès la première actu (matchs ajoutés au fil des actus) ; sa `position` et le classement se mettent à jour avec les captures de fin de mois.
- **Depuis octobre 2026, il envoie les actus de la boîte de réception du jeu** (comptes rendus de matchs, classements, transferts, distinctions, records…) au lieu de récaps mensuels. C'est à Claude de tout déduire et de tenir le site à jour seul :
  - les matchs du mois, leurs scores et leurs compétitions ;
  - le classement et la position à la fin de chaque mois ;
  - le mercato (arrivées, départs, prêts, fins de prêt) ;
  - les distinctions (`awards`) et les records du club (`records`) ;
  - **la fin de saison, sans qu'on la lui signale** : passer `status: "termine"`, `lastUpdate: "Saison terminée"`, classement final avec `champion:true`, stats finales et **le message d'intro (`splash`)**. Puis ouvrir la saison suivante.
  - **la bascule se fait au mail « Fin de la saison »** (l'effectif part en vacances) : ce mail et tout ce qui arrive avant restent dans l'ancienne saison, même après le dernier match ; après ce mail, toutes les actus (intersaison, mercato d'été, prolongations…) vont dans la **nouvelle saison**. L'effectif de l'ancienne saison reste figé à la date des dernières captures d'effectif.
- **À chaque fin de mois**, le propriétaire envoie au moins le classement du championnat et les stats des joueurs : de quoi mettre à jour `standings`, la `position` du mois, `scorers`, `assists`, `ratings`, `flops` et `squad`.
- Si une info manque pour qu'un récap soit juste (classement, stats des joueurs…), la demander plutôt que l'inventer.
- Les notes de mois et les messages d'intro sont rédigés par Claude : le dire au propriétaire à chaque fois.

## Règles des récaps

- Score toujours écrit **DOMICILE-EXTÉRIEUR** dans `tip` : `"Adversaire (D|E|N) dom-ext"`. Quand le propriétaire écrit un score du point de vue de son équipe (« Dover, Ext : 4-0 » = victoire 4-0 à l'extérieur), le remettre dans l'ordre domicile-extérieur (`Dover Athletic (E) 0-4`).
- Coupe décidée aux tirs au but : `r` = issue des t.a.b. (W ou L), score du match nul, détail dans `tag` / `opponent`.
- Saisons mois par mois : `months:[{ key, label, position, note, matches }]`. Championnat = `comp` absent, `"L"` ou `"BL"` ; amical `"AM"` ; coupes nommées dans `compNames`.
- **Moyennes (ratings / flops)** : seuls les joueurs ayant joué au moins la moitié des journées de championnat déjà jouées (toutes compétitions confondues). En fin de saison : la moitié de la saison (17 en Bundesliga, 19 en Premier League, 23 en National League South).
- Détails joueurs : `"POSTE · Nationalité · âge ans"` ; pour les notes : `"… · X tit. / Y rempl. · N buts · N passes D."` (omettre les zéros). Ex-aequo : `"A. Nom · B. Nom"` + `"POS / POS · ex-aequo"`, ou `"N joueurs à égalité"` à partir de 3.
- Classements : `zone` = `ucl`, `uel`, `uecl`, `promo`, `promo-playoff`, `releg-playoff`, `releg` (+ `champion:true`) ; phase européenne : `r16`, `playoff`, `out`. Suivre les couleurs du jeu (voir `standings-zones.js`).
- **Toujours vérifier par script** que la somme des matchs de championnat (V/N/D, buts) donne exactement la ligne du classement, et que le tableau est cohérent (somme BP = somme BC).
- Records du club (`records`, `key` unique par record : le plus récent remplace l'ancien sur la page carrière) ; distinctions (`awards`, toutes conservées).
- Objectif de la saison fixé par les dirigeants : champ `objective` de la saison (affiché dans l'en-tête des deux designs). Le reprendre dans les notes et le message d'intro (objectif atteint, dépassé ou manqué).
- **Ne pas afficher** : les attributs détaillés des joueurs (fiches techniques/mentales/physiques), ni les demandes faites aux dirigeants. Une fiche joueur sert seulement à en tirer poste, âge, nationalité, contrat ou transfert.

## Carrières

Ordre de création (ordre de `careers.js`) : Arsenal, Chippenham Town, Châteauroux, Séville, Wolfsburg (Réseau), Ajax, Wolfsburg (Pep), Leverkusen.

- En cours : Chippenham, Châteauroux, Wolfsburg (Pep), Leverkusen. Terminées : Arsenal, Séville, Wolfsburg (Réseau), Ajax.
- Entraîneurs : Nolann Queft (Arsenal, Chippenham, Châteauroux), Arq Queft (Ajax, Leverkusen), Pep Guardiola (Wolfsburg Pep).

## Technique

- Données : `seasons-<id>.js` (`window['SEASONS_<id>']`) et `careers.js`. Ancien design : pages `<id>/` + `utils.js` + `style.css`. Nouveau design : `v2/` (routes `#/`, `#/c/id`, `#/c/id/sid`). Partagés : `career-stats.js`, `standings-zones.js`.
- Une nouvelle carrière : entrée dans `careers.js`, fichier `seasons-<id>.js`, dossier `<id>/` (copier celui d'une carrière au même format), et `<script src="../seasons-<id>.js">` dans toutes les pages carrière.
- Tester en local (`python3 -m http.server 8765` + Playwright, Chromium dans `/opt/pw-browsers/chromium`) les deux designs, en 1280 et 390 px, avant chaque push.
- Le propriétaire fusionne lui-même les pull requests : ne jamais les fusionner. Commits et PR en français.
