import { Link,useParams , useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


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


export function Detail() {
  const {perso} = useParams()
  const navigate = useNavigate()
  const [char , setChar] = useState<CharacterProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function getPerso() {
      try{
        fetch(`https://dragonball-api.com/api/characters`)
        .then(response => response.json())
        .then((data: ItemProps )=> {
          
          setChar(data.items)
          setLoading(false)
          console.log(data.items)
        })
      }catch(err) {
        console.log(err)
        navigate('/')
      }
    }
    getPerso()
  },[perso])

  if (loading) {
    return(
      <div>
        <h4>Carregando detalhes...</h4>
      </div>
    )
  }

  return(
    <div>
      <h1>Deatalhes do personagem {char?.name}
        
      </h1>
      <p><Link to="/">ir para Home</Link></p>
    </div>
  )
}