import MovieView from "../components/MovieView"
import { StyledOutletFont } from "../components/OutletStyle"
import { useState } from "react"

const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;


const NowPlayingPage=()=>{

    const [movies, setMovies] = useState([]);

    const option={
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${VITE_API_KEY}`
        }
    };

    fetch(
        `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
        option
    )
    .then((response) => response.json())
    .then(response => setMovies(response.results))
    .catch((error)=>console.error(error));

    console.log("fetchResult",movies);


    return(
        <div>
            <MovieView  movies={movies}></MovieView>
        </div>
    );
};
export default NowPlayingPage;