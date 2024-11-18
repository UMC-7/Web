import MoviePoster from "../MoviePoster"
import * as M from "./movieview.style"

const MovieView = ({movies})=>{
    return (
        <M.Container>
            {movies.map((movie)=>(
                <M.Movie to={`/movies/${movie.id}`}>
                    <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                    <M.MovieInfoFonf>{movie.title}</M.MovieInfoFonf>
                    <M.MovieInfoFonf>{movie.release_date}</M.MovieInfoFonf>
                </M.Movie>
            ))}
        </M.Container>
    );
};
export default MovieView;
