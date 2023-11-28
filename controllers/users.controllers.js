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

    getUserWIdUser : async (req, res) => {

        const idUser = req.params.idUser

        try{

            const  user = await UserServices.getPerfilWId(idUser);
            res.json({user})


        } catch (err){
            res.json({"message": `Error al obtener el usuario. Err: ${err}`})
        }
    },

    getUserWUsernameUser : async (req, res) => {

        const username = req.params.username

        try{

            const  user = await UserServices.getUserWUsernameUser(username);
            res.json({user})


        } catch (err){
            res.json({"message": `Error al obtener el usuario. Err: ${err}`})
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

    getImagen : async (req, res) => {

        const imageName = req.params.nombreImagen

        const options = {
            root: path.join(__dirname, '..', 'static', 'images')
        }
        // const fileName = 'images/tacos.jpg';


        try{

            // const  image = await UserServices.getImage(imageName);
            // res.json({perfil})
            res.sendFile(imageName, options)


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

        const idPerfil = req.params.idPerfil

        try{

            const  favoritas = await UserServices.getRecetasFavoritasWId(idPerfil);
            res.json({favoritas})


        } catch (err){
            res.json({"message": `Error al obtener el recetas favoritas. Err: ${err}`})
        }
    },

    deleteRecetaFavorita : async (req, res) => {

        const {idPerfil, idReceta} = req.body

        try{

            const  deleteFavoritas = await UserServices.deleteRecetaFavorita(idPerfil, idReceta);
            res.json({deleteFavoritas})


        } catch (err){
            res.json({"message": `Error al obtener el recetas favoritas. Err: ${err}`})
        }
    },

    

    getIngredientesWIdReceta : async (req, res) => {

        const idReceta = req.params.idReceta

        try{

            const  ingredientes = await UserServices.getIngredientesWIdReceta( idReceta );
            res.json({ingredientes})


        } catch (err){
            res.json({"message": `Error al obtener ingredientes de la receta ${idReceta}. Err: ${err}`})
        }
    },

        // Crear usuario
    postRecetaFavorita : async (req, res) => {

        try{
            const { idPerfil, idReceta } = req.body
            const  recetaAgregada = await UserServices.postRecetaFavorita( idPerfil, idReceta );

            res.status(200).json({recetaAgregada})


        } catch (err){
            res.status(500).json({"message": `Error al agregar receta favorita. Err: ${err}`})
        }
    },

    getPasosReceta : async (req, res) => {

        const idReceta = req.params.idReceta

        try{

            const  pasosReceta = await UserServices.getPasosReceta( idReceta );
            res.json({pasosReceta})


        } catch (err){
            res.json({"message": `Error al obtener pasos de receta ${idReceta}. Err: ${err}`})
        }
    },

    getRecetasWIdIngrediente : async (req, res) => {

        const idIngrediente = req.params.idIngrediente

        try{

            const  recetas = await UserServices.getRecetasWIdIngrediente( idIngrediente );
            res.json({recetas})


        } catch (err){
            res.json({"message": `Error al obtener recetas de ingrediente ${idIngrediente}. Err: ${err}`})
        }
    },

    postListaIngredientes : async (req, res) => {

        try{
            const listaIngredientes = req.body.listaIngredientes
            
            console.log(listaIngredientes)
            const listaIngredientesPost = await UserServices.postListaIngredientes( listaIngredientes );
            // console.log(listaIngredientes)
            // res.status(200).json({listaIngredientes})
            res.status(200).json(listaIngredientesPost)
            // res.status(200).json(req.body)


        } catch (err){
            res.status(500).json({"message": `Error al agregar receta favorita. Err: ${err}`})
        }
    },

}