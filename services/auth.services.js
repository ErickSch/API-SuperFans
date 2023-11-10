
const dbService = require('../config/db.js')

module.exports = {
    verifyUser : (body) => {

        const { username, pass } = body

        sql = `SELECT * FROM users WHERE username = '${username}' AND pass = '${pass}'`;
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


        return dbService.querypromise(sql)
    },
}