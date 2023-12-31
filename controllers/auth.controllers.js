// const IngredientesServices = require('../services/auth.js')
const authServices = require('../services/auth.services.js');
const AuthServices = require('../services/auth.services.js')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

// const onlyLettersPattern = /^[A-Za-z]+$/;
// const onlyLettersPattern = /^([a-zA-Z0-9 _-]+)$/;
const onlyAlphanumericPattern = /^([a-zA-Z0-9]+)$/;
// const onlyLettersPattern = /^[a-z0-9]+$/i;

module.exports = {

    login : async (req, res) => {

        /* LOG IN con contrasena hasheada
                try {
        const user = await getUserByGameUser(gameUser);

        // Caso en el que no haya nombres de usuario registrados
        if (!user) {
            console.log('No gameUsers registered');
            return cb(null, false, { message: 'No gameUsers registered' });
        }
        // Comparar contraseña ingresada encriptada con contraseña del usuario ingresado.
        const hashedPwd = user.pwd;
        const pwdMatch = await bcrypt.compare(pwd, hashedPwd);

        // Caso en el que las contraseñas no coincidan.
        if (!pwdMatch) {
            console.log('Wrong password');
            return cb(null, false, { message: 'Wrong password' });
        }

        return cb(null, user);
        } catch (error) {
        console.error('Error logging in:', error);
        return cb(error);
        }
        */


        // validaciones

        // const { error } = schemaLogin.validate(req.body);
        // if (error) return res.status(400).json({ error: error.details[0].message })
        
        // const user = await User.findOne({ email: req.body.email });
        
        // const username = req.params.username
        // const password = req.params.password

        const userBody = {
            username: req.body.username,
            pass: req.body.pass
        }

        if (!userBody.username) {
            return res.status(400).json({ error: 'Ingresa un nombre de usuario.' })
        } 
        else if(!userBody.username.match(onlyAlphanumericPattern)){
            return res.status(400).json({ err: "Error: El nombre debe de contener solo caracteres alfanuméricos."})
        }


       var userDB = await authServices.getUserWUsernameUser(userBody.username);
       var userDB = userDB[0];
       
       if (!userDB) return res.status(400).json({ error: 'Nombre de usuario no válido.' })

       const validUsername = userBody.username == userDB.username;

       if (!validUsername) return res.status(400).json({ error: 'Nombre de usuario no válido.' })


    //    console.log(userDB.username)

    //    console.log(userDB.pass)


        if (!userBody) return res.status(400).json({ error: 'Usuario o contraseña incorrectos.' });
    
        // const validPassword = await bcrypt.compare(userBody.pass, userDB.pass);
        const validPassword = userBody.pass == userDB.pass;


        if (!validPassword) return res.status(400).json({ error: 'Usuario o contraseña incorrectos.' })
        
        // create token
        const token = jwt.sign({
            // id: userDB.iduser,
            id: 1,
            exp: Date.now() + 60 * 1000
        }, process.env.TOKEN_SECRET)

        res.header('auth-token', token).json({
            // error: null,
            // error: 1,
            // id: userDB.iduser,
            id: 1,
            data: {token}
        })
        

    },

    verifyUser : async (req, res) => {

        try{
            const  user = await AuthServices.verifyUser( req.body );
            res.status(200).json({user})


        } catch (err){
            res.status(500).json({"message": `Error al verificar usuario. Err: ${err}`})
        }
    },

    
}