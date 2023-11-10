const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

// import routes
const dashboadRoutes = require('./routes/auth');
const verifyToken = require('./routes/verifyToken');

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// route middlewares
// app.use('/auth', verifyToken, dashboadRoutes);
app.use('/users', verifyToken, dashboadRoutes);




app.get('/', (req, res) => {
  res.send('Pagina inicial webAPI')
})

// Aqui estan todas la rutas
app.use(require('./routes/routes'))

app.listen(port, () => {
  console.log(`Escuchando al puerto ${port}`)
})