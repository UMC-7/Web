import { MOVIES } from './mock/movies'
import './index.css'

function App() {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='movie-list'>
      {/* Movie List */}
      {MOVIES.results.map((movie) => (
        <div key={movie.id} className='movie-card'>
          <img src={`${baseUrl}${movie.poster_path}`} alt="${movie.title}" className='movie-poster'/>
        </div>
      ))}
    </div>
  )
}

export default App
