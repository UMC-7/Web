import { MOVIES } from "../mocks/movies";
import "../Movie.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MoviePoster = () => {

    return (
        <div
        style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}
        > 
            {MOVIES.results.map((movie) => (
                <div className="movie" key={movie.id} style={{width: "150px", margin: "10px"}}>
                    <img style={{width: "100%", height: "100%", borderRadius: "10px"}}
                    src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                    <div className="overlay"></div>
                </div>
            ))}
        </div>
    )
}