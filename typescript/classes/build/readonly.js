"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = '123';
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`id do usuario`, this.id);
    }
}
const ana = new Pessoa('Ana', 32);
ana.mostraId();
console.log(ana);
