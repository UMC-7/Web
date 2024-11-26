import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import SearchPage from './pages/Search/Search'
import MoviesPage from './pages/movie'
import NowPlayingPage from './pages/Movies/NowPlaying'
import PopularPage from './pages/Movies/Popular'
import TopRatedPage from './pages/Movies/TopRated'
import UpcomingPage from './pages/Movies/Upcoming'
import MovieDetailPage from './pages/MovieDetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
