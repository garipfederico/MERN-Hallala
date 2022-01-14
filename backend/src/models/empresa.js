const { Schema, model} = require('mongoose');

const empresaSchema = new Schema({
    nombre: String,
    descripcion: String,
    mision: String,
    date: {
        type: Date,
        default: Date.now
    },
    miembros: [{
        nombre: String,
        apellido: String,
        cargo: String
    }],
},{
    timestamps: true
});

module.exports = model('Empresa', empresaSchema)