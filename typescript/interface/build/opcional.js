"use strict";
const novoUsuario = {
    nome: ' matheus',
    email: 'teste@teste.com',
    status: true,
};
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ nome: 'catau', email: 'cata@enai.com', status: true });
