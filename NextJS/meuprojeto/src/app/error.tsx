"use client"
import { use, useEffect } from "react"
import Link from "next/link"

const Error = ({error, reset}: {error: Error; reset: ()=> void}) => {
    useEffect(() => {
        console.log(error)
    },[error])



return(
    <div>
        <h2>ops algo deu errado</h2>
        <div>
            <Link href="/">voltar para a pagina home</Link>
        </div>
    </div>
)

}

export default Error