const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000

const routerHome = require('./routes/home');
const routerLogin = require('./routes/login');

app.use(express.json());

//Rutes
app.use('/home', routerHome);
app.use('/login', routerLogin)

app.get('/', (req, res)=>{
    res.send('<h1>BIENVENIDO A LA PAGINA DE LA ESCUELA DE VIDA - AvivamientoSI</h1>')
})

app.listen(PORT, (req, res)=>{
    console.log(`App corriendo en el puerto ${PORT}`);
})