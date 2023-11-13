const UserServices = require('../services/users.services.js')
const path = require('path');
const bcrypt = require('bcrypt');


module.exports = {
    getAllUsers : async (req, res, next) => {
        try{

            const  users = await UserServices.getAllUsers();
            res.json({users})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }

    },
    getAllPerfiles : async (req, res, next) => {
        try{

            const  perfiles = await UserServices.getAllPerfiles();
            res.json({perfiles})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }


    },

    getPerfilWUser : async (req, res) => {

        const username = req.params.username
        const password = req.params.password

        try{

            const  perfil = await UserServices.getPerfilWUser(username, password);
            res.json({perfil})


        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },

    getPerfilWId : async (req, res) => {

        const id = req.params.id

        try{

            const  perfil = await UserServices.getPerfilWId(id);
            res.json({perfil})


        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },

    // Crear usuario
    registerUser : async (req, res) => {

        createUser : try{
            const  userExists = await UserServices.userExists( req.body.username );

            // Validar que el username no ha sido registrado
            if (userExists.length > 0){
                res.status(500).json({"message": "El nombre de usuario ya ha sido registrado"})
                break createUser;
            }

            // Hash de la contrasena
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.pass, salt);

            // Descomentar cuando quepan las contrasenas hashed en la bd
            // const user = {
            //     username: req.body.username,
            //     pass: password
            // };
            
            const user = {
                username: req.body.username,
                pass: req.body.pass
            };

            const  userRegistered = await UserServices.registerUser( user );


            res.status(200).json({userRegistered})


        } catch (err){
            res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
        }
    },

    updatePerfil : async (req, res) => {

        try{
            const id = req.params.id
            const  perfil = await UserServices.updatePerfilWId( req.body, id);
            res.status(200).json({perfil})


        } catch (err){
            res.status(500).json({"message": `Error actualizar nombre. Err: ${err}`})
        }
    },

    updatePesoPerfil : async (req, res) => {

        try{
            const id = req.params.id
            const weight = await UserServices.updatePesoPerfilWId( req.body, id);
            res.status(200).json({weight})


        } catch (err){
            res.status(500).json({"message": `Error actualizar peso. Err: ${err}`})
        }
    },

    getImage : async (req, res) => {

        const options = {
            root: path.join(__dirname)
        }
        const fileName = 'images/tacos.jpg';

        const imageName = req.params.image

        try{

            // const  image = await UserServices.getImage(imageName);
            // res.json({perfil})
            res.sendFile(fileName, options)


        } catch (err){
            res.json({"message": `Error al obtener el imagen. Err: ${err}`})
        }
    },

    getAllRecetas : async (req, res, next) => {
        try{

            const  recetas = await UserServices.getAllRecetas();
            res.json({recetas})


        } catch (err){
            res.json({"message": `Error al obtener los recetas. Err: ${err}`})
        }


    },

    getRecetasFavoritasWId : async (req, res) => {

        const id = req.params.id

        try{

            const  favoritas = await UserServices.getRecetasFavoritasWId(id);
            res.json({favoritas})


        } catch (err){
            res.json({"message": `Error al obtener el recetas favoritas. Err: ${err}`})
        }
    },

    getIngredientesWIdReceta : async (req, res) => {

        const id = req.params.id

        try{

            const  ingredientes = await UserServices.getIngredientesWIdReceta( id );
            res.json({ingredientes})


        } catch (err){
            res.json({"message": `Error al obtener ingredientes de la receta ${id}. Err: ${err}`})
        }
    },

}