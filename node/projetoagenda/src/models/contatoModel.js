const mongoose = require('mongoose')

const ContatoSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String,
    nome: String,
    idade: Number

})


const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {

}

module.exports = Contato