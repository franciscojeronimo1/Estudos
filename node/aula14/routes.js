const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const sobreController = require('./src/controllers/sobreController')

// Rotas de home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost) 

// Rotas de contato

route.get('/contato', contatoController.paginaInicial)

// Rota de  sobre

route.get('/sobre', sobreController.paginaInicial)


module.exports = route