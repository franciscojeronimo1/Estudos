

interface ProdutoProps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoProps = {
  id: '1',
  nome: 'tenis',
  descricao: 'super tenis'

}


console.log(produto1)