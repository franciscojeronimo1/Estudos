module.exports = class Cachoro {
    constructor(nome) {
        this.nome = nome
    }
    latir() {
        console.log(`${this.nome} esta latindo`)
    }
}