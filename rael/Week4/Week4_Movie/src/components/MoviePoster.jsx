import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MoviePoster = ({apiUrl}) => {
    const navigate = useNavigate();

    const ToMovieDetail = (movie) => {
        navigate(`/movies/:${movie.id}`, {state: {movie}})
    }

    const { data: movies, isLoading, isError } = useCustomFetch(apiUrl)

    if (isLoading) {
        return <div>
            <h1 style={{color:'white'}}>Loading...</h1>
        </div>
    }
    
    if (isError) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <Movies key={movie.id} onClick={() => {ToMovieDetail(movie)}}>
                    <Img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                    <Overlay></Overlay>
                    <Title>{movie.title}</Title>
                    <ReleaseDate>{movie.release_date}</ReleaseDate>
                </Movies>
            ))}
        </Container>
    )
}

const Movies = styled.div`
    position: relative;
    width: 150px;
    height: 220px;
    margin: 10px;
    padding-bottom: 55px;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;

    ${Movies}:hover & {
        opacity: 1;
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: white;
    margin-top: 5px;
`;

const ReleaseDate = styled.div`
    display: flex;
    color: white;
    font-size: 11px;
`;