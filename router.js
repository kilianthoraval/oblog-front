const express = require('express');
const router = express.Router();
const articles = require('./data/articles.json')


// étape 2 : 1ere route + modif html

router.get('/', (request, response) => {
    response.render('index.ejs',{
        articles
    });
});

router.get('/article/:id', (request, response) => {    
    let requestedArticle;
    for (let article of articles) {
        if (article.id == request.params.id) {
            requestedArticle = article;
            break;
        }
    }
    response.render('article.ejs',{
        requestedArticle
    })
});

router.get('/category/:category', (request, response) => {    
    let requestedArticles = [];
    for (let article of articles) {
        if (article.category == request.params.category) {
            requestedArticles.push(article);
            
        }
    }
    response.render('index.ejs',{
        articles : requestedArticles
    })
});
// j'exporte mon objet router
module.exports = router;