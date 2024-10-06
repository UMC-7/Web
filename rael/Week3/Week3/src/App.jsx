import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home.jsx'
import MoviesPage from './pages/movies.jsx'
import NotFound from './pages/not-found.jsx'
import RootLayout from './layout/root-layout.jsx'

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
        path: 'movies/:movieId',
        element: <MoviesPage/>
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
