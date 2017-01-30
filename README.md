# Angular 2 Webapp Starter

## Fonctionnalité
⚛ Squelette complet et fonctionnel d'application Angular2 (TypeScript) :
- Webpack pour la partie bundle et serveur local
- Support de TypeScript v2+
- Support d'istanbul pour la couverture du code pour les tests 
- Support de `Karma`, `Jasmine`, `PhantomJS` pour les tests unitaires (possibilité de bouchonner des appels HTTP cf `test/components/todo.component.spec.ts`)

## Getting started

Installer les dépendances projets :
`npm install`

## Lancer le serveur local

Lancer le serveur http local (via `webpack-dev-server`) :
`npm start`

## Lancer les tests (et générer le rapport de couverture de code)

`npm test`

La couverture de code se trouvera dans le dossier `coverage`

## Bundler l'application
`npm run dist`

L'application bundlée se trouvera dans le dossier `dist`
>>>>>>> feat(ng2): appli fonctionnelle
