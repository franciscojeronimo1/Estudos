"use strict";
class Jogo {
    constructor(servidor) {
        this.id = '124';
        this.servidor = servidor;
    }
    get getServidorIP() {
        console.log('== metodo get');
        return this.servidor;
    }
    set setServidorIp(novoIp) {
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo('192.162.5.10');
GTA5.setServidorIp = '0000000000';
console.log(GTA5.getServidorIP);
