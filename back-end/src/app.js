const express = require('express');
const app = express();

app.use(express.json());

//usuarios
const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/api/usuarios', usuariosRoutes);

app.get('/', (req,res) =>{
    res.send('API do projeto final funcionando');
});

module.exports = app;