"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "Aberto") {
            console.log('loja aberta');
        }
        else {
            console.log('loja fechada');
        }
    }
}
const redBurguer = new Loja('red burguer', 'lanches');
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(1, "suco", 'hamburguer', 'coca 2l');
redBurguer.mudarStatus('Aberto');
console.log(retornoLoja);
