import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card/card";

import * as S from "./MoviesPage.style";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI1Zjk2YjE4N2E0ZTA1MWJjNjk3ZjY1YWM0M2U0NyIsIm5iZiI6MTczMDI5NzI4Ni4xNzUxODU0LCJzdWIiOiI2NzIyM2MwMTk3NGE2NzZjNmRmMzRlNWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4dOooNCiqCrDuH0VGIaPFOLcKMcaCgp0oGyMT5JY_xA`,
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);
    

    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
}

export default MoviesPage;
