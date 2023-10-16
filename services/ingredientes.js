const dbService = require('../config/db.js')

module.exports = {

    getAllIngredientes : () => {

        sql = 'SELECT * FROM Ingredientes'
        return dbService.querypromise(sql)
    }
}