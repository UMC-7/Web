import MoviePoster from "./MoviePoster"
import styled from "styled-components";

const MovieView = ({movies})=>{
    return (
        <Container>
            {movies.map((movie)=>(
                <Movie>
                    <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                    <MovieInfoFonf>{movie.title}</MovieInfoFonf>
                    <MovieInfoFonf>{movie.release_date}</MovieInfoFonf>
                </Movie>
            ))}
        </Container>
    );
};
export default MovieView;

const Movie=styled.div`
    width: 120px;
    height: 100%;
    margin: 10px;
    position: relative;
`
const Container =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    top: 0;
    bottom: 0;
`
const MovieInfoFonf=styled.text`
    color: white;
    display: block;
`