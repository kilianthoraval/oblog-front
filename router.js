const express = require('express');
const router = express.Router();
const articles = require('./data/articles.json')


// étape 2 : 1ere route + modif html

router.get('/', (request, response) => {
    response.render('index.ejs',{
        articles
    });
});

// router.get('/article/:id', (request, response) => {    
//     let requestedArticle;
//     for (article of articles) {
//         if (article.name === request.params.id) {
//             requestedArticle = article;
//             break;
//         }
//     }
//     response.render('article.ejs',{
//         requestedArticle
//     })
// });


// j'exporte mon objet router
module.exports = router;