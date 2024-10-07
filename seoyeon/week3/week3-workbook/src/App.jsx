import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import NotFound from './pages/not-found'
import MoviePage from './pages/movies'
import RootLayout from './layout/root-layout'


const router=createBrowserRouter([
  {
    path:'/',
    //element:<HomePage/>,
    element:<RootLayout/>,
    //지정하지 않은 경로로 접근 처리
    errorElement:<NotFound/>,
    children:[
      {
        index:true, //홈 경로('/')를 의미
        element:<HomePage/>
      },
      {
        path:'/movies/:movieId',
        element:<MoviePage/>
      }
    ]
  },
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
