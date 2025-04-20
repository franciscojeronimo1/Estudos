

class Jogo {
  private servidor: string;
  private id: string = '124'

  constructor(servidor: string) {
    this.servidor = servidor
  }

  get getServidorIP() {
    console.log('== metodo get')
    return this.servidor
  }

  set setServidorIp(novoIp: string) {
    this.servidor = novoIp
  }

}


const GTA5 = new Jogo('192.162.5.10')
GTA5.setServidorIp = '0000000000'
console.log(GTA5.getServidorIP)