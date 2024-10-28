import { useParams } from "react-router-dom"
import useCustomFetch from "../hooks/useCustomFetch"
import styled from "styled-components"
import Detail from "../components/Detail"

const MovieDetailPage=({props})=>{
    const {movieId}=useParams()
    const {data, isLoading, isError}=useCustomFetch(`/movie/${movieId}?language=ko-KR`)
    const {data:credit, isLoadingCredit, isErrorCredit}=useCustomFetch(`/movie/${movieId}/credits`)
    console.log(data)
    console.log(credit)

    if(isLoading || isLoadingCredit){
        return(
            <div>
                <h1 style={{color:"white"}}>로딩중</h1>
            </div>
        )
    }

    return(
        <Container>
            <Detail movie={data.data} credits={credit}></Detail>
        </Container>
    )
}
export default MovieDetailPage

const Container=styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
`




