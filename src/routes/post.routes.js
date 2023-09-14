const express = require('express')
const postRoutes  = express.Router();
const { crudPost } = require('../controllers/post.controllers.js')

// ruta principal
postRoutes.get('/', (req, res) => {
    res.render('index');
})
//ruta para mostrar todos los posteos
postRoutes.get('/posts', crudPost.mostrarPosteos);

//ruta para crear un post
postRoutes.post('/crearPost', crudPost.crearPost);

//ruta para actualizar un posteo
postRoutes.post('/actualizarPost/:id', crudPost.actualizarPost); //cambiar x post

//ruta para eliminar un post
postRoutes.delete('/borrarPost/:id', crudPost.borrarPost); //cambiar x get

module.exports = { postRoutes };