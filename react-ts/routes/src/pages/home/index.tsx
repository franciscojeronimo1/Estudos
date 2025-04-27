import { Link } from 'react-router-dom'

export function Home(){
  return(
    <div>
      <h1>bem vindo a pagina home!</h1>
      <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contatos</Link>
    </div>
  )
}