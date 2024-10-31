import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";

const MovieDetail = () => {
    const { movieId } = useParams();
    //console.log(movieId);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    const { data: imovie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    const { data: credit, isLoadingCredit, isErrorCredit } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

    if (isLoading || isLoadingCredit) {
        return <div>
            <h1 style={{color:'white'}}>Loading...</h1>
        </div>
    }
    
    if (isError || isErrorCredit) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    //console.log(imovie.data.backdrop_path);

    return (
        <div>
            <DetailContainer>
                <div>
                    <Poster src={IMAGE_BASE_URL + imovie.data?.backdrop_path} alt={imovie.data?.title}/>
                    <Detail>
                        <h1>{imovie.data?.title}</h1>
                        <h3>평점 {imovie.data?.vote_average}</h3>
                        <h3>개봉일 {imovie.data?.release_date}</h3>
                        <h3>{imovie.data?.tagline}</h3>
                        <p>{imovie.data?.overview ? (imovie.data?.overview) : 'TMDB에서 제공하는 상세 줄거리가 없습니다.'}</p>
                        <hr/>
                    </Detail>
                </div>
            </DetailContainer>
            <CreditContainer>
                <h3>감독/출연</h3>
                <h6>감독</h6>
                <ul>
                    {credit.data?.crew?.filter((member) => member.job === "Director").map((director) => (
                    <li key={director.id}>
                        <Photo>
                            {director.profile_path ? (
                                <img src={IMAGE_BASE_URL+director.profile_path} alt={director.name} />
                            ) : "No Image"}
                        </Photo>
                        <p>{director.name}</p><br/>
                        <p>{director.job}</p>
                        <p>({director.department})</p>
                    </li>
                    ))}
                </ul>
                <h6>출연</h6>
                <ul>
                    {credit.data?.cast?.map((actor) => (
                    <li key={actor.id}>
                        <Photo>
                            {actor.profile_path ? (
                                <img src={IMAGE_BASE_URL+actor.profile_path} alt={actor.original_name} />
                            ) : "No Image"}
                        </Photo>
                        <p>{actor.original_name}</p><br/>
                        <p>{actor.character}</p>
                        <p>({actor.known_for_department})</p>
                    </li>
                    ))}
                </ul>
                <h6>제작진</h6>
                <ul>
                    {credit.data?.crew?.map((member) => (
                    <li key={member.id}>
                        <Photo>
                            {member.profile_path ? (
                                <img src={IMAGE_BASE_URL+member.profile_path} alt={member.name} />
                            ) : "No Image"}
                        </Photo>
                        <p>{member.name}</p><br/>
                        <p>{member.job}</p><br/>
                        <p>({member.department})</p>
                    </li>
                    ))}
                </ul>
            </CreditContainer>
        </div>
    );
};

export default MovieDetail;

const DetailContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
`

const CreditContainer = styled.div`
    background-color: black;
    color:white;
    text-align: center;
    width: 100vw;

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
`

const Poster = styled.img`
    width: 100vw;
    height: 100%;
    overflow: hidden;
    max-height: 350px;
    border-radius: 10px;
    object-fit: cover;
`

const Detail = styled.div`
    position: absolute;
    width: 450px;
    height: 100%;
    top: 0px;
    left: 0px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 5px;
`

const Photo = styled.div`
    max-height: 80px;
    overflow: hidden;
    border-radius: 100px

    img{
    width: 80px;
    max-height: initial;
    margin-top: -10%;
    }
`