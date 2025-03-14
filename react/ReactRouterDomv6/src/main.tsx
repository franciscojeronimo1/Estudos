import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/About'
import { Menu } from './components/menu'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'
import { Contato } from './components/Contato'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}>
        <Route path=':id' element={<Post />}/>
      </Route>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/redirect' element={<Redirect/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
