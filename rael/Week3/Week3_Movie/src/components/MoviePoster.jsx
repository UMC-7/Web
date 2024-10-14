import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const MoviePoster = ({apiUrl}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            try {
                const movies = await axios.get(apiUrl, {
                    headers: {
                        accept: 'application/json', 
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzVjYzk2N2IzOGE4MTFkMTcyZmRhMmU5MTNkNmM4MiIsIm5iZiI6MTcyODIzNTI3OC44NDk0MzIsInN1YiI6IjY3MDJjMGE4ZjM0OTVkNzJjNGY3YzQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJ9RnFnAIfzMT6Bq9oCZm-21vjWlPmLX33B_rRg0Ukg', 
                    }
                })
                setMovies(movies);
            } catch (error) {
                console.error("영화 정보를 가져오는 중 오류 발생:", error);
            }
        }
        getMovies();
    }, [apiUrl]);

    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <Movies key={movie.id}>
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