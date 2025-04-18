

interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoProps = {
  id: '123',
  nome: "Leaf 4 dead 2",
  descricao: "Jogo de acao e tiro",
  plataforma: [ "PS5", "PC"]
}

interface DLC extends JogoProps{
  novoConteudo: string[];
}

const left4deadDLC: DLC = {
  id: '90',
  nome: ' novo mapa',
  descricao: ' 4 novos mapa',
  plataforma: ['PS5', 'PC'],
  novoConteudo: [ "modo Coop", "mais 5 horas de jogo"]
}

console.log(left4deadDLC)