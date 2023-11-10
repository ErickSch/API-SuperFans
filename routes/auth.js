const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/auth.controllers.js')

// router.get('/', UserControllers.getAllUsers)
// router.get('/perfiles/:username/:password', UserControllers.getPerfilWUser)
router.post('/login/:username/:password', UserControllers.login)
router.get('/', UserControllers.getRutaProtegida)

module.exports = router;