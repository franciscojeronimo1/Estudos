
interface CursoProps{
  id: string;
  nome: string;
  preco: number;

  promocao: (preco: number) => void;
}

function mostrPromocao(preco: number): void {
  console.log(`Promoçao no curso por apenas: R$ ${preco}`)
}

const novoCurso: CursoProps = {
 id: '1',
 nome: 'curso',
 preco: 650,
 promocao: mostrPromocao 
}

console.log(novoCurso.promocao(350))