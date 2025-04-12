import { useState } from 'react'
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'
import './app.css'

function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  const [posts, setPosts] = useState([])

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    //   .then(() => {
    //     console.log('dasdos registrados no banco')
    //   })
    //   .catch((error) => {
    //     console.log("gerou erro" + error)
    //   })

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log('Cadastrado com sucesso')
        setAutor('')
        setTitulo('')
      })
      .catch((error) => {
        console.log("ERRO" + error)
      })
  }

  async function buscarPost() {
    // const postRef = doc(db, "posts", "12345")

    // await getDoc(postRef)
    //   .then((snapshot) => {
    //     setAutor(snapshot.data().autor)
    //     setTitulo(snapshot.data().titulo)
    //   })
    //   .catch(() => {
    //     console.log('error')
    //   })

    const postRef = collection(db, 'posts')
    await getDocs(postRef)
      .then((snapshopt) => {
        let lista = []
        snapshopt.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(lista)
      })


      .catch((error) => {
        console.log("Error" + error)
      })
  }
  return (
    <div >
      <h1>ReactJS + Firebase </h1>

      <div className="container">
        <label >Titulo:</label>
        <textarea type="text" placeholder='digite o titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}></textarea>

        <label>Autor:</label>
        <input type="text" placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)} />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Titulo:{post.titulo} </span> <br />
                <span>Autor: {post.autor}</span><br />

              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
