import { Container } from '../../components/container'

function Home() {
  return (
    <Container>
      <section className='bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2'>
        <input className='w-full border-2 rounded-lg h-9 px-3 outline-none' placeholder='Digite o nome do carro...' />

        <button className='bg-red500 h-9 px-8 rounded-lg text-white font-medium text-lg'>Buscar</button>
      </section>
    <h1 className='font-bold text-center mt-6 text-2xl mb-4'>Carros novos e usados em todo o Brasil</h1>

    <main className='grid grid-cols-1 gap 6 md:grid-cols-2 lg:grid-cols-3'>
      
      
      <section className='w-full bg-white rounded-2xl'>
        <img src="https://racingonline.com.br/wp-content/uploads/2017/12/cd898f318b2372d9a6a1b3c58ce6bbaa492697ff425ea2d496ecd1b45ebe8b9e.jpg" alt="Carro" className='w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all' />
        <p className='font-bold mt-1 mb-2 px-2'>Ferrari</p>
        <div className='flex flex-col px-2'>
          <span className='text-zinc-700 mb-6'>Ano 2020 | 23.000 km </span>
          <strong className='text-black font-medium text-xl'>R$ 500.000</strong>
        </div>

        <div className='w-full h-px bg-slate-200 my-2'>

        </div>
        <div className='px-2 pb-2'>
          <span className='text-black'>Campo Grande - MS</span>
        </div>
      </section>

      
    </main>
    </Container>
  )
}

export default Home
