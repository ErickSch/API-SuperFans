const dbService = require('../config/db.js')

module.exports = {
    getAllUsers : () => {

        sql = 'SELECT * FROM Users'
        return dbService.querypromise(sql)
    },

    getAllPerfiles : () => {

        sql = 'SELECT * FROM Perfil'
        return dbService.querypromise(sql)
    },

    getPerfilWUser : (username, password) => {

        sql = `SELECT * FROM getperfil('${username}', '${password}')`

        return dbService.querypromise(sql)
    },

    getPerfilWId : (id) => {

        sql = `SELECT * FROM Perfil WHERE idperfil = ${id}`

        return dbService.querypromise(sql)
    },

    // http://localhost:3000/users/perfiles/1
    updatePerfilWId : (body, id) => {

        const { fname } = body

        sql = `UPDATE Perfil
        SET fname = '${fname}'
        WHERE idperfil = ${id}`

        return dbService.querypromise(sql)
    },

    getImage : (id) => {
        return
        // sql = `SELECT * FROM Perfil WHERE idperfil = ${id}`

        // return dbService.querypromise(sql)
    },


    postUser : (body) => {

        const { userId, username, password } = body

        sql = `INSERT INTO Users (username, pass) VALUES ('${username}', '${password}') RETURNING *`
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


        return dbService.querypromise(sql)
    },

    getAllRecetas : () => {

        sql = 'SELECT recetaname, tiempo, img FROM recetas'
        return dbService.querypromise(sql)
    },

    getRecetasFavoritasWId : (id) => {

        sql = `SELECT * FROM findFavoritos(${id})`

        return dbService.querypromise(sql)
    }

}
