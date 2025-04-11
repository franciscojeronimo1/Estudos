import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp