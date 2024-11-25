import { useEffect } from "react";
import MovieView from "../components/MovieView/MovieView"
import useCustomFetch from "../hooks/useCustomFetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../apis/axios-instance";
import { useGetMovies } from "../hooks/queries/useGetMovies";
import { useGetInfiniteMovies } from "../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import MoviePoster from "../components/MoviePoster"
import * as M from "../components/MovieView/movieview.style"
import * as S from "./Search/search.style"
import CardSkeleton from "../components/Card/CardSkelton";


const NowPlayingPage=()=>{

    const {data, isPending, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching} = useGetInfiniteMovies("now_playing")

    const {ref, inView} = useInView({
        threshold:0,
    })

    useEffect(()=>{
        if(inView){
            !isFetching && hasNextPage && fetchNextPage()
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage])

    console.log("data: ", data)

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
            {data.pages.map((page)=>
                page.results.map((movie)=>(
                    <M.Movie to={`/movies/${movie.id}`}>
                        <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                        <M.MovieInfoFonf>{movie.title}</M.MovieInfoFonf>
                        <M.MovieInfoFonf>{movie.release_date}</M.MovieInfoFonf>
                    </M.Movie>
                    )
                )
            )}
            <div ref={ref} style={{backgroundColor: "white", width: "50px", height: "10px"}}></div>
        </M.Container>
        </div>
    );

};
export default NowPlayingPage;