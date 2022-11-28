const Habitacion = require('../model/habitacion');

exports.obtener = async (req, res) =>
{
    try
    {
        const habitaciones = await Habitacion.find();
        res.status(200).json(habitacion);
    } catch (error)
    {
        res.status(500).json(error);
    }
}