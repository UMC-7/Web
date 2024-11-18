import { useQuery } from "@tanstack/react-query";
import MovieView from "../components/MovieView/MovieView";
import { StyledOutletFont } from "../components/OutletStyle";
import useCustomFetch from "../hooks/useCustomFetch";
import { axiosInstance } from "../apis/axios-instance";

const PopularPage=()=>{
    //const {data:movies, isLoading, isError}=useCustomFetch(`/movie/upcoming?language=en-US&page=1`)

    const {isLoading, isError, error, data:movies} = useQuery({
        queryKey: 'get-popular', 
        queryFn: ()=> { return axiosInstance.get("/movie/popular?language=en-US&page=1")}
    })

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