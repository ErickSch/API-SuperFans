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

    // getPerfil : (id) => {

    //     sql = `SELECT * FROM Perfil WHERE idperfil=${id}`


    //     return dbService.querypromise(sql)
    // },

    postUser : (body) => {

        const { userId, username, password } = body

        sql = `INSERT INTO Users (username, pass) VALUES ('${username}', '${password}') RETURNING *`
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


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