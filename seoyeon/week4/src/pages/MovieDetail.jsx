import { useParams } from "react-router-dom"
import useCustomFetch from "../hooks/useCustomFetch"
import styled from "styled-components"
import Detail from "../components/Detail"

const MovieDetailPage=()=>{
    const {movieId}=useParams()
    const {data, isLoading, isError}=useCustomFetch(`/movie/${movieId}?language=ko-KR`)
    const {data:credit, isLoadingCredit, isErrorCredit}=useCustomFetch(`/movie/${movieId}/credits`)
    console.log(data)
    console.log(credit.data)

    if(isLoading || isLoadingCredit){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
        )
    }

    return(
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




