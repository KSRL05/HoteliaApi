const { Router } = require("express");
const rutasReserva = Router();
const ctrRese = require("../controller/reserva.controller");

/*
rutasReserva.get('/', ctrRese.obtener);
rutasReserva.get('/:id', ctrRese.obtenerId);
rutasReserva.post('/', ctrRese.add);
rutasReserva.put('/:id', ctrRese.edit);

*/
module.exports = rutasReserva;
