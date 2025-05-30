import logoImg from 'public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'


export function Header() {
    return(
        <header className="w-full h-28 bg-slate-100 text-black px-2">
          <div className="max-w-screen-xl mx-auto">
            <nav>
                <Link href='/'>
                <Image src={logoImg} alt='Logo do site daily games'/>
                </Link>
            </nav>
          </div>
        </header>
    )
}