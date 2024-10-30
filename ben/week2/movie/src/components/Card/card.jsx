import React from 'react';
import * as S from './card.style';

const Card = ({ movie }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <S.CardWrapper>
      <S.MoviePoster src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
      <S.Overlay>
        <S.Title>{movie.title}</S.Title>
      </S.Overlay>
    </S.CardWrapper>
  );
};

export default Card;