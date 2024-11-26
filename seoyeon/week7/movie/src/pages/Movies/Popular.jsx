import { useQuery } from "@tanstack/react-query";
import MovieView from "../../components/MovieView/MovieView";
import { StyledOutletFont } from "../../components/OutletStyle";
import useCustomFetch from "../../hooks/useCustomFetch";
import { axiosInstance } from "../../apis/axios-instance";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfiniteMovies";
import * as M from "../../components/MovieView/movieview.style"
import MoviePoster from "../../components/MoviePoster";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CardSkeleton from "../../components/Card/CardSkelton";

const PopularPage=()=>{
    //const {data:movies, isLoading, isError}=useCustomFetch(`/movie/upcoming?language=en-US&page=1`)

    const {ref, inView} = useInView({
        threshold:0
    })

    const {data:movies, isPending, isError, error, hasNextPage, fetchNextPage, isFetching} = useGetInfiniteMovies("popular")

    useEffect(()=>{
        if(inView){
            !isFetching && hasNextPage && fetchNextPage()
        }
    },[inView, isFetching, hasNextPage])

    if(isPending){
        const loadingData = new Array(20)
        return(
            <M.Container>
                {loadingData.map((data)=>{
                    <CardSkeleton></CardSkeleton>
                })}
            </M.Container>
        );  
    }

    if(isError){
        return(
            <div>
                <h1 style={{color: "white"}}>에러: {error}</h1>
            </div>
        )
    }

    return(
        <div>
            <M.Container>
                {movies.pages.map((page)=>(
                    page.results.map((movie)=>(
                        <M.Movie to={`/movies/${movie.id}`}>
                            <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                            <M.MovieInfoFonf>{movie.title}</M.MovieInfoFonf>
                            <M.MovieInfoFonf>{movie.release_date}</M.MovieInfoFonf>
                        </M.Movie>
                    ))
                ))}
            </M.Container>
            <div ref={ref} style={{backgroundColor: "white", width: "50px", height: "10px"}}></div>
        </div>
        )
}
export default PopularPage