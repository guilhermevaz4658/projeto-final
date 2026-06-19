require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const cors = require('cors');
app.use(cors());
=======
>>>>>>> 40c34d3 (finalizando projeto)

//usuarios
const usuariosRoutes = require('./routes/usuarios.routes');
//login
const loginRoutes = require('./routes/auth.routes')

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/login', loginRoutes)

app.get('/', (req,res) =>{
    res.send('API do projeto final funcionando');
});

module.exports = app;