import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface CharacterProps {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
}

interface ItemProps{
  items: CharacterProps[]
}

export function Home() {
  const [character, setCharacter] = useState<CharacterProps[]>([])

  useEffect(() => {
    getData()
  },[])

  async function getData() {
    fetch("https://dragonball-api.com/api/characters?limit=10")
    .then(response => response.json())
    .then((data: ItemProps ) => {
      const characterItem = data.items

      setCharacter(characterItem)
    })
  }

  return(
    <div key={}><h1>Home
      <p><Link to="/detail">Detalhes</Link></p>
      </h1>
      
      <div>
      {character.length > 0 && character.map((item) => (
        <div key={item.id}><p>nomes {item.name}</p></div>
      ))}

      </div>
      </div>
  )
}

