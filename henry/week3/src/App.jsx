import React from 'react';
import styled from 'styled-components';
import { MOVIES } from './mocks/movies';
import MovieItem from './components/MovieItem';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

function App() {
  return (
    <MovieContainer>
      {MOVIES.results.map((movie) => (
        <MovieItem key={movie.id} posterPath={movie.poster_path} />
      ))}
    </MovieContainer>
  );
}

export default App;