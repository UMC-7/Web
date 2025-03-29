import View from '../components/view';
import useGetMovies from '../hooks/useGetMovies';
import {useNavigate} from "react-router-dom";

const NowPlaying = () => {
  const { movies } = useGetMovies('now_playing');
  const navigate = useNavigate();

  

  const goToDetail = (movie) => {
    navigate(`/movie/detail/${movie.id}`, { state: { movie } });
  };

  return <View movies={movies} onMovieClick={goToDetail}/>;

  
};


export default NowPlaying;
