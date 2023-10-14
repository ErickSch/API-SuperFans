const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
  res.send('Pagina inicial webAPI')
})

// Aqui estan todas la rutas
app.use(require('./routes/routes'))

app.listen(port, () => {
  console.log(`Escuchando al puerto ${port}`)
})