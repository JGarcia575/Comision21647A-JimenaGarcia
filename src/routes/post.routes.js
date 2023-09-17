const express = require('express')
const postRoutes  = express.Router();
const { crudPost } = require('../controllers/post.controllers.js')

//ruta para mostrar todos los posteos
postRoutes.get('/posts', crudPost.mostrarPosteos);

//ruta para mostrar el formulario de creación de una publicación
postRoutes.get('/crear', crudPost.indexCrearPost); /* (req, res) => { res.render('createPost') });*/ 

//ruta para crear un post
postRoutes.post('/guardar', crudPost.crearPost);

//ruta para mostrar el formulario de modificacion de una publicación
postRoutes.get('/editar', (req, res) => {
    res.render('editPost');
})

//ruta para actualizar un posteo
postRoutes.post('/actualizarPost/:id', crudPost.actualizarPost); //cambiar x post

//ruta para eliminar un post
postRoutes.delete('/borrarPost/:id', crudPost.borrarPost); //cambiar x get

module.exports = { postRoutes };