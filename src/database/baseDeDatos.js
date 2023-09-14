const { Sequelize } = require('sequelize');

const nombre_bd = process.env.NOMBRE_BD;
const nombre_usuario = process.env.USUARIO_BD;
const password = process.env.PASSWORD_BD;
const dialecto = process.env.DIALECTO_BD;
const host = process.env.HOST;

const sequelize = new Sequelize(nombre_bd, nombre_usuario, password, {
    host:  host,
    dialect: dialecto
});

const probarConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡Conexión exitosa!');
      } catch (error) {
        console.error('¡La conexión falló', error);
      }
}

module.exports = { sequelize, probarConexion };

