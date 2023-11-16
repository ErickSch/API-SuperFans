const express = require('express')
const router = express.Router()
const TestsControllers = require('../controllers/tests.controllers.js')

// router.get('/', TestsControllers.getAllUsers)
// router.get('/perfiles', TestsControllers.getAllPerfiles)
router.get('/perfiles', TestsControllers.getPerfilWId)
router.get('/usersprisma', TestsControllers.getUsersPrisma)



module.exports = router;