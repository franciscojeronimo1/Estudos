import { useState } from 'react'



function App() {
  const [nome, setNome] = useState('')

  function handleName() {
    const name = nome
  }

  return (
    <div>
      <input type="text" placeholder='digite seu nome' value={nome}  onChange={(e)=> setNome(e.target.value)}/>
      <button onClick={handleName} >clique</button>
      <h1>Ola {nome}</h1>
    </div>
  )
}

export default App
