import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layout/root-layout.jsx'
import NotFound from './pages/not-found.jsx'
import HomePage from './pages/Home/home.jsx'
import LoginPage from './pages/Login/login.jsx'
import SignupPage from './pages/SignUp/signup.jsx'
import SearchPage from './pages/Search/search.jsx'
import MoviePage from './pages/Movies/movie.jsx'
import NowPlaying from './pages/NowPlaying/nowplaying.jsx'
import Popular from './pages/Popular/popular.jsx'
import TopRated from './pages/TopRated/toprated.jsx'
import UpComing from './pages/UpComing/upcoming.jsx'

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