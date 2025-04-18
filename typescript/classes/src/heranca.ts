

class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor( nome:string, email: string, cargo: string, nivel: number) {

    super(nome, email)
    this.cargo = cargo;
    this.nivel = nivel;
  }

  mudarCargo(): void {
    console.log('alterando cargo')
  }

}

const usuario1 = new Admin('Catau','catau@gmail.com','programador', 6)

usuario1.cargo = 'design'
console.log(usuario1)