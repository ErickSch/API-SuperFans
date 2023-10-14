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

    // getUser : async (req, res) => {

    //     const id = req.params.id

    //     try{

    //         const  user = await UserServices.getUser(id);
    //         res.json({user})


    //     } catch (err){
    //         res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
    //     }
    // },

    // addUser : async (req, res) => {

    //     try{

    //         const  user = await UserServices.addUser( req.body);
    //         res.status(200).json({user})


    //     } catch (err){
    //         res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`})
    //     }
    // },

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