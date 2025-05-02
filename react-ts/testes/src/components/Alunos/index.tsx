import { Nome } from '../Nome'
import { UserContext } from '../../contexts/user'
import { useContext } from 'react'

export function Alunos() {
  const {qtdAlunos, mudaNome} = useContext(UserContext)
  return(
    <div>
      <h3>QUANTIdade de alunos:{qtdAlunos}</h3>

     <button onClick={()=> mudaNome("matheus")}>
      Mudar nome
     </button>
     <br /><br />
      <Nome/>
    </div>
  )
}