const express = require('express')
const router = express.Router()
const IngredientesControllers = require('../controllers/ingredientes.js')

router.get('/', IngredientesControllers.getAllIngredientes)

module.exports = router;