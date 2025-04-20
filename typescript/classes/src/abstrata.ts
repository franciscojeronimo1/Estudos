

type DadosConta = {
  nome: string;
  numero: string;
  endereço: string;
}

abstract class ContaBanco{
 abstract abrirConta(dados: DadosConta): boolean; 

  
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
      return true
  }
}