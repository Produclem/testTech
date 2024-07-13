# Projet de test Technique Les Bons Artisans

Ce projet est une application web en ReactJS communiquant avec une API REST en expressJS.

## API

L'API fournit des données d'une base de données, à l'application web. Elle doit être lancée en premier et car elle est sur le port 3000 et la webapp est configurée pour requêter sur ce port (localhost:3000).

## Application Web

L'application web est une interface utilisateur qui interagit avec l'API pour récupérer et afficher les données. 
Pour le design, j'ai utilisé Material-UI avec TailwindCSS pour les styles.
Elle doit être lancée après l'API car elle dépend des données fournies par celle-ci.

## Installation et démarrage

Pour installer et démarrer le projet, suivez les étapes suivantes :

1. Clonez le repo sur votre machine.
2. Naviguez jusqu'au répertoire du projet.
3. Installez les dépendances en exécutant `npm install`.
4. Démarrez l'API en exécutant `npm run dev`.
5. Une fois que l'API est en cours d'exécution, démarrez l'application web en exécutant `npm start` sur un autre terminal.

Je n'ai malheureusement pas eu le temps de réaliser tout ce qui était demandé dans les Bonus avant ce samedi 13/07/2024 à 18h,
mais le projet est fonctionnel et les données sont bien affichées.


Projet réalisé par [Clement GUERIN](https://www.linkedin.com/in/clement-guerin1/)