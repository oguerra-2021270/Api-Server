const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre_categoria: {
        type: String,
        required: [true, 'El nombre de la categoria es obligatorio']
    },

    tipo: {
        type: String
    },

    img: {
        type: String
    },

    marca: {
        type: String
    },

    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Categoria', CategoriaSchema)