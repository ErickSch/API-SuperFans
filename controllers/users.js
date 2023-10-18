const UserServices = require('../services/users.js')

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

    // getPerfil : async (req, res) => {

    //     const id = req.params.id

    //     try{

    //         const  perfil = await UserServices.getPerfil(id);
    //         res.json({perfil})


    //     } catch (err){
    //         res.json({"message": `Error al obtener el perfil. Err: ${err}`})
    //     }
    // },

    postUser : async (req, res) => {

        try{

            const  user = await UserServices.postUser( req.body );
            res.status(200).json({user})


        } catch (err){
            res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
        }
    },

    // updateUser : async (req, res) => {

        
    //     try{
    //         const id = req.params.id
    //         const  user = await UserServices.updateUser(id, req.body);
    //         res.status(200).json({user})


    //     } catch (err){
    //         res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`})
    //     }
    // }



}