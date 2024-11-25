import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";
import MovieView from "../components/MovieView/MovieView";
import { useInView } from "react-intersection-observer";
import { useGetInfiniteMovies } from "../hooks/queries/useGetInfiniteMovies";
import { useEffect } from "react";
import * as M from "../components/MovieView/movieview.style"
import MoviePoster from "../components/MoviePoster";
import CardSkeleton from "../components/Card/CardSkelton";

const VITE_API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = import.meta.env.VITE_MOVIE_URL;

const TopRatedPage=()=>{

    const {ref, inView} = useInView({
        threshold:0
    })

    const {data:movies, isPending, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching} = useGetInfiniteMovies("top_rated")

    useEffect(()=>{
        if(inView){
            !isFetching && hasNextPage && fetchNextPage()
        }
    },[inView, isFetching, hasNextPage])

    if(isLoading){
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
export default TopRatedPage