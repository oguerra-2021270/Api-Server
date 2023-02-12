//importaciones
const { Router } = require('express');
const { check } = require('express-validator');

const { getUsuarios, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/mostrar', getUsuarios);

router.post('/agregar', [
    check('nombre', 'El nombre es obligatorio para el post').not().isEmpty(),
    check('password', 'La passwarod debe ser mayor a 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    validarCampos
] , postUsuario);


router.put('/editar/:id', putUsuario);
router.delete('/eliminar/:id', deleteUsuario);


module.exports = router;