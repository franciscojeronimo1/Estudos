import { useState } from 'react'
import './App.css'
import { User } from './User'


function App() {
  const [message,setMessage] = useState('bem vindo ao projeto')

  return (
    <div>
      <h1 className='titulo' data-testid="header">Sujeito Catau</h1>
        <p>{message}</p>

        <button onClick={() => setMessage('Estudando testes com reactjs')}>Alterar menssagem</button>
        <hr />
        <br />
    <User/>

    </div>
  ) 
}

export default App
