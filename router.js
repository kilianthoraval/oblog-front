const express = require('express');
const router = express.Router();

// étape 2 : 1ere route + modif html

router.get('/', (request, response) => {
    response.render('index.ejs');
});




// j'exporte mon objet router
module.exports = router;