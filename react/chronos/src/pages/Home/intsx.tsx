import { Link } from 'react-router-dom'

export function Home() {
  return(
    <h1>
      <Link to="/login">Fazer Login</Link>
    </h1>
  )
}