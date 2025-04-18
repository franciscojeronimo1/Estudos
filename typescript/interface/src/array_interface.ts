

interface TecnoLogiaProps {
  id: string;
  nome: string;
  descricao?: string;
}

interface NomesProps {
  tecnologia: TecnoLogiaProps[]
}

let frontend: NomesProps = {
  tecnologia: [
    {id: '12', nome: 'react', descricao: 'biblioteca para criar interface'}
  ]
}

console.log(frontend.tecnologia)