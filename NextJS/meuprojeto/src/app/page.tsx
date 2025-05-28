import { OwnerRepo } from "@/components/header/OwnerRepo";

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function getData() {
  //https://api.github.com/users/franciscojeronimo1/repos
  const response = await fetch("https://api.github.com/users/franciscojeronimo1/repos", {next: {revalidate: 120}})

  return response.json()
}

export default async function Home(){
  const data: DataProps[] = await getData()
  
  return(
    <main>
      <h1>Pagina Home</h1>
      <span>seja bem vindo a pagina home</span>
      <br />

      <h3>meus repositorios</h3>

      {data.map( (item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong> <a >{item.name}</a>
          <br />
          <OwnerRepo
          avatar_url={item.owner.avatar_url}
          name={item.owner.login}
          />
          <br /><br />
        </div>
      ))}
    </main>
  )
}