const indexRoutes = require('express').Router();

// ruta principal
indexRoutes.get('/', (req, res) => {
    res.render('index');
})

module.exports = { indexRoutes };