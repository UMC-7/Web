import { useEffect, useState } from "react";
import MovieView from "../../components/MovieView/MovieView"
import useCustomFetch from "../../hooks/useCustomFetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "../../apis/axios-instance";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import MoviePoster from "../../components/MoviePoster"
import * as M from "../../components/MovieView/movieview.style"
import * as S from "../Search/search.style"
import CardSkeleton from "../../components/Card/CardSkelton";


const NowPlayingPage=()=>{

    //const {data, isPending, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching} = useGetInfiniteMovies("now_playing")
    const [page, setPage] = useState(1)

    const fetchMovies = (page)=> axiosInstance.get(`/movie/now_playing?language=en-US&page=${page}`)
         /*{
        const resp = await axiosInstance.get(`/movie/now_playing?language=en-US&page=1`)
        console.log("fetchMovies", resp)
        return resp.data
    }*/

    const {data, isLoading, isError, error, isFetching, isPreviousData} = useQuery({
        queryKey: ['movie', 'now_playing', page],
        queryFn: ()=>{
            console.log("useQuery")
            return fetchMovies(page)
        },
        keepPreviousData: true
    })


    console.log("data: ", data)

    if(isLoading){
        const loadingData = new Array(20)
        return(
            <div style={{color: "white"}}>로딩중</div>
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
        <M.PageContainer>
            {data!=null && <MovieView movies={data.data?.results}></MovieView>}
            <M.PageButtonContainer>
                <M.PageButton
                    onClick={()=>setPage(old => Math.max(old-1,0))}
                    disabled={page===1}>이전</M.PageButton>
                <h4 style={{color: "white", margin: "0px"}}>{page}페이지</h4>
                <M.PageButton 
                    onClick={()=>{
                        if(!isPreviousData){
                            setPage(old=> old+1)
                        }
                    }}>다음</M.PageButton>   
            </M.PageButtonContainer>         
        </M.PageContainer>
    );

};
export default NowPlayingPage;

