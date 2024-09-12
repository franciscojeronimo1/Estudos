const express = require('express')
const app = express()


//  CREATE , READ , UPDATE , DELETE
//  POST     GET     PUT     DELETE

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/contato', (req, res) => {
    res.send('obrigaod por entrar em contato com a gente')
} )

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})