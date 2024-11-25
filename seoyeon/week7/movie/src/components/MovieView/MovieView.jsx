import MoviePoster from "../MoviePoster"
import * as M from "./movieview.style"

const MovieView = ({moviePages, ref})=>{
    return (
        <M.Container>
            {moviePages.map((page)=>
                page.results.map((movie)=>(
                    <M.Movie to={`/movies/${movie.id}`}>
                        <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                        <M.MovieInfoFonf>{movie.title}</M.MovieInfoFonf>
                        <M.MovieInfoFonf>{movie.release_date}</M.MovieInfoFonf>
                    </M.Movie>
                    )
                )
            )}
            <div ref={ref} style={{backgroundColor: "white", width: "50px", height: "10px"}}></div>
        </M.Container>
    );
};
export default MovieView;
