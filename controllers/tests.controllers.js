const TestsServices = require('../services/tests.services.js')
const path = require('path');

module.exports = {
    getAllUsers : async (req, res, next) => {
        try{

            const  users = await TestsServices.getAllUsers();
            res.json({users})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }

    },
    getAllPerfiles : async (req, res, next) => {
        try{

            const  perfiles = await TestsServices.getAllPerfiles();
            res.json({perfiles})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }


    },

    getPerfilWId : async (req, res) => {

        const id = req.params.id

        try{

            const  perfil = await TestsServices.getPerfilWId(id);
            res.json({perfil})


        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },



}