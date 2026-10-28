# Guide de déploiement sur GitHub Pages

## ✅ Configuration effectuée

1. **Workflow GitHub Actions** créé (`.github/workflows/deploy.yml`)
   - Déploiement automatique à chaque push sur `main`
   - Build avec Vite et déploiement sur GitHub Pages

2. **Scripts npm** dans `package.json`
   - `npm run dev` : développement local
   - `npm run build` : build de production
   - `npm run preview` : prévisualisation du build
   - `npm test` : tests

3. **Configuration Vite** vérifiée
   - `base: '/secretsanta/'` est correct pour votre repo

## 💻 Développement local

Ce projet utilise **npm** (Node.js 20 ou plus récent) :

```bash
npm install
npm run dev
```

## 🚀 Étapes pour activer GitHub Pages

1. **Activer GitHub Pages dans les paramètres du repo** :
   - Allez sur https://github.com/BmnQuentin/secretsanta/settings/pages
   - Source : sélectionnez **"GitHub Actions"** (pas "Deploy from a branch")
   - Sauvegardez

2. **Pousser le code** :
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Vérifier le déploiement** :
   - Allez dans l'onglet "Actions" de votre repo
   - Le workflow devrait se lancer automatiquement
   - Une fois terminé, votre site sera disponible sur : **https://bmnquentin.github.io/secretsanta/**

## 📝 Références à l'ancien repo (optionnel)

Le projet fonctionne parfaitement tel quel, mais il contient quelques références à l'ancien repo/auteur :

1. **`index.html` ligne 14** : URL Open Graph vers `https://mael.dev/secretsanta/`
   - Vous pouvez la mettre à jour vers votre URL GitHub Pages

2. **`index.html` lignes 23-24** : Liens sociaux vers l'auteur original
   - Vous pouvez les supprimer ou les remplacer par vos propres liens

3. **`src/pages/Home.tsx` ligne 144** : Lien vers `https://github.com/arcanis/secretsanta/`
   - Vous pouvez le mettre à jour vers votre repo : `https://github.com/BmnQuentin/secretsanta/`

4. **`src/pages/Home.tsx` lignes 108 et 111** : Liens vers le profil de l'auteur original
   - Vous pouvez les supprimer ou les remplacer

Ces références ne sont **pas problématiques** pour le fonctionnement, mais vous pouvez les mettre à jour si vous le souhaitez.

## ✅ Vérifications

- ✅ Pas de secrets ou clés API exposées
- ✅ Pas de dépendances problématiques
- ✅ Configuration Vite correcte pour GitHub Pages
- ✅ Workflow GitHub Actions configuré correctement
- ✅ Scripts de build présents

Le projet est prêt à être déployé ! 🎄

