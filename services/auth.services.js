const dbService = require('../config/db.js')


module.exports = {
    verifyUser : (body) => {

        const { username, pass } = body

        sql = `SELECT username, pass, iduser FROM users WHERE username = '${username}'`;
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


        return dbService.querypromise(sql)
    },

    getUserWUsernameUser : (username) => {

        sql = `SELECT username, pass, iduser FROM Users WHERE username = '${username}'`

        return dbService.querypromise(sql)
    },
}