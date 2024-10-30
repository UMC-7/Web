const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;

 const UpcomingPage=()=>{
    return(
        <div>
            <StyledOutletFont>개봉 예정</StyledOutletFont>
        </div>
        )
 }
 export default UpcomingPage