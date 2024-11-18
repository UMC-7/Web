import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";
import MovieView from "../components/MovieView/MovieView";

const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;

 const UpcomingPage=()=>{
    const {data, isLoading, isError, error} = useQuery({
        queryKey: 'get-upcoming',
        queryFn: ()=> axiosInstance.get("/movie/upcoming?language=en-US&page=1")
    })

    if(isLoading){
        return(
            <div>
                <h1 style={{color: "white"}}>로딩중</h1>
            </div>
        )
    }
    return(
        <MovieView movies={data.data?.results}></MovieView>
        )
 }
 export default UpcomingPage