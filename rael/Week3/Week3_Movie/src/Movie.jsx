import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home.jsx'
import NotFound from './pages/not-found.jsx'
import RootLayout from './layout/root-layout.jsx'
import Login from './pages/login.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    errorElement: <NotFound/>,

    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])

function Movie() {

  return <RouterProvider router={router} />
}

export default Movie
