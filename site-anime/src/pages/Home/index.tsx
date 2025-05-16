import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface CharacterProps {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  image: string;
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
    fetch("https://dragonball-api.com/api/characters/")
    .then(response => response.json())
    .then((data: ItemProps ) => {
      const characterItem = data.items

      setCharacter(characterItem)
     
    })
  }

  return(
    <div className='flex items-center justify-center '><h1>
     
      </h1>
      
      <div>
      {character.length > 0 && character.map((item) => (
         <Link to={`/detail/${item.id}`}> <div className='bg-amber-400 p-2 m-2 border rounded-2xl'  key={item.id}> <img className='w-52 h-52 mb-6 mt-7' src={`${item.image}`} alt="fotos-perso" /> <p>Nome: {item.name}   Raça: {item.race} </p> 
      
        </div></Link>
      ))}

      </div>
      </div>
  )
}

