import { useState } from 'react'
import './App.css'

function App() {
  const [message,setMessage] = useState('bem vindo ao projeto')

  return (
    <div>
      <h1 className='titulo' data-testid="header">Sujeito Catau</h1>
        <p>{message}</p>

        <h1>Sujeito Catau</h1>
        <button onClick={() => setMessage('Estudando testes com reactjs')}>Alterar menssagem</button>
    </div>
  ) 
}

export default App
