import { Link } from 'react-router-dom'

export function Home() {
  return(
    <div className=' flex items-center flex-col p-4 m-3.5'>
      <h1 className='mb-3'>HOme</h1>
      <Link to="/sobre">ir para Sobre</Link>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <img src={'https://tm.ibxk.com.br/2023/08/11/11115053447089.jpg?ims=1200x675'} alt="" className='w-2xl mt-4.5' />
    </div>
  )
}