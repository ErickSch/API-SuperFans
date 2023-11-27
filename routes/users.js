const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.controllers.js')

router.get('/', UserControllers.getAllUsers)
router.post('/', UserControllers.registerUser)
// router.get('/:idUser', UserControllers.getUserWIdUser)
// router.get('/:username', UserControllers.getUserWUsernameUser)

router.get('/perfiles', UserControllers.getAllPerfiles)
router.get('/perfiles/:username/:password', UserControllers.getPerfilWUser)
router.get('/perfiles/:id', UserControllers.getPerfilWId)

router.get('/imagen/:nombreImagen', UserControllers.getImagen)

router.get('/recetas', UserControllers.getAllRecetas)
router.get('/recetas/favoritas/:idPerfil', UserControllers.getRecetasFavoritasWId)
router.get('/recetas/ingredientes/:idReceta', UserControllers.getIngredientesWIdReceta)
router.post('/recetas/favorita', UserControllers.postRecetaFavorita)
router.get('/recetas/pasos/:idReceta', UserControllers.getPasosReceta)
router.get('/recetas/ingrediente/:idIngrediente', UserControllers.getRecetasWIdIngrediente)
router.post('/recetas/listaingredientes', UserControllers.postListaIngredientes)
router.put('/recetas/listaingredientes', UserControllers.postListaIngredientes)


router.put('/perfiles/:id', UserControllers.updatePerfil)
router.put('/perfiles/peso/:id', UserControllers.updatePesoPerfil)

module.exports = router;