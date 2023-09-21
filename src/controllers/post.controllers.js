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

    const post = {
        titulo: titulo,
        contenido: contenido,
        url_imagen: url_imagen
    };

    try {
        const nuevoPost = await Post.create(post);
        res.redirect('/posts');
    } catch (error) {
        res.send({message:'Error al crear el post' + error});  
    };
};

//CONTROLADOR PARA IR A LA RUTA DE FORMULARIO DE ACTUALIZACIÓN DE POST
crudPost.indexModificarPost = async (req, res) => {
    const { id } = req.params;

    const post = await Post.findOne({ where: { id: id }});

    res.render('editPost', { post : post });
};

// CONTROLADOR PARA ACTUALIZAR UN POST
crudPost.actualizarPost = async (req, res) => {
    const { id, titulo, contenido, url_imagen} = req.body

    //const post = Post.findOne({ where: { id: id } });

    try {
            const postActualizar = await Post.update({ 
                titulo: titulo,
                contenido: contenido, 
                url_imagen: url_imagen,
                updatedAt: new Date().toDateString()                  
              },
              { where: {
                  id: id
              }});
            res.redirect('/posts');
        } catch (error) {
            res.send({ message:'Error al actualizar el post determinado' });
        };
    //};
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
            //res.send({ message: '¡Post eliminado exitosamente!' });
            res.redirect('/posts');
        } else {
            res.send({ message: 'No existe el id del post a eliminar' });
        }
    } catch (error) {
        res.send({ message: 'Error al tratar de eliminar el post' })
    };
};

module.exports = { crudPost };