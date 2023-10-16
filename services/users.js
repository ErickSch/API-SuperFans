const dbService = require('../config/db.js')

module.exports = {
    getAllUsers : () => {

        sql = 'SELECT * FROM User'
        return dbService.querypromise(sql)
    },

    getAllPerfiles : () => {

        sql = 'SELECT * FROM Perfil'
        return dbService.querypromise(sql)
    },

    getPerfil : (id) => {

        sql = `SELECT * FROM Perfil WHERE idperfil=${id}`


        return dbService.querypromise(sql)
    },

    // addUser : (body) => {


    //     const { email } = body

    //     sql = `INSERT INTO usuario (email) VALUES ('${email}') RETURNING *`


    //     return dbService.querypromise(sql)
    // },

    // updateUser : (id, body) => {


    //     const { email } = body

    //     sql = `UPDATE usuario SET email = '${email}' WHERE id = ${id} RETURNING *`


    //     return dbService.querypromise(sql)
    // }
}