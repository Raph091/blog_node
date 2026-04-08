const express = require('express');
const app = express();

// Configuration de EJS comme moteur de template
app.set('view engine', 'ejs');

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});

app.get('/', (req, res) => {
    const sql = `
        SELECT 
            Article.Id_article, 
            Article.Titre, 
            LEFT(Article.contenu, 100) AS apercu, 
            Article.Date_creation AS Date_publication, 
            Auteur.Pseudo AS Nom_auteur, 
            Categorie.Nom AS Nom_categorie
        FROM Article
        INNER JOIN Auteur ON Article.Id_auteur = Auteur.Id_auteur
        INNER JOIN Categorie ON Article.Id_categorie = Categorie.Id_categorie
        ORDER BY Article.Date_creation DESC
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error("Erreur de base de données :", error);
            return res.status(500).send("Erreur interne du serveur");
        }
        res.render('index', { articles: results });
    });
});

