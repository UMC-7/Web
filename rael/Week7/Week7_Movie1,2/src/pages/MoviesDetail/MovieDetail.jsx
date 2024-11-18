import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import Skeleton_detail from "../../components/detail-skeleton/Skeleton_detail";

const MovieDetail = () => {
    const { movieId } = useParams();
    //console.log(movieId);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const {data: moviedetail, isPending, isError} = useQuery({
        queryFn: () => useGetMovies({categories: movieId, pageParam: 1}), 
        queryKey: ['moviedetail', movieId], 
        cacheTime: 10000,
        staleTime: 10000,  
    })

    const {data: credit, isPendingCredits, isErrorCredit} = useQuery({
        queryFn: () => useGetMovies({categories: `${movieId}/credits`, pageParam: 1}), 
        queryKey: ['credit', `${movieId}/credits`], 
        cacheTime: 10000,
        staleTime: 10000,  
    })

    // isPending: 데이터를 불러오는 중입니다. 데이터가 로딩중일때 IsPending true.
    // isLoading: 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다.
    
    if (isPending || isPendingCredits) {
        return <div>
            <Skeleton_detail/>
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
                    <img src={IMAGE_BASE_URL + moviedetail?.backdrop_path} alt={moviedetail?.title}/>
                    <Detail>
                        <h1>{moviedetail?.title}</h1>
                        <h3>평점 {moviedetail?.vote_average}</h3>
                        <h3>개봉일 {moviedetail?.release_date}</h3>
                        <h3>{moviedetail?.tagline}</h3>
                        <p>{moviedetail?.overview ? (moviedetail?.overview) : 'TMDB에서 제공하는 상세 줄거리가 없습니다.'}</p>
                        <hr/>
                    </Detail>
                </div>
            </DetailContainer>
            <CreditContainer>
                <h3>감독/출연</h3>
                <h5>감독</h5>
                <ul>
                    {credit?.crew?.filter((member) => member.job === "Director").map((director, index) => (
                    <li key={`${director.id}-${index}`}>
                        <div className="photo">
                            {director.profile_path ? (
                                <img src={IMAGE_BASE_URL+director.profile_path} alt={director.name} />
                            ) : "No Image"}
                        </div>
                        <p className="name">{director.name}</p>
                        <p className="character">{director.job} ({director.department})</p>
                    </li>
                    ))}
                </ul>
                <h5>출연</h5>
                <ul>
                    {credit?.cast?.map((actor, index) => (
                    <li key={`${actor.id}-${index}`}>
                        <div className="photo">
                            {actor.profile_path ? (
                                <img src={IMAGE_BASE_URL+actor.profile_path} alt={actor.original_name} />
                            ) : (
                                <img src={'/black.jpg'} alt={'No image'} />
                            )}
                        </div>
                        <p className="name">{actor.original_name}</p>
                        <p className="character">{actor.character} ({actor.known_for_department})</p>
                    </li>
                    ))}
                </ul>
                <h5>제작진</h5>
                <ul>
                    {credit?.crew?.map((member, index) => (
                    <li key={`${member.id}-${index}`}>
                        <div className="photo">
                            {member.profile_path ? (
                                <img src={IMAGE_BASE_URL+member.profile_path} alt={member.name} />
                            ) : (
                                <img src={'/black.jpg'} alt={'No image'} />
                            )}
                        </div>
                        <p className="name">{member.name}</p>
                        <p className="character">{member.job} ({member.department})</p>
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

    img {
        width: 100vw;
        height: 100%;
        overflow: hidden;
        max-height: 350px;
        border-radius: 10px;
        object-fit: cover;
    }
`

const CreditContainer = styled.div`
    background-color: black;
    color:white;
    text-align: center;
    width: 100vw;
    height: 100hw;

    div{
        display: inline-block;
    }

    h3, h5{
        text-align: left;
    }

    li {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    }

    ul{
    display: flex;
    font-size: 15px;
    gap: 20px;
    }

    .photo{
        max-height: 80px;
        overflow: hidden;
        outline: 2px solid white;
        border-radius: 100px
    }

    .photo img{
    width: 80px;
    max-height: initial;
    }

    .name{
        font-weight: 700;
        padding: 8px;
        height: 0px;
    }

    .character{
        font-size: 10px;
        color: gray;
        padding: 8px;
        height: 0px;
    }
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