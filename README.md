# Petales & Epines

Un premier prototype statique pour un jeu de couple en room privee.

## Open the app

Run the local server:

```text
node server.js
```

Then open:

```text
http://127.0.0.1:8000/
```

Tu peux aussi ouvrir `index.html` directement, mais le serveur local garde le partage de lien plus propre.

## Features

- Home page spicy avec bouton d'entree.
- Profil joueur avec nom, age et signe astrologique.
- Cartes des 12 signes avec description et visuel stylise.
- Creation d'une gaming room avec ID et lien copiables.
- Actions `Petale` et verites `Epines`.
- Salle synchronisee en local avec table des joueurs.
- Bouteille a spinner, tirage Action/Verite, votes d'approbation et penalites.
- Session sauvegardee dans le navigateur pour rester dans la salle apres refresh.
- Chat de salle avec texte, image, video et audio.

## Notes

Le temps reel fonctionne tant que les joueurs ouvrent l'app sur le meme serveur local. Les profils restent en memoire du navigateur et les salles restent en memoire du serveur pendant qu'il tourne.
