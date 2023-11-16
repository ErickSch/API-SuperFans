const dbService = require('../config/db.js')
const bcrypt = require('bcrypt');

module.exports = {
    getPerfilWId : (id) => {

        sql = `SELECT * FROM Perfil WHERE idperfil = ${id}`

        return dbService.querypromise(sql)
    },

}
