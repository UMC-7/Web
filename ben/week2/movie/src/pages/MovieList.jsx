import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const MovieCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border-radius: 4px;
`;

const MovieTitle = styled.div`
  color: white;
  margin-top: 8px;
  font-size: 14px;
`;

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI1Zjk2YjE4N2E0ZTA1MWJjNjk3ZjY1YWM0M2U0NyIsIm5iZiI6MTczMDI5NzI4Ni4xNzUxODU0LCJzdWIiOiI2NzIyM2MwMTk3NGE2NzZjNmRmMzRlNWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4dOooNCiqCrDuH0VGIaPFOLcKMcaCgp0oGyMT5JY_xA";

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`
            }
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, [category]);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MoviePoster 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
          />
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieCard>
      ))}
    </MovieGrid>
  );
};

export default MovieList; 