import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/notFound';
import { Detail } from './pages/detail';
import { Layout } from './components/layout';

const router = createBrowserRouter([
 {
  element:<Layout/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/detail/:perso",
      element: <Detail/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
 } 
])

export { router}