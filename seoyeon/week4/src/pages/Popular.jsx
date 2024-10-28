import MovieView from "../components/MovieView";
import { StyledOutletFont } from "../components/OutletStyle";
import useCustomFetch from "../hooks/useCustomFetch";

const PopularPage=()=>{
    const {data:movies, isLoading, isError}=useCustomFetch(`/movie/upcoming?language=en-US&page=1`)


    if(isLoading){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
        )
    }

    return(
        <div>
            <MovieView movies={movies.data?.results}></MovieView>
        </div>
        )
}
export default PopularPage