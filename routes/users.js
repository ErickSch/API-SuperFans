const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.controllers.js')

router.get('/', UserControllers.getAllUsers)
router.get('/perfiles', UserControllers.getAllPerfiles)
router.get('/perfiles/:username/:password', UserControllers.getPerfilWUser)
router.get('/perfiles/:id', UserControllers.getPerfilWId)
router.get('/image/:image', UserControllers.getImage)
router.get('/recetas', UserControllers.getAllRecetas)
router.post('/', UserControllers.registerUser)
router.put('/perfiles/:id', UserControllers.updatePerfil)

module.exports = router;