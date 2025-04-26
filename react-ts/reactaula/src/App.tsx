import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const allFrases = [
    {
      id: 1,
      nome: "Motivaçao",
      frases: [
        'siga os bons e aprenda com eles.',
        'o bom-senso vale mais do que muito conhecimento.',
        'o riso é a menor distância entre duas pessoas',
        'Deixe de lado as preocupaçoes e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acordar de bem com a vida é o primeiro passo',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos!',
        'Bom dia! Nao se esqueça do seu dia'
      ]
    },
    {id:3,
      nome:"Boa Noite",
      frases: [
        'BOa noite durma bem',
        'teste frase boa noite'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
    <img src={logoImg} alt="logo frases" className='logo' />
    <h2 className="title">Categorias</h2>
    <section className='category-area'>
      {allFrases.map((item, index) => (
        <button key={item.id} className='category-button' style={{borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0, borderColor: "#1fa4db"}}  onClick={()=> handleSwitchCategory(index)}>{item.nome}</button>
      ))}
     
    </section>

    <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

     {textoFrase !== '' && <p className='textoFrase'>{textoFrase} </p>}
    </div>
  )
}

export default App
