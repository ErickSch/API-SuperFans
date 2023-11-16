const pg = require('pg')
const dotenv = require('dotenv')
const { PrismaClient } = require('@prisma/client');
dotenv.config();

const prisma = new PrismaClient();

module.exports = prisma;

// const Pool = pg.Pool;

// const pool = new Pool({

//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB,
//     password: process.env.DB_PASSWORD,
//     port: 5432
// })

// const querypromise = (sql) => {
//     return  new Promise((resolve, reject) => {
//         pool.query(sql, (error, results) => {
//             if (error){
//                 return reject(error)
//             }
//             return resolve(results.rows)
//         })
//     })
// }


// module.exports = {
//     pool,
//     querypromise
// }

const Pool = pg.Pool;

const pool = new Pool({
    connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
});

const querypromise = (sql) => {
    return  new Promise((resolve, reject) => {
        pool.query(sql, (error, results) => {
            if (error){
                return reject(error)
            }
            return resolve(results.rows)
        })
    })
}

module.exports = {
    pool,
    querypromise
}