const dbService = require('../config/db.js')
const bcrypt = require('bcrypt');

module.exports = {
    getAllUsers : () => {

        sql = 'SELECT * FROM Users'
        return dbService.querypromise(sql)
    },

    getAllPerfiles : () => {

        sql = 'SELECT * FROM Perfil'
        return dbService.querypromise(sql)
    },

    getPerfilWId : (id) => {

        sql = `SELECT * FROM Perfil WHERE idperfil = ${id}`

        return dbService.querypromise(sql)
    },

}
