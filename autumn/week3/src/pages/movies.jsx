import Movie from "../components/movie"
import {MOVIES} from "../mocks/movies.jsx";
import {useState} from "react";
import axios from "axios";

const MoviesPage=()=>{
  const [movies, setMovies]=useState([])

  useEffect(()=>{
    const getMovies=async()=>{
      const movies=await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,{
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDAwYWE2OTIzOGU2OWE4ZjNhY2Y4YmJhNWVhOGM5ZiIsIm5iZiI6MTczMDEzMzkyOS41NDIyMzksInN1YiI6IjY3MDQ5M2EwY2NiYjRlN2YxNjY5Yjc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjUp7c2CHReo-md6ntjma0EoRgoDsTAuawXk5BzpHl0`,
        }
      })
      setMovies(movies);
    }
    getMovies()
  },[]);


  return (
    <S.MovieList>
        {MOVIES.data?.results.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
        ))}
    </S.MovieList>
)
};

export default MoviesPage;