const express = require('express');
const conexionBD = require('./db');
const rutasHab = require('./routes/habitacion.routes');
const rutasRese = require('./routes/reserva.routes');
const rutasUser = require('./routes/user.routes');
const app = express();

require('dotenv').config();

//Conexion a la DB
conexionBD();

//Configuraciones
app.set("name", "Hotelia-Api");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'localhost');   

//Midleware
app.use(express.json());

//Llamado de rutas
app.use(express.static('public'));
app.use('/public', express.static('public/upload'))

app.use('/habitaciones', rutasHab);
app.use('/user', rutasUser);
app.use('/reservas', rutasRese);


module.exports = app;