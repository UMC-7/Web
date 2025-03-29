import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Movie = styled.div`
  width: 160px;
  margin: 10px;
  position: relative; 
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 10px;
 

  ${Movie}:hover & {  
    opacity: 1;
  }
`;

const View = ({movies}) => {


  return (
    <Container>
      {movies.map((movie) => (
        <Movie key={movie.id}>
          <MovieImage
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <Overlay></Overlay>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
        </Movie>
      ))}
    </Container>
  );
};

export default View;
