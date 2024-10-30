import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layout/root-layout.jsx'
import NotFound from './pages/not-found.jsx'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import SearchPage from './pages/search.jsx'
import MoviePage from './pages/movie.jsx'
import NowPlaying from './pages/categories/nowplaying.jsx'
import Popular from './pages/categories/popular.jsx'
import TopRated from './pages/categories/toprated.jsx'
import UpComing from './pages/categories/upcoming.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, errorElement: <NotFound/>,

    children: [
      {index: true, element: <HomePage/>},
      {path: 'login', element: <LoginPage/>}, 
      {path: 'signup', element: <SignupPage/>},
      {path: 'search', element: <SearchPage/>},
      {path: 'movie', element: <MoviePage/>},
      {path: "/movie/now-playing", element: <NowPlaying />},
      {path: "/movie/popular", element: <Popular />},
      {path: "/movie/top-rated", element: <TopRated />},
      {path: "/movie/up-coming", element: <UpComing />}
    ]
  }
])

function Movie() {

  return <RouterProvider router={router} />
}

export default Movie
