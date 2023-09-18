const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/baseDeDatos.js');

const Post = sequelize.define('Post', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT
     }, 
    url_imagen: {
      type: DataTypes.STRING,
      defaultValue: 'https://static.thenounproject.com/png/2616531-200.png'
    }, 
  }, {
     tableName: 'Post',
     //timestamps: false
  });

//Para crear la tabla en la base de datos
Post.sync();

module.exports = { Post };