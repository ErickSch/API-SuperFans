// const IngredientesServices = require('../services/auth.js')
const jwt = require("jsonwebtoken")

module.exports = {

    getAllIngredientes : async (req, res) => {
        try{

            const  ingredientes = await IngredientesServices.getAllIngredientes();
            res.json({ingredientes})


        } catch (err){
            res.json({"message": `Error al obtener los usuarios. Err: ${err}`})
        }


    },

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

        const username = req.params.username
        const password = req.params.password

        const user = {
            _id: 1,
            username: username,
            password: password
        }
        
        const userDB = {
            _id: 1,
            username: "Erick",
            password: "123"
        }

        
        if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });
    
        // const validPassword = await bcrypt.compare(req.body.password, user.password);
        const validPassword = user.password == userDB.password;

        if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
        
        // res.json({
        //     error: null,
        //     data: 'exito bienvenido'
        //     // token: token
        // })
        
        
        // create token
        console.log(process.env.TOKEN_SECRET)
        const token = jwt.sign({
            name: user.username,
            id: user._id,
            exp: Date.now() + 60 * 1000
        }, process.env.TOKEN_SECRET)

        res.header('auth-token', token).json({
            error: null,
            data: {token}
        })
        

    },

    getRutaProtegida : (req, res) => {
        res.json({
            error: null,
            data: {
                title: 'mi ruta protegida',
                user: req.user
            }
        })
    }

    
}