const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.controllers.js')

router.get('/', UserControllers.getAllUsers)
router.post('/', UserControllers.registerUser)

router.get('/perfiles', UserControllers.getAllPerfiles)
router.get('/perfiles/:id', UserControllers.getPerfilWPerfilId)
// router.get('/perfiles/:username/:password', UserControllers.getPerfilWUser)

router.get('/image/:image', UserControllers.getImage)

router.get('/recetas', UserControllers.getAllRecetas)
router.get('/recetas/favoritas/:idPerfil', UserControllers.getRecetasFavoritasWIdPerfil)
router.get('/recetas/ingredientes/:idReceta', UserControllers.getIngredientesWIdReceta)
router.post('/recetas/favorita', UserControllers.postRecetaFavorita)
router.get('/recetas/pasos/:idReceta', UserControllers.getPasosReceta)
router.get('/recetas/ingrediente/:idIngrediente', UserControllers.getRecetasWIdIngrediente)

router.put('/perfiles/:id', UserControllers.updatePerfilNameWIdPerfil)
router.put('/perfiles/peso/:id', UserControllers.updatePesoPerfil)

module.exports = router;