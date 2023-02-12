//Importacion
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

//Modelos
const Categoria = require('../models/categoria');


const getCategorias = async (req = request, res = response) => {

    //Condición, me busca solo los usuarios que tengan estado en true
    const query = { estado: true };

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'GET API de usuarios',
        listaCategoria
    });

}

const postCategoria = async (req = request, res = response) => {

    const { nombre_categoria, tipo, marca } = req.body;
    const categoriaDB = new Categoria({ nombre_categoria, tipo, marca });

    //Guardar en Base de datos
    await categoriaDB.save();

    res.status(201).json({
        msg: 'POST API de categoria',
        categoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    //Ignoramos el _id al momento de editar y mandar la petición en el req.body
    const { _id, ...resto } = req.body;

    //editar y guardar
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT API de usuario',
        categoriaEditada
    });

}



const deleteCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    //eliminar fisicamente y guardar
    const categoriaEliminada = await Categoria.findByIdAndDelete(id);

    // O bien cambiando el estado del usuario

    //editar y guardar
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE API de usuario',
        categoriaEliminada
    });

}



module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}