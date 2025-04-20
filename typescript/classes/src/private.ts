

class Conta {
  private limite: number = 450

  private aumentarLimit(quantidade: number) {
    if(quantidade < 1000) {
      this.limite = quantidade
      console.log(`Agora seu limit é: ${this.limite}`)
    } else{
      console.log('limite reprovado')
    }
  }

  protected solicitarLimite(quantidade: number) {
    return this.aumentarLimit(quantidade)
  }

  solicitarLimitApp(estaAutenticado: boolean, quantidade: number) {
    if(estaAutenticado) {
      this.aumentarLimit(quantidade)
    } else{
      return false
    }
  }
}

class BancoAfiliado extends Conta {
  limitAfiliado() {
    return this.solicitarLimite(1500)
  }
}

const fulano = new Conta()

fulano.solicitarLimitApp(true, 700)





const joao = new BancoAfiliado()
joao.limitAfiliado()

console.log(joao)