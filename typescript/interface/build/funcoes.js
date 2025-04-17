"use strict";
function mostrPromocao(preco) {
    console.log(`Promoçao no curso por apenas: R$ ${preco}`);
}
const novoCurso = {
    id: '1',
    nome: 'curso',
    preco: 650,
    promocao: mostrPromocao
};
console.log(novoCurso.promocao(350));
