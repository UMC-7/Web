import { MOVIES } from "../mocks/movies";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const View = () => {

    return (
        <div>
            {MOVIES.results.map((movie) => (
                <div>
                    <img src={IMAGE_BASE_URL +movie.poster_path} alt={movie.title} />
                </div>
            ))}
        </div>
    )
}