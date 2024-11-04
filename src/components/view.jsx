import { MOVIES } from "../moks/movies";
//import "../styles/view.css";
import styled from "styled-components";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const View = () => {
    return (
      <StyleDivComponent>
        {MOVIES.results.map((movie) => (
          <MovieDivComponent key={movie.id}>
            <StyleImage
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <OverlayDivComponent></OverlayDivComponent>
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
          </MovieDivComponent>
        ))}
      </StyleDivComponent>
    );
  };
  //div 태그 만들고 싶을때
  const StyleDivComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const MovieDivComponent = styled.div`
    position: relative;
    width: 160px;
    margin: 10px;
  `;
  const OverlayDivComponent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    opacity: 0;
    border-radius: 10px;
    transition: opacity 0.3s ease;

    ${MovieDivComponent}:hover & {
        opacity: 1;
      }
  `;
  const StyleImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
  `
  
  export default View;