import { useEffect, useState } from 'react'
import api from '../../services/api'

function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "60a4701284dd8ee23204746d9803ae03",
          language: "pt-BR",
          page: 1,
        }
      })

      console.log(response.data.results)

    }

    loadFilmes()
  }, [])

  return (
    <div>
      <h1>BEM VINDO AO HOME</h1>
    </div>
  )
}

export default Home;