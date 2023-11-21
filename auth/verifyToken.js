const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')


    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

// Documentación de jwt-cracker
// https://lmammino.github.io/jwt-cracker/

// Listas de contraseñas
// https://github.com/danielmiessler/SecLists/tree/master

// npm install --global jwt-cracker

// jwt-cracker -t eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ -d darkweb2017-top10000.txt




module.exports = verifyToken;



