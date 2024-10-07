import './App.css'
import {MOVIES} from './mocks/movies.js'
import MoviePoster from './components/MoviePoster.jsx'

function App() {
  
  console.log(MOVIES.results.at(2).poster_path)


  return (
    <>
    <div>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {MOVIES.results.map((movie)=>
            <MoviePoster id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
        )}
      </div>
    </div>
    </>
  )
}

export default App
