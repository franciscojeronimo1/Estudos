

interface NovoProduto <V extends number>  {
  nome: string;
  preco: V;
}

const arroz: NovoProduto<number> = {
  nome: 'Arroz branco',
  preco: 1500
}
