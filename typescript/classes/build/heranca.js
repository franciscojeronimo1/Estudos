"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log('alterando cargo');
        console.log('mudando Cargo  ', cargo);
    }
    acessarAdmin() {
        this.mudarCargo('designer');
    }
}
const usuario1 = new Admin(123, 'Catau', 'catau@gmail.com', 'programador', 6);
usuario1.acessarAdmin();
