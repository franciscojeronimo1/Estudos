"use strict";
function cadastro(email, senha, nome = 'aluno', idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro('teset@teste.com', '1232');
function nomes(...nome) {
    nome.map(nome => {
        console.log(nome);
    });
}
nomes('joao', 'maria', 'fernando');
