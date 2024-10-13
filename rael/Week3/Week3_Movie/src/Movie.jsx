import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layout/root-layout.jsx'
import NotFound from './pages/not-found.jsx'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, errorElement: <NotFound/>,

    children: [
      {index: true, element: <HomePage/>},
      {path: 'login', element: <LoginPage/>}, 
      {path: 'signup', element: <SignupPage/>}
    ]
  }
])

function Movie() {

  return <RouterProvider router={router} />
}

export default Movie
