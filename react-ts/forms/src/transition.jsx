import { useState, useTransition } from 'react'



export function NewUser() {
  const [name, setName] = useState('')
  const [isPending, startTransition ] = useTransition()
  const [error, setError] = useState("")
  const [user, setUser] = useState('')

  async function handleSubmit() {
    startTransition( async()=>{
      try{
        await new Promise((resolve, reject) => setTimeout(() =>{
          resolve()
        },2500))

       setUser('bem vindo' + name)
      }catch(err) {
        setError(err)
      }
    })
  }
  
  return(
    <div>
      <h1>conhecendo useTransition</h1>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>Cadastrar</button>

      {user && <p>{user}</p>}
    </div>
  )
}