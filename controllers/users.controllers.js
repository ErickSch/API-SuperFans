const UserServices = require('../services/users.services.js')
const path = require('path');

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


    // postUser : async (req, res) => {

    //     try{

    //         const  user = await UserServices.postUser( req.body );
    //         res.status(200).json({user})


    //     } catch (err){
    //         res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
    //     }
    // },

    // Crear usuario
    registerUser : async (req, res) => {
        //  Registro
        // // validate user
        // const { error } = schemaRegister.validate(req.body)
        
        // if (error) {
        //     return res.status(400).json({error: error.details[0].message})
        // }

        const isEmailExist = await User.findOne({ email: req.body.email });
        if (isEmailExist) {
            return res.status(400).json({error: 'Email ya registrado'})
        }

        // hash contraseña
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const user = {
            email: req.body.email,
            password: password
        };
        try {
            const savedUser = await user.save();
            res.json({
                // error: null,
                error: null,
                data: savedUser
            })
        } catch (error) {
            res.status(400).json({error})
        }




        // try{

        //     const  user = await UserServices.postUser( req.body );
        //     res.status(200).json({user})


        // } catch (err){
        //     res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
        // }
    },

    updatePerfil : async (req, res) => {

        try{
            const id = req.params.id
            const  perfil = await UserServices.updatePerfilWId( req.body, id);
            res.status(200).json({perfil})


        } catch (err){
            res.status(500).json({"message": `Error al crear usuario. Err: ${err}`})
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

}