
import { createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'


const router = createBrowserRouter([
  {
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/sobre',
        element: <Sobre/>
      }
    ]
  }
])

export {router}