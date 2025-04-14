import { useState, useEffect } from 'react'
import { db, auth } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import './app.css'

function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [user, setUser] = useState(false)
  const [userDetail, setUserDetail] = useState([])

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshopt) => {
        let listaPost = []

        snapshopt.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          })
        })

        setPosts(listaPost)
      })
    }

    loadPosts()
  }, [])

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true)
          setUserDetail({
            uid: user.uid,
            email: user.email
          })
        } else {
          setUser(false)
          setUserDetail({})
        }
      })
    }
    checkLogin()
  }, [])

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


  async function editarPost() {
    const docRef = doc(db, "posts", idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
      .then(() => {
        console.log('POST ATUALIZADO!')
        setIdPost('')
        setTitulo('')
        setAutor('')
      })
      .catch(() => {
        console.log('ERRO AO ATUALIZAR O POST')
      })
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log('Sucesso no cadastro')
        setEmail('')
        setSenha('')
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert("Senha muito fraca")
        } else if (error.code === 'auth/email') {
          alert('Email ja existe')
        }
      })
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log('USER LOGADO COM SUCESSO')
        console.log(value.user)

        setUserDetail({
          uid: value.user.uid,
          email: value.user.email,

        })
        setUser(true)

        setEmail('')
        setSenha('')
      })
  }

  async function fazerLogout() {
    await signOut(auth)
    setUser(false)
    setUserDetail({})
  }

  return (
    <div >
      <h1>ReactJS + Firebase </h1>

      {user && (
        <div>
          <strong>Seja bem vindo(a) (Você está logado!)</strong> <br />
          <span>ID: {userDetail.uid} - Email: {userDetail.email}</span> <br />
          <button onClick={fazerLogout}>sair da conta</button>
          <br /> <br />
        </div>
      )}

      <div className="container">
        <h2>Usuarios</h2>
        <label >Email</label>
        <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um email"
        />
        <br />

        <label >Senha</label>
        <input value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="informe sua senha" />
        <br />

        <button onClick={novoUsuario}>Cadastras</button>
        <button onClick={logarUsuario}>Fazer login</button>
      </div><br />

      <br />
      <br />
      <hr />
      <div className="container">
        <h2>Posts</h2>
        <label>ID do Post:</label>
        <input
          placeholder='Digite o ID do post'
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        /> <br />

        <label >Titulo:</label>
        <textarea type="text" placeholder='digite o titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}></textarea>

        <label>Autor:</label>
        <input type="text" placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)} />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button><br />

        <button onClick={editarPost}>Atualizar Post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong><br />
                <span>Titulo:{post.titulo} </span> <br />
                <span>Autor: {post.autor}</span><br /><br />
                <button onClick={() => excluirPost(post.id)}>Excluir</button> <br /> <br />

              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
