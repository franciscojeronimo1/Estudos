import { Link } from 'react-router-dom'
export function NotFound() {
  return(
    <div>
      <h1>ops essa rota n existe!</h1>
      <Link to="/">acessar home</Link>
    </div>
  )
}