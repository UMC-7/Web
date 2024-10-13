import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export const MoviePoster = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                headers: {
                    Authorization: VITE_API_KEY, 
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <Movies key={movie.id}>
                    <Img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                    <Overlay></Overlay>
                </Movies>
            ))}
        </Container>
    )
}

const Movies = styled.div`
    position: relative;
    width: 150px;
    margin: 10px;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
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
    justify-content: center;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`