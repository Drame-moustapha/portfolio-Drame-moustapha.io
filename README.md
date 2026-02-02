# portfolio-Drame-moustapha.io

Site statique (HTML/CSS) pour le portfolio de Moustapha DRAME.

Déploiement
- Le dépôt utilise GitHub Pages + GitHub Actions.
- Le workflow `.github/workflows/static.yml` publie le contenu du dépôt sur GitHub Pages à chaque push sur `main`.

URL publique attendue :
https://Drame-moustapha.github.io/portfolio-Drame-moustapha.io/

Pour ajouter un domaine personnalisé
1. Créer un fichier `CNAME` à la racine contenant ton domaine (ex. `portfolio.example.com`).
2. Dans ton DNS, créer un enregistrement CNAME du sous-domaine vers `Drame-moustapha.github.io` (ou A records si domaine apex).
3. Attendre la propagation DNS, puis activer HTTPS dans Settings → Pages.

Notes
- Les images/ressources doivent utiliser des chemins relatifs (ex. `images/photo.jpg`) pour fonctionner correctement sur GitHub Pages.
- Si tu veux remplacer le placeholder `avatar.svg` par une photo, place-la (ex. `images/photo.jpg`) et mets à jour `<img src="...">` dans `index.html`.