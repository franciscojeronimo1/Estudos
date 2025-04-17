
interface CadastroProps{
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastroProps = {
  nome: ' matheus',
  email: 'teste@teste.com',
  status: true,
}

function novoUser(usuario: CadastroProps) {
  console.log(usuario.email)
}

novoUser({nome: 'catau', email: 'cata@enai.com',status: true})