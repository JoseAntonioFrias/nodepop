'use strict';

//Importaciones de módulos
const mongoose = require('mongoose');

/**
 * Definición del esquema Usuario
 */
var usuarioSchema = mongoose.Schema({
    email: String,
    password: String
});

//Creación del modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

//Exportamos el modelo aunque no haga falta
module.exports = Usuario;