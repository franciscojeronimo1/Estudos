import { Home } from './pages/home'
import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/layout'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])

export {router}