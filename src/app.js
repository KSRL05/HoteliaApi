const express = require('express');
const conexionBD = require('./db');

const app = express();

require('dotenv').config();

//Conexion a la DB
conexionBD();

//Configuraciones

app.set("name", "Hotelia-Api");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || 'lcalhost');