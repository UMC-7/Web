import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import SearchPage from './pages/Search'
import MoviesPage from './pages/movie'
import NowPlayingPage from './pages/NowPlaying'
import PopularPage from './pages/Popular'
import TopRatedPage from './pages/TopRated'
import UpcomingPage from './pages/Upcoming'
import MovieDetailPage from './pages/MovieDetail'

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
        element:<MoviesPage/>,
      },
      {
        path:'/movies/now-playing',
        element:<NowPlayingPage/>
      },
      {
        path:'/movies/popular',
        element:<PopularPage/>
      },
      {
        path:'/movies/top_rated',
        element:<TopRatedPage/>
      },
      {
        path:'/movies/upcoming',
        element:<UpcomingPage/>
      },
      {
        path: '/movies/:movieId',
        element:<MovieDetailPage/>
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
