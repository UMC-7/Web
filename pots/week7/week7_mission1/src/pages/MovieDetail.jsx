import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// 줄거리가 없는 경우 기본 메시지 반환
const getOverview = (overview) => {
  return overview ? overview : "TMDB에서 제공하는 상세 줄거리가 없습니다.";
};

const MovieDetail = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const { state } = useLocation();
  const movie = state?.movie;

  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=ko`, 
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            }
          }
        );
        setCredits(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [id, apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <DetailBox>
        <div className="backImage">
          <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className="info">
          <h1>{movie.title}</h1>
          <h3>평점: {movie.vote_average}</h3>
          <h3>개봉일: {movie.release_date}</h3>
          <h3>줄거리</h3>
          <p>{getOverview(movie.overview)}</p>
        </div>
      </DetailBox>
      
      <CreditBox>
        <h3>출연진 및 제작진</h3>
        <ul>
          {credits.cast.map((person) => (
            <li key={person.id}>
              <div className="photo">
                {person.profile_path ? (
                  <img src={`${IMAGE_BASE_URL}${person.profile_path}`} alt={person.original_name} />
                ) : null}
              </div>
              <div>{person.original_name}</div>
              <div>{person.known_for_department}</div>
            </li>
          ))}
        </ul>
        <ul>
          {credits.crew.map((person) => (
            <li key={person.id}>
              <div className="photo">
                {person.profile_path ? (
                  <img src={`${IMAGE_BASE_URL}${person.profile_path}`} alt={person.original_name} />
                ) : null}
              </div>
              <div>{person.original_name}</div>
              <div>{person.known_for_department}</div>
            </li>
          ))}
        </ul>
      </CreditBox>
    </>
  );
};

export default MovieDetail;

// 스타일 정의
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
  color: white;
  text-align: center;
  width: 100vw;
  
  h3 {
    margin-top: 20px;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    font-size: 12px;
  }
  
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 120px;
  }

  .photo {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo img {
    width: 100%;
    height: auto;
  }
`;