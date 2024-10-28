
const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;

const TopRatedPage=()=>{
    return(
        <div>
            <StyledOutletFont>높게 평가받은</StyledOutletFont>
        </div>
        )
}
export default TopRatedPage