import { useParams } from "react-router-dom"
import useCustomFetch from "../hooks/useCustomFetch"
import styled from "styled-components"
import Detail from "../components/Detail"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { axiosInstance } from "../apis/axios-instance"

const MovieDetailPage=()=>{
    const {movieId}=useParams()

    // 영화 상세정보
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['get-movie-detail', movieId],
        queryFn: ()=> axiosInstance.get(`/movie/${movieId}?language=ko-KR`)
    })
    // Credit 정보
    const {data:credit, isLoading:isLoadingCredit, isError:isErrorCredit} = useQuery({
        queryKey: ['get-credt', movieId],
        queryFn: ()=>axiosInstance.get(`/movie/${movieId}/credits`)
    })


    if(isLoading || isLoadingCredit){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
        )
    }

    else return(
        <Container>
            <Detail movie={data.data} credits={credit.data}></Detail>
        </Container>
    )
}
export default MovieDetailPage

const Container=styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
`




