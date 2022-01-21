const { Schema, model } = require('mongoose');
// const Miembro = model('Miembro');


const empresaSchema = new Schema({
    nombre: String,
    descripcion: String,
    mision: String,
    date: {
        type: Date,
        default: Date.now
    },
    // idMiembro: Integer,
    // nombreMiembro: String,
    // apellidoMiembro: String,
    // cargoMiembro: String,
    
    miembros: [{
        id: Number,
        nombre: String,
        apellido: String,
        cargo: String
    }],
},{
    timestamps: true
});

module.exports = model('Empresa', empresaSchema)