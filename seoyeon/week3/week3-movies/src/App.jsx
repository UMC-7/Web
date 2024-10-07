import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import LoginPage from './pages/login'
import HomePage from './pages/Home'
import SignupPage from './pages/signup'
import SearchPage from './pages/search'
import MoviesPage from './pages/movie'

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/signup',
        element:<SignupPage/>
      },
      {
        path:'/search',
        element:<SearchPage/>
      },
      {
        path:'/movies',
        element:<MoviesPage/>
      }
    ]
  }
]

)
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
