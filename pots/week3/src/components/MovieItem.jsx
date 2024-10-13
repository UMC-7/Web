import React from 'react';
import styled from 'styled-components';

const MovieItemWrapper = styled.div`
  width: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MovieItemWrapper}:hover & {
    opacity: 0.5;
  }
`;

function MovieItem({ posterPath }) {
  const base_url = "https://image.tmdb.org/t/p";
  const file_size = "/w500";

  return (
    <MovieItemWrapper>
      <MoviePoster src={`${base_url}${file_size}${posterPath}`} />
      <MovieOverlay />
    </MovieItemWrapper>
  );
}

export default MovieItem;