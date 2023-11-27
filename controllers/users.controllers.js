// https://www.prisma.io/docs/concepts/components/prisma-client/crud#update

const UserServices = require('../services/users.services.js')
const path = require('path');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


module.exports = {
    // ENDPOINT EXTRA
    getAllUsers : async (req, res) => {
        try{
            const  usuarios = await prisma.users.findMany();
            res.json({usuarios})

        } catch (err){
            res.json({"message": `Error al obtener usuarios. Err: ${err}`})
        }

    },
    // ENDPOINT EXTRA
    getAllPerfiles : async (req, res, next) => {
        try{

            const  perfiles = await prisma.perfil.findMany();
            res.json({perfiles})
            
            
        } catch (err){
            res.json({"message": `Error al obtener los perfiles. Err: ${err}`})
        }
        
        
    },
    
    getPerfilWPerfilId : async (req, res) => {
        
        const id = req.params.id
        
        // const username = req.params.username
        // const password = req.params.password
        
        try{
            
            const  perfil = await prisma.perfil.findUnique({
                where: {
                    idperfil: parseInt(id),
                },
            });
            res.json({perfil})


        } catch (err){
            res.json({"message": `Error al obtener el perfil. Err: ${err}`})
        }
    },

    // getPerfilWUserId : async (req, res) => {

    //     const id = req.params.id

    //     try{

    //         const  perfil = await UserServices.getPerfilWId(id);
    //         res.json({perfil})


    //     } catch (err){
    //         res.json({"message": `Error al obtener el perfil. Err: ${err}`})
    //     }
    // },

    // Crear usuario
    // Falta implementar prisma

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

    // Poner que mande todo el perfil en la peticion
//-------- Cheacar (hacerlo que actualice todo el perfil)

    updatePerfilNameWIdPerfil : async (req, res) => {

        try{
            const idPerfil = req.params.id
            // const  perfil = await UserServices.updatePerfilWId( req.body, id);
            const perfil = await prisma.perfil.update({
                where: {
                    idperfil: parseInt(idPerfil),
                },
                data: {
                    fname: req.body.fname
                }
            })
            res.status(200).json({perfil})


        } catch (err){
            res.status(500).json({"message": `Error actualizar nombre. Err: ${err}`})
        }
    },

//-------- Cheacar (juntar con uno que actualice todo el perfil)
    updatePesoPerfil : async (req, res) => {

        try{
            const id = req.params.id
            const weight = await UserServices.updatePesoPerfilWId( req.body, id);
            res.status(200).json({weight})


        } catch (err){
            res.status(500).json({"message": `Error actualizar peso. Err: ${err}`})
        }
    },

//-------- Cheacar (Si se puede hacer algo con prisma)

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


    getAllRecetas : async (req, res) => {
        try{

            // const  recetas = await UserServices.getAllRecetas();
            const  recetas = await prisma.recetas.findMany();
            res.json({recetas})


        } catch (err){
            res.json({"message": `Error al obtener las recetas. Err: ${err}`})
        }


    },

    // users/recetas/favoritas/:idPerfil
    // getRecetasFavoritasWId usa una funcion
//----- Checar
    getRecetasFavoritasWIdPerfil : async (req, res) => {

        const idPerfil = req.params.idPerfil

        try{

            const  favoritas = await UserServices.getRecetasFavoritasWId(idPerfil);
            res.json({favoritas})


        } catch (err){
            res.json({"message": `Error al obtener el recetas favoritas. Err: ${err}`})
        }
    },

    // getIngredientesWIdReceta
//------- Checar porque usa una funcion    
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

}