const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.js')

router.get('/', UserControllers.getAllUsers)
router.get('/perfiles', UserControllers.getAllPerfiles)
router.get('/perfiles/:id', UserControllers.getPerfil)
router.post('/', UserControllers.postUser)
// router.post('/add', UserControllers.addUser)
// router.put('/update/:id', UserControllers.updateUser)

module.exports = router;