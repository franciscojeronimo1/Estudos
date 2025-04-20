

class Automovel {
  ligar(): void {
    console.log('automovel ligado')
  }

  desligar(): void {
    console.log("desligando automovel")
  }
}

class Especificacao{
  descriçao: string

  constructor(descricao: string) {
    this.descriçao = descricao
  }
}

class Carro {
  nome: string;

  constructor( nome: string) {
    this.nome = nome
  }
}

