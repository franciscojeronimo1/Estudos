const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String,
    nome: String,
    idade: Number

})


const HomeModel = mongoose.model('Home', HomeSchema)

class Home {

}

module.exports = Home