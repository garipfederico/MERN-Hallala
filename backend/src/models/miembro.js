const { Schema, model } = require('mongoose');

const miembroSchema = new Schema({
    nombre: String,
    apellido: String,
    cargo: String,
});

module.exports = model("Miembro", miembroSchema);


// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// var miembroSchema = new Schema({
//   nombre: String,
//   biografia: String,
//   fecha_de_nacimiento: Date,
//   nacionalidad: String,
// });

// module.exports = mongoose.model("Miembro", miembroSchema);
