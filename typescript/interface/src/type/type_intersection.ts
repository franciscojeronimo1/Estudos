type info = {
  id: number;
  nome: string;
  descricao?: string;
}

const produtoInfo: info = {
  id:123,
  nome: 'placa de video'
}

type Categoria = {
  slug: string;
  quantidadeProduto: number;
}

const categoria1: Categoria = {
  slug: 'hardware0',
  quantidadeProduto: 2
}

type ProdutoInfo = info & Categoria;

const novoProduto: ProdutoInfo = {
  id: 232,
  nome: 'placa de video',
  quantidadeProduto: 1,
  slug: 'hardware',
  
}

console.log(novoProduto)