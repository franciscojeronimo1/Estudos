import { Link } from 'react-router-dom'

export function Home() {
  return(
    <div><h1>Home
      <p><Link to="/detail">Detalhes</Link></p>
      </h1></div>
  )
}

