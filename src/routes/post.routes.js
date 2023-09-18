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
postRoutes.get('/editar/:id', crudPost.indexModificarPost);

//ruta para actualizar un posteo
postRoutes.post('/actualizar', crudPost.actualizarPost); //cambiar x post

//ruta para eliminar un post
postRoutes.get('/borrarPost/:id', crudPost.borrarPost); //cambiar x get

module.exports = { postRoutes };