//importaciones
const { Router } = require('express');
const { check } = require('express-validator');

const { getCategorias, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/mostrar', getCategorias);

router.post('/agregar', [
    check('nombre_categoria', 'El nombre de la categoria es obligatorio para el post').not().isEmpty(),
    validarCampos
] , postCategoria);


router.put('/editar/:id', putCategoria);
router.delete('/eliminar/:id', deleteCategoria);


module.exports = router;