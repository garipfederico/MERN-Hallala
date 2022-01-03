const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    nombre: String,
    categorias: [String],
    descripcion: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = model('Producto', productoSchema)