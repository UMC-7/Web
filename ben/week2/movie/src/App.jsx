import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import MoviesPage from './pages/MoviesPage';
import MovieList from './pages/MovieList';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Signup from './pages/Signup';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/now-playing" element={<MovieList category="now_playing" />} />
          <Route path="movies/popular" element={<MovieList category="popular" />} />
          <Route path="movies/top-rated" element={<MovieList category="top_rated" />} />
          <Route path="movies/upcoming" element={<MovieList category="upcoming" />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 