import styled from "styled-components"

const IMG_BASE_URL="https://image.tmdb.org/t/p/w500"


const MoviePoster=(props)=>{
    return(
        <StyledMoviePoster alt={props.title} poster_path={props.poster_path}/>
    )
}
export default MoviePoster

const StyledMoviePoster=styled.img.attrs(props=>
({src:`${IMG_BASE_URL}${props.poster_path}`})
)`
    width:100%;
    height:100%;
    border-radius:5px;
    display:block;
    position: relative;
`
const StyledOverlay=styled.div`
    position:absolute;
    width:100%;
    height: 100%;
    top:0px;
    left:0px;
    background-color: rgb(0,0,0);
    opacity: 0;
`
const StyledMovieCard=styled.div`
    position:relative;
`