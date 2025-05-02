import { UserContext } from '../../contexts/user'
import { useContext } from 'react'

export function Nome() {
  const {aluno} = useContext(UserContext)
  return(
    <div>
      <h3>Aluno:{aluno}</h3>
      <br />
    
    </div>
  )
}