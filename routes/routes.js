const express = require('express')
const router = express.Router()

router.use('/users', require('./users.js'))
router.use('/ingredientes', require('./ingredientes.js'))
router.use('/auth', require('./auth.js'))


module.exports = router;