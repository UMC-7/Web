import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";

const MovieDetail = () => {
    const { state } = useLocation();
    const { movieId } = useParams();
    // console.log(movieId);
    const imovie = state.movie;
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const { data: credit, isLoadingCredit, isErrorCredit } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

    if (isLoadingCredit) {
        return <div>
            <h1 style={{color:'white'}}>Loading...</h1>
        </div>
    }
    
    if (isErrorCredit) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    return (
        <>
            <div>
                <div>
                    <img src={IMAGE_BASE_URL+imovie.backdrop_path} alt={imovie.title}/>
                </div>
                <div>
                    <h1>{imovie.title}</h1>
                    <hr/>
                    <h3>평점 {imovie.vote_average}</h3>
                    <h3>개봉일 {imovie.release_date}</h3>
                    <h3>줄거리</h3>
                    <p>{imovie.overview}</p>
                </div>
            </div>
            <div>
                <h3>감독/출연</h3>
                <h6>감독</h6>
                <ul>
                    감독 쭈욱
                </ul>
                <h6>출연</h6>
                <ul>
                    출연진 쭈욱
                </ul>
            </div>
        </>
    );
};

export default MovieDetail;