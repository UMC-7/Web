import styled from "styled-components"

const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL

const Detail=({movie, credits})=>{
    console.log(IMG_BASE_URL)
    return(
        <>
            <PosterView >
                <PosterImg poster_path={movie.poster_path}></PosterImg>
            </PosterView>
            <MovieDescriptionContainer>
                <MovieDescription style={{fontSize:"40px"}}>{movie.title}</MovieDescription>
                <MovieDescription style={{marginTop:"20px"}}>{movie.tagline}</MovieDescription>
                <MovieDescription style={{marginTop:"20px"}}>{movie.overview}</MovieDescription>
            </MovieDescriptionContainer>
            
        </>
    )
}
export default Detail

const PosterImg=styled.img.attrs(props=>
    ({src:`${IMG_BASE_URL}${props.poster_path}`})
)`
    width:100%;
    height:100%;
    position:relative;
    object-position:center;
    object-fit:cover;
`
const PosterView =styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height:350px;
    overflow: hidden;
    max-height: 350px;
    border-radius: 10px;
`
const MovieDescriptionContainer =styled.div`
    height: 350px;
    width: 450px;
    position: absolute;
    top: 0;
    left: 0;
`
const MovieDescription=styled.text`
    margin-left: 20px;
    position: relative;
    color: white;
    display: block;
`