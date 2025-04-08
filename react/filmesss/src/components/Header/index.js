import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link classname="logo" to="/">Prime flix</Link>
      <Link classname="favoritos" to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header