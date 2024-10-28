import MovieView from "../components/MovieView";

const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;

const PopularPage=()=>{
    return(
        <div>
            <StyledOutletFont>인기있는</StyledOutletFont>
        </div>
        )
}
export default PopularPage