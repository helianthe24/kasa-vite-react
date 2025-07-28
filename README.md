# Kasa - Application de location immobilière

Kasa est une application web de location d'appartements entre particuliers, développée avec React et Vite.

## 🚀 Installation et lancement

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le repository :

```bash
git clone https://github.com/helianthe24/kasa-vite-react.git
cd kasa-vite-react/kasa
```

2. Installez les dépendances :

```bash
npm install
```

### Lancement du projet

Pour démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5173`

### Autres commandes disponibles

- `npm run build` : Génère une version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie la qualité du code avec ESLint

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Banner/         # Bannière d'accueil
│   ├── Card/           # Carte de logement
│   ├── Collapse/       # Composant accordéon
│   ├── Layout/         # Layout principal (Header, Footer)
│   ├── Rating/         # Système de notation
│   ├── Slideshow/      # Carrousel d'images
│   └── Tag/            # Tags des logements
├── pages/              # Pages de l'application
│   ├── Home.jsx        # Page d'accueil
│   ├── About.jsx       # Page À propos
│   ├── Logement.jsx    # Page détail d'un logement
│   └── NotFound.jsx    # Page 404
├── data/               # Données JSON
├── images/             # Assets images
└── styles/             # Styles globaux
```

## 🛠 Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide
- **React Router** - Gestion du routage
- **Sass** - Préprocesseur CSS
- **ESLint** - Linter pour la qualité du code

## 📱 Fonctionnalités

- Navigation entre les pages (Accueil, À propos, Détail logement)
- Affichage de la liste des logements
- Carrousel d'images pour chaque logement
- Système de notation par étoiles
- Composants accordéon pour les descriptions
- Design responsive (mobile et desktop)
- Gestion des erreurs 404

## 🎨 Design

L'application respecte les maquettes fournies et est entièrement responsive, s'adaptant aux écrans mobiles et desktop.
