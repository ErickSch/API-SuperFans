const express = require('express')
const router = express.Router()
const TestsControllers = require('../controllers/tests.controllers.js')

router.get('/', TestsControllers.getAllUsers)
router.get('/perfiles', TestsControllers.getAllPerfiles)
router.get('/perfiles/:id', TestsControllers.getPerfilWId)


module.exports = router;