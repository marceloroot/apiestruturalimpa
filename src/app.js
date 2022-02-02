'use strict'
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

require('./database');///importante erro de lenght

const app = express();
var cors = require('cors')
const router = express.Router();



//Carrega rota
const indexRoute = require('./routes/index-route');


const usuarioRoute = require('./routes/usuario-routes');
const permissaoRoute = require('./routes/permissao-routes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(cors());


app.use('/usuario', usuarioRoute);
app.use('/permissao', permissaoRoute);

module.exports = app;

