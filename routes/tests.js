const express = require('express')
const router = express.Router()
const TestsControllers = require('../controllers/tests.controllers.js')

// router.get('/', TestsControllers.getAllUsers)
// router.get('/perfiles', TestsControllers.getAllPerfiles)
router.get('/perfiles', TestsControllers.getPerfilWId)
router.get('/usersprisma', TestsControllers.getUsersPrisma)
router.get('/usersprisma/:idUser', TestsControllers.getUsersPrismaWId)
router.post('/userprisma', TestsControllers.getUserPrisma)



module.exports = router;