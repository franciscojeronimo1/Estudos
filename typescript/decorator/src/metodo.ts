

function verificaPessoa(idade: number){
  return (target: any, key: string , descriptor: PropertyDescriptor) => {
    console.log("target: ", target)
    console.log("key: ", key)
    console.log("descriptor: ", descriptor)
  }
}

class Pessoa{
  nome: string;

  constructor(nome: string) {
    this.nome = nome
  }

  @verificaPessoa(16)
  cadastrarPessoa() {
    console.log(`bem vindo ${this.nome}`)
  }
}

const pessoa1 = new Pessoa("Matheus F")

pessoa1.cadastrarPessoa()