"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimit(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limit é: ${this.limite}`);
        }
        else {
            console.log('limite reprovado');
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimit(quantidade);
    }
    solicitarLimitApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimit(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limitAfiliado() {
        return this.solicitarLimite(1500);
    }
}
const fulano = new Conta();
fulano.solicitarLimitApp(true, 700);
const joao = new BancoAfiliado();
joao.limitAfiliado();
console.log(joao);
