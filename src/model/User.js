const { Schema, model, SchemaTypeOptions } = require("mongoose");

const UserSchema = new Schema({
    _id: Number,
    Apodo: String,
    nombre: String,
    apellido: String,
    fnacimiento: Date,
    genero: String,
    email:{
    Type: String,
        required:true
},
    telefono: Number,
    paisorigen: String,
    password: String,
    tipouser: String,
    img: String,
    
     reservas: [{
        type: Schema.Types.ObjectId,
        ref: 'Reserva'
    }]

})

module.exports = model("User", UserSchema);