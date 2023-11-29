const express = require('express')
const router = express.Router()
const AuthControllers = require('../controllers/auth.controllers.js')

// router.get('/', AuthControllers.getAllUsers)
// router.get('/perfiles/:username/:password', AuthControllers.getPerfilWUser)
// router.post('/login/:username/:password', AuthControllers.login)
router.post('/login', AuthControllers.login)
router.get('/login/verifyUser', AuthControllers.verifyUser)
router.post('/login/verifyUser', AuthControllers.verifyUser)
// router.get('/', AuthControllers.getRutaProtegida)

module.exports = router;