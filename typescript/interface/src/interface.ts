

// let loja: object

// loja = {
//   nome: 'BK',
//   endereço: 'rua X',
//   status: true,
// }

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "Burguer K",
  endereco: 'Rua logo ali',
  status: true
}

console.log(BurguerK)