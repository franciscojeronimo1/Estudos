import { useActionState } from 'react'

function App() {

  function handleSubmit(prevState, formData) {
    const nome= formData.get("nome")

     console.log(nome)
  }

  const [state,formAction] = useActionState(handleSubmit,null)
  return (
    <div>
      <h1>UseActionState</h1>
      
      <form action={formAction}> <input type="text " placeholder='Digite seu nome' name='nome' />
      <button type='submit'>Cadastrar</button>
      </ form>
    </div>
      
  )
}

export default App
