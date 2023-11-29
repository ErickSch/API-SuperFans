
const dbService = require('../config/db.js')

const onlyLettersPattern = /^[A-Za-z]+$/;


module.exports = {
    verifyUser : (body) => {

        const { username, pass } = body

        if(!username.match(onlyLettersPattern)){
            return res.status(400).json({ err: "Error: Nombre con formato incorrecto"})
          }

        sql = `SELECT username, pass, iduser FROM users WHERE username = '${username}'`;
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


        return dbService.querypromise(sql)
    },

    getUserWUsernameUser : (username) => {

        if(!username.match(onlyLettersPattern)){
            return res.status(400).json({ err: "Error: Nombre con formato incorrecto"})
          }

        sql = `SELECT username, pass, iduser FROM Users WHERE username = '${username}'`

        return dbService.querypromise(sql)
    },
}