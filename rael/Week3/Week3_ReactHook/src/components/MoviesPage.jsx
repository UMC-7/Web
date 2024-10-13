import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/movies.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const VITE_API_KEY = import.meta.VITE_API_KEY;

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
        <div className="container">
            {movies.data?.results.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                    <div className="overlay"></div>
                </div>
            ))}
        </div>
    )
}