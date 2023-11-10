const express = require('express')
const router = express.Router()
const IngredientesControllers = require('../controllers/ingredientes.controllers.js')

router.get('/', IngredientesControllers.getAllIngredientes)

module.exports = router;