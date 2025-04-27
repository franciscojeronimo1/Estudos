import { Link

 } from 'react-router-dom'
export function Contato() {
  return(
    <div>
      <h1>Bem vindo a pagina contatos</h1>
      <h3>telefonexx325434532</h3>
      <hr />
      <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/">Home</Link>
    </div>
  )
}