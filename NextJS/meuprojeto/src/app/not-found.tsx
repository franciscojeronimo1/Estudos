import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>pagina nao encontrada</h2>
      <p>parece que essa pagina nao existe</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}