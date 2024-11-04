import { useEffect } from "react";
import MovieView from "../components/MovieView"
import useCustomFetch from "../hooks/useCustomFetch";


const NowPlayingPage=()=>{


    const {data, isLoading, isError}= useCustomFetch(`/movie/now_playing?language=en-US&page=1`)
    console.log("iserror",isError)
    console.log("loading",isLoading)
    console.log("now",data)


    if(isLoading){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
        );  
    }

    return(
        <div>
            <MovieView  movies={data.data?.results}></MovieView>
        </div>
    );

};
export default NowPlayingPage;