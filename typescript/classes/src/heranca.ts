

class Usuario {
 protected id: number;
  nome: string;
  email: string;

  constructor(id: number ,nome: string, email: string) {
    this.id = id
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  cargo: string;
  nivel: number;

  constructor( id: number, nome:string, email: string, cargo: string, nivel: number) {

    super(id, nome, email)
    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo( cargo: string): void {
    console.log('alterando cargo')
    console.log('mudando Cargo  ' ,cargo)
  }

  acessarAdmin() {
    this.mudarCargo('designer')
  }

}

const usuario1 = new Admin(123,'Catau','catau@gmail.com','programador', 6)

usuario1.acessarAdmin()