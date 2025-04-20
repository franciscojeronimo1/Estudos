


class Pessoa {
 readonly id: string = '123';
  nome: string;
  idade: number

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }

  mostraId() {
    console.log(`id do usuario`, this.id)
  }

}

const ana = new Pessoa('Ana', 32)
ana.mostraId()
console.log(ana)