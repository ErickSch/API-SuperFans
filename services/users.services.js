const dbService = require('../config/db.js')

module.exports = {
    getAllUsers : () => {

        sql = 'SELECT * FROM Users'
        return dbService.querypromise(sql)
    },

    getUserWIdUser : (id) => {

        sql = `SELECT * FROM Users WHERE idUser = ${id}`

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

    updatePesoPerfilWId : (body, id) => {

        const { weight } = body

        sql = `UPDATE Perfil
        SET weight = ${weight}
        WHERE idperfil = ${id}`

        return dbService.querypromise(sql)
    },

    getImage : (id) => {
        return
        // sql = `SELECT * FROM Perfil WHERE idperfil = ${id}`

        // return dbService.querypromise(sql)
    },


    registerUser : (body) => {

        const { userId, username, pass } = body

        sql = `INSERT INTO Users (username, pass) VALUES ('${username}', '${pass}') RETURNING *`
        // sql = `INSERT INTO User (userId, username, password) VALUES (${userId}, '${username}', '${password}') RETURNING *`


        return dbService.querypromise(sql)
    },
    
    userExists : (username) => {
        sql = `SELECT * FROM users WHERE username='${username}'`
        
        return dbService.querypromise(sql)
    },

    getAllRecetas : () => {

        sql = 'SELECT idreceta, recetaname, tiempo, img FROM recetas'
        return dbService.querypromise(sql)
    },

    getRecetasFavoritasWId : (id) => {

        sql = `SELECT * FROM findFavoritos(${id})`

        return dbService.querypromise(sql)
    },
    
    postRecetaFavorita : (idPerfil, idReceta) => {

        sql = `SELECT * FROM add_favorite(${idPerfil}, ${idReceta})`

        return dbService.querypromise(sql)
    },

    deleteRecetaFavorita : (idPerfil, idReceta) => {

        sql = `SELECT * FROM del_favorite(${idPerfil}, ${idReceta})`

        return dbService.querypromise(sql)
    },

    
    getIngredientesWIdReceta : (idReceta) => {

        sql = `SELECT * FROM getingr(${idReceta})`

        return dbService.querypromise(sql)
    },

    getPasosReceta : (idPerfil, idReceta) => {

        sql = `SELECT * FROM add_favorite(${idPerfil}, ${idReceta})`

        return dbService.querypromise(sql)
    },

    getPasosReceta : (idReceta) => {

        sql = `SELECT * FROM getPasos(${idReceta})`

        return dbService.querypromise(sql)
    },

    // getRecetasWIdIngrediente : (idIngrediente) => {

    //     sql = `SELECT * FROM findreceta(${idIngrediente})`

    //     return dbService.querypromise(sql)
    // },

    // postListaIngredientes : (listaIngredientes) => {
    //     console.log(listaIngredientes)

    //     // sql = `SELECT * FROM findreceta(${listaIngredientes}])`
    //     sql = `SELECT * FROM findreceta(Array[${listaIngredientes}])`
    //     return dbService.querypromise(sql)
    // },

    postListaIngredientes : (listaIngredientes) => {
        // console.log(listaIngredientes)
        var stringListaIngredientes = "'" + listaIngredientes[0] + "'"
        if(listaIngredientes.len > 1){
            for(var i=1; i<listaIngredientes.length; i++){
                // console.log(listaIngredientes[i]);
                stringListaIngredientes += ", '" + listaIngredientes[i] + "'"
            }
        }
        // console.log(stringListaIngredientes)

        // sql = `SELECT * FROM findreceta(${listaIngredientes}])`
        sql = `SELECT * FROM findreceta(Array[${stringListaIngredientes}])`
        console.log(sql)
        return dbService.querypromise(sql)
        // return 
    }
}
