const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const { probarConexion } = require('./database/baseDeDatos.js');
const { postRoutes } = require('./routes/post.routes.js');
const  { indexRoutes } = require('./routes/index.routes.js');
const path = require('node:path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
//const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');


puertoServidor = process.env.PUERTO;

//MIDDLEWARES
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Configuracion para el motor de plantilla
app.set('view engine', 'ejs');

//Rutas a carpetas estaticas
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, 'views'));

//Para traer las rutas
app.use(postRoutes);
app.use(indexRoutes);

//Conexión a la base de datos
probarConexion();

//Levantar el servidor
app.listen(puertoServidor, () => {
    console.log(`Puerto funcionando y escuchando en el puerto ${puertoServidor}`);
})