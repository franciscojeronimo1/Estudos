

interface pageDetailProps {
    params: {
        id: string;
    }
}

async function getData(id: string) {
  //https://api.github.com/users/franciscojeronimo1/repos
  const response = await fetch("https://api.github.com/users/franciscojeronimo1/repos")

  return response.json()
}

export default async function RepositorioId({params}: pageDetailProps) {
    const data = await getData(params.id)
    return(
        <div>
            <h1>Pagina detalhes do repositorio {params.id}</h1>
        </div>
    )
}