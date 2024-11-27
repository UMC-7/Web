import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 20px;
`;

const Movie = styled.div`
  width: 160px;
  margin: 10px;
  position: relative;
  cursor: pointer; /* 포스터에 마우스 커서를 올리면 클릭 가능하게 보임 */
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

const View = ({ movies }) => {
  const navigate = useNavigate();

  const goToDetailPage = (movie) => {
    navigate(`/movie/detail/${movie.id}`, { state: { movie } });
  };

  return (
    <Container>
      {movies.map((movie) => (
        <Movie key={movie.id} onClick={() => goToDetailPage(movie)}>
          <MovieImage
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <Overlay />
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
        </Movie>
      ))}
    </Container>
  );
};

export default View;