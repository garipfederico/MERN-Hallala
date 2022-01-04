const { Schema, model} = require('mongoose');

const empresaSchema = new Schema({
    nombre: String,
    descripcion: String,
    mision: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = model('Empresa', empresaSchema)