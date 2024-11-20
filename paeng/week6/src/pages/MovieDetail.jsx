import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";


const isOv=(ov)=>{
    return (ov ? ov:'TMDB에서 제공하는 상세 줄거리가 없습니다.');
  }


const MovieDetail = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [credits, SetCredits] = useState({cast:[],crew:[]});
  const { state } = useLocation();
  const movie = state.movie;

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apiKey,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=ko`,
      options
    )
      .then((response) => response.json())
      .then((response) => SetCredits(response))
      .catch((err) => console.error(err));

  return (
    <>
    <DetailBox>
      <div className="backImage">
        <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <div className="info">
      <h1>{movie.title}</h1>
      <br></br>
      <h3>
        평점&nbsp;&nbsp;
        {movie.vote_average}
        </h3>
      <h3>개봉일 {movie.release_date}</h3>
      <h3>줄거리</h3>
      <p>{isOv(movie.overview)}</p>
      </div>
    </DetailBox>
    <CreditBox>
  <h3>출연진 및 제작진</h3>
  <ul>
    {credits.cast.map((credit) => (
      <li key={credit.id}>
        <div className="photo">
          {credit.profile_path ? (
            <img src={`${IMAGE_BASE_URL}${credit.profile_path}`} alt={credit.original_name} />
          ) : null}
        </div>
        {credit.original_name}
        <br/>
        {credit.known_for_department}
      </li>
    ))}
  </ul>
  <ul>
    {credits.crew.map((credit) => (
      <li key={credit.id}>
        <div className="photo">
          {credit.profile_path ? (
            <img src={`${IMAGE_BASE_URL}${credit.profile_path}`} alt={credit.original_name} />
          ) : null}
        </div>
        {credit.original_name}
        <br/>
        {credit.known_for_department}
      </li>
    ))}
  </ul>
</CreditBox>

   </>
  );
};

export default MovieDetail;


const DetailBox = styled.div`
  position: relative; 

  .backImage img {
    width: 100%;
  }

  .info {
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    padding: 20px; 
    background-color: rgba(0, 0, 0, 0.5); 
    color: white; 
  }
`;

const CreditBox = styled.div`
background-color: black;
color:white;
text-align: center;
width: 100vw;

div{
  display: inline-block;
}


.people{
  display: flex;
  flex-wrap: wrap;
  gap:30px;
  margin-left:30px;
  margin-right: 30px;
  margin-bottom:50px;
}

li {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

ul{
  display: flex;
  font-size:12px;
}

.photo{
  max-height:80px;
  overflow:hidden;
  border-radius: 100px
}

.photo img{
  width:80px;
  max-height:initial;
  margin-top:-10%;
}
`;