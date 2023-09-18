const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/baseDeDatos.js');

const Post = sequelize.define('Post', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contenido: {
      type: DataTypes.STRING(1234)
     }, 
    url_imagen: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.zooplus.es/magazine/wp-content/uploads/2019/07/chat-heureux-768x513.jpg'
    }, 
  }, {
     tableName: 'Post',
     //timestamps: false
  });

//Para crear la tabla en la base de datos
Post.sync();

module.exports = { Post };