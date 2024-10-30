import { useState } from "react";
import axios from "axios";
import { MOVIES } from "../mocks/movies";
import "../styles/movie.css"
import styled from "styled-components";


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500";

const Movie=()=>{

    const [movies, setMovies]=useState([])

    useEffect(()=>{
        const getMovies =async()=>{
            const movies=await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDAwYWE2OTIzOGU2OWE4ZjNhY2Y4YmJhNWVhOGM5ZiIsIm5iZiI6MTczMDEzMzkyOS41NDIyMzksInN1YiI6IjY3MDQ5M2EwY2NiYjRlN2YxNjY5Yjc0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjUp7c2CHReo-md6ntjma0EoRgoDsTAuawXk5BzpHl0`,
        }})
        setMovies(movies);
        }
        getMovies()
    },[]);

    return (
        <Container>
            {movies.data?.results.map((movie)=> (
                <div
                    key={movie.id}
                    >
                        <MovieContainer>
                            <img
                            style={{width: "100%", height: "100%", borderRadius:"10px"}}
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            />
                            <MovieInfo>
                                <h4>{movie.title}</h4>
                                <span>{movie.vote_average}</span> 
                            </MovieInfo>
                        
                            <Overlay className="overlay"></Overlay>
                        </MovieContainer>
                        </div>

                    
            ))}



        </Container>
    );
};

export default Movie;

const Container=styled.div`
    display:flex;
    flexWrap:wrap;
    justifyContent:center;
`
const MovieContainer=styled.div`
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    &hover .overlay {
        opacity:1;
        }

`
const MovieInfo=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

const Overlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    opacity: 0;
    border-radius: 10px;


`