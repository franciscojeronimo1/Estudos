'use client'

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
    const [top , setTop] = useState(true)

    const scrollHaandler = () => {
        window.scrollY > 10? setTop(false) : setTop(true)
    }

    useEffect(()=> {
        window.addEventListener('scroll', scrollHaandler)

        return () => window.removeEventListener('scroll', scrollHaandler)
    },[top])

  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#contatos">Contatos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
