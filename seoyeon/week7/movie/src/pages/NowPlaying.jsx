import { useEffect } from "react";
import MovieView from "../components/MovieView/MovieView"
import useCustomFetch from "../hooks/useCustomFetch";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../apis/axios-instance";


const NowPlayingPage=()=>{


    /*const {data, isLoading, isError}= useCustomFetch(`/movie/now_playing?language=en-US&page=1`)
    console.log("iserror",isError)
    console.log("loading",isLoading)
    console.log("now",data)*/


    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['get-now-playing'], 
        queryFn : ()=>axiosInstance.get("/movie/now_playing?language=en-US&page=1")
    })

    console.log("data: ", data)

    if(isLoading){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
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
            <MovieView  movies={data.data?.results}></MovieView>
        </div>
    );

};
export default NowPlayingPage;