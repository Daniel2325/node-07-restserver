const mongoose = require('mongoose');

let Schema = mongoose.Schema; // permite crear la estructura dentro de nuestra base de datos, el esqueleto, como quiero ir almacenadndo cada uno de los documentos

let usuarioShema = new Schema({
    nombre: {
        type: String,
        require: [true,'El nombre es requerido'],

    },
    email: {
        type: String,
        required: [true,'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    imagen: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario',usuarioShema)
