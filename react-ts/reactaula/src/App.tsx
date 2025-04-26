import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {

  return (
    <div className='container'>
    <img src={logoImg} alt="logo frases" className='logo' />
    <h2 className="title">Categorias</h2>
    <section className='category-area'>
      <button className='category-button'>Motivaçao</button>
      <button className='category-button'>Bem estar</button>
    </section>

    <button className='button-frase'>Gerar frase</button>

    <p className='textoFrase'>alguma frase</p>
    </div>
  )
}

export default App
