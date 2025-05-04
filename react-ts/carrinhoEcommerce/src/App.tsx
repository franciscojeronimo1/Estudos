import { Home } from './pages/Home';
import { Cart } from './pages/cart';
import { createBrowserRouter } from 'react-router-dom';
import { ProdutoDetail } from './pages/detail';

import { Layout } from './components/layout';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {path:"/product/:id",
        element: <ProdutoDetail/>
      }
    ]
  }
])

export { router}