const UserServices = require('../services/users.services.js')
const path = require('path');
const bcrypt = require('bcrypt');

const onlyLettersPattern = /^[A-Za-z]+$/;
const onlyAlphanumericPattern = /^([a-zA-Z0-9]+)$/;



module.exports = {
    getAllUsers : async (req, res) => {
        try{

            const  users = await UserServices.getAllUsers();
            res.json({users})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }

    },

    // getUserWIdUser : async (req, res) => {

    //     const idUser = req.params.idUser
    //     console.log(idUser)

    //     if(isNaN(Number(idUser))) {
    //         return res.status(400).json({ err: "Id en formato incorrecto"})
    //     }
    //     try{
    //         const  user = await UserServices.getPerfilWId(idUser);
    //         res.json({user})

    //     } catch (err){
    //         res.json({"message": `Error al obtener el usuario. Err: ${err}`})
    //     }
    // },

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

        if(isNaN(Number(id))) {
            return res.status(400).json({ err: "Id no válido"})
        }

        try{

            const  perfil = await UserServices.getPerfilWId(id);
            res.json({perfil})


        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },

    registerUser : async (req, res) => {

        createUser : try{


            if(!req.body.username.match(onlyAlphanumericPattern)){
              return res.status(400).json({ err: "No special characters and no numbers, please!"})
            }

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
            const user = {
                username: req.body.username,
                pass: password
            };
            
            // const user = {
            //     username: req.body.username,
            //     pass: req.body.pass
            // };

            await UserServices.registerUser( user );


            res.status(200).json({"message": `Usuario registrado correctamente.`})


        } catch (err){
            res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
        }
    },

    updateNombrePerfilWId : async (req, res) => {
        const id = req.params.id

        if(isNaN(Number(id))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{
            const  perfil = await UserServices.updateNombrePerfilWId( req.body, id);
            res.status(200).json({perfil})


        } catch (err){
            res.status(500).json({"message": `Error actualizar nombre. Err: ${err}`})
        }
    },


    updateAlturaPerfilWId : async (req, res) => {
        const id = req.params.id

        if(isNaN(Number(id))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{
            await UserServices.updateAlturaPerfilWId( req.body, id);
            res.status(200).json({"message": `Altura actualizada correctamente.`})

        } catch (err){
            res.status(500).json({"message": `Error actualizar nombre. Err: ${err}`})
        }
    },

    updatePesoPerfilWId : async (req, res) => {
        const id = req.params.id

        if(isNaN(Number(id))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{
            await UserServices.updatePesoPerfilWId( req.body, id);
            res.status(200).json({"message": `Peso actualizado correctamente.`})


        } catch (err){
            res.status(500).json({"message": `Error actualizar peso. Err: ${err}`})
        }
    },
    
    updateEdadPerfilWId : async (req, res) => {
        const id = req.params.id

        if(isNaN(Number(id))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{
            await UserServices.updateEdadPerfilWId( req.body, id);
            res.status(200).json({"message": `Edad actualizada correctamente.`})


        } catch (err){
            res.status(500).json({"message": `Error actualizar peso. Err: ${err}`})
        }
    },

    getImagen : async (req, res) => {

        const imageName = req.params.nombreImagen

        const options = {
            root: path.join(__dirname, '..', 'static', 'images')
            // root: 'static/images'
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

    getAllRecetas : async (req, res) => {
        try{

            const  recetas = await UserServices.getAllRecetas();
            res.json({recetas})

        } catch (err){
            res.json({"message": `Error al obtener los recetas. Err: ${err}`})
        }

    },

    getRecetasFavoritasWId : async (req, res) => {

        const idPerfil = req.params.idPerfil

        if(isNaN(Number(idPerfil))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{

            const  favoritas = await UserServices.getRecetasFavoritasWId(idPerfil);
            res.json({favoritas})


        } catch (err){
            res.json({"message": `Error al obtener el recetas favoritas. Err: ${err}`})
        }
    },

    deleteRecetaFavorita : async (req, res) => {

        const { idPerfil, idReceta } = req.body

        if(isNaN(Number(idPerfil)) || isNaN(Number(idReceta))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{

            await UserServices.deleteRecetaFavorita(idPerfil, idReceta);
            res.status(200).json({"message": `Receta removida de favoritos del perfil correctamente.`})

        } catch (err){
            res.json({"message": `Error al obtener recetas favoritas. Err: ${err}`})
        }
    },

    

    getIngredientesWIdReceta : async (req, res) => {

        const idReceta = req.params.idReceta

        if(isNaN(Number(idReceta))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{

            const  ingredientes = await UserServices.getIngredientesWIdReceta( idReceta );
            res.json({ingredientes})

        } catch (err){
            res.json({"message": `Error al obtener ingredientes de la receta ${idReceta}. Err: ${err}`})
        }
    },

    postRecetaFavorita : async (req, res) => {
        const { idPerfil, idReceta } = req.body

        if(isNaN(Number(idPerfil)) || isNaN(Number(idReceta))) {
            return res.status(400).json({ err: "Id en formato incorrecto"})
        }

        try{
            // const  recetaAgregada = await UserServices.postRecetaFavorita( idPerfil, idReceta );
            await UserServices.postRecetaFavorita( idPerfil, idReceta );

            // res.status(200).json({recetaAgregada})
            res.status(200).json({"message": `Receta agregada como favorita a perfil correctamente.`})


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
            const listaIngredientes = req.body
            // const listaIngredientes = ["Platano", "salt"];

            for(var i=0; i<listaIngredientes.length; i++){
                if(!listaIngredientes[i].match(onlyAlphanumericPattern)){
                    return res.status(400).json({ err: "Ingrediente con formato no válido"});
                }
            }
            
            // console.log(listaIngredientes)
            const listaIngredientesPost = await UserServices.postListaIngredientes( listaIngredientes );
            res.status(200).json({listaIngredientesPost})


        } catch (err){
            res.status(500).json({"message": `Error al agregar receta favorita. Err: ${err}`})
        }
    },

}