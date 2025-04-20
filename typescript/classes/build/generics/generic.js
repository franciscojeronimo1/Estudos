"use strict";
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados('15');
const repo2 = repositorio();
repo2.setDados("25");
console.log(repo2.getDados());
