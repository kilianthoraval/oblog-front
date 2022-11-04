// étape 1 : -npm express ejs + initialisation serveur:
const router = require('./router.js');
const express = require('express');
const app = express();
const articles = require('./data/articles.json')


app.set('view engine', 'ejs');
app.set('views', __dirname + '/integration');

// - le dossier qui contient les fichiers statiques
app.use(express.static(__dirname + '/static'));


// app.use((request, response, next) => {
//     app.locals.articlesList = articles;
//     next();
// })


app.use(router);


// on lance le serveur express
const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});