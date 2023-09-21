const { render } = require('ejs');
const { Post } = require('../models/post.models.js');
//const moment = require('moment');

const crudPost = {};


//CONTROLADOR PARA LEER TODOS LOS POSTEOS
crudPost.mostrarPosteos = async (req, res) => {
    const posts = await Post.findAll();
    
    res.render('posts', {resultado: posts});
};

//CONTROLADOR PARA IR A LA RUTA DE FORMULARIO DE CREACION DE POST
crudPost.indexCrearPost = async (req, res) => {
    res.render('createPost');
}

// CONTROLADOR PARA CREAR UN POSTEO
crudPost.crearPost = async (req, res) => {
    const { titulo, contenido, url_imagen } = req.body;

    try {
        const post = {
            titulo: titulo,
            contenido: contenido,
            url_imagen: url_imagen
        };

        const nuevoPost = await Post.create(post);

        if (nuevoPost) {
            res.redirect('/posts');
        } else {
            res.send({message: 'No se pudo agregar la publicación'});
        }        
    } catch (error) {
        res.send({message: 'Error al crear la publicación' + error});
    }
};

//CONTROLADOR PARA IR A LA RUTA DE FORMULARIO DE ACTUALIZACIÓN DE POST
crudPost.indexModificarPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({ where: { id: id }});

        if (post) {
            res.render('editPost', { post : post });
        } else {
            res.send({message: 'No se encontró el post'});
        }
    } catch (error) {
        res.send({message: 'Error al buscar el post' + error});
    }
    //const post = await Post.findOne({ where: { id: id }});

    //res.render('editPost', { post : post });
};

// CONTROLADOR PARA ACTUALIZAR UN POST
crudPost.actualizarPost = async (req, res) => {
    const { id, titulo, contenido, url_imagen} = req.body

    try {
        const postActualizar = await Post.update({ 
            titulo: titulo,
            contenido: contenido, 
            url_imagen: url_imagen,
            updatedAt: new Date()     //new Date().toDateString()              
          },
          { where: {
              id: id
          }});
        
        if (postActualizar) {
            res.redirect('/posts');
        } else {
            res.send({message: 'No se pudo actualizar la publicación'});
        }           
        } catch (error) {
            res.send({ message:'Error al actualizar el post' });
        };
};

// CONTROLADOR PARA BORRAR UN POST
crudPost.borrarPost = async (req, res) => {
    const { id }  = req.params;
            
    try {
        const postEliminar = await Post.destroy({
            where: {
                id: id
            }
        });
        if (postEliminar) {
            res.redirect('/posts');
        } else {
            res.send({ message: 'No se pudo borrar el post'});
        }
    } catch (error) {
        res.send({ message: 'Error al tratar de eliminar el post' })
    };
};

module.exports = { crudPost };