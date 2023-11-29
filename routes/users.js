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
router.put('/perfiles/:id', UserControllers.updateNombrePerfilWId)
router.put('/perfiles/altura/:id', UserControllers.updateAlturaPerfilWId)
router.put('/perfiles/peso/:id', UserControllers.updatePesoPerfilWId)
router.put('/perfiles/edad/:id', UserControllers.updateEdadPerfilWId)

router.get('/imagen/:nombreImagen', UserControllers.getImagen)

router.get('/recetas', UserControllers.getAllRecetas)
router.get('/recetas/favoritas/:idPerfil', UserControllers.getRecetasFavoritasWId)
router.post('/recetas/favorita', UserControllers.postRecetaFavorita)
router.delete('/recetas/favorita', UserControllers.deleteRecetaFavorita)

router.get('/recetas/ingredientes/:idReceta', UserControllers.getIngredientesWIdReceta)
router.get('/recetas/pasos/:idReceta', UserControllers.getPasosReceta)
router.get('/recetas/ingrediente/:idIngrediente', UserControllers.getRecetasWIdIngrediente)
router.post('/recetas/listaingredientes', UserControllers.postListaIngredientes)
// router.put('/recetas/listaingredientes', UserControllers.postListaIngredientes)



module.exports = router;