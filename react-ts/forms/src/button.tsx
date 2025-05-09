import { useFormStatus } from 'react-dom'

export function ButtonSubmit() {
  const { pending} = useFormStatus()
  return(
    <button type='submit' disabled={pending}>{ pending ? "enviando dados..." : "Cadastrar"}</button>
  )
}