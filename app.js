const express = require('express');
const app = express();

// Configuration de EJS comme moteur de template
app.set('view engine', 'ejs');

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});