
import { useState } from 'react'
import { ButtonSubmit } from './button'
function App() {
const [message,setMessage] = useState("")

  async function handleRegister(formData) {

    await new Promise(resolve => setTimeout(resolve,2500))

    const nome = formData.get('nome')
    const tarefa = formData.get('tarefa')

     console.log(nome)
    console.log(tarefa)
    setMessage('Bem vindo' + nome + "tarefatual: " + tarefa)
  }

 
  return (
    <div>
    <h1>Form + action</h1>

    <form action={handleRegister}>
      <input type="text" name='nome' required  placeholder='digite seu nome...'/><br />
      <input type="text" name='tarefa' required placeholder='digite a tarefa...' /><br />

      <ButtonSubmit/>

      
    </form>

    <h2>{message}</h2>
    </div>
      
  )
}

export default App
