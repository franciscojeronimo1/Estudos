"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        console.log("target: ", target);
        console.log("key: ", key);
        console.log("descriptor: ", descriptor);
    };
}
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`bem vindo ${this.nome}`);
    }
}
__decorate([
    verificaPessoa(16)
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa("Matheus F");
pessoa1.cadastrarPessoa();
