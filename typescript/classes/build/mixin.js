"use strict";
class Automovel {
    ligar() {
        console.log('automovel ligado');
    }
    desligar() {
        console.log("desligando automovel");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descriçao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
