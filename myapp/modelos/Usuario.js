const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  name: String,
  apellido: String, 
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
