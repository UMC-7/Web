import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import SkeletonList from "./card-skeleton/SkeletonList";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MovieSearch = () => {
    const navigate = useNavigate();

    const ToMovieDetail = (movie) => {
        navigate(`/movies/${movie.id}`, {state: {movie}})
        console.log(movie);
    }

    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    const apiUrl = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`
    

    const { data: movies, isLoading, isError } = useCustomFetch(apiUrl)

    if (isLoading) {
        return <Container>
            <SkeletonList number={25}/>
        </Container>
    }
    
    if (isError) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    if (mq && movies.data?.results.length === 0) {
        return (
            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <h1 style={{color: 'white'}}>해당하는 검색어 {mq}에</h1>
                <h1 style={{color: 'white'}}>해당하는 데이터가 없습니다.</h1>
            </div>
        )
    }

    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <Movies key={movie.id} onClick={() => {ToMovieDetail(movie)}}>
                    <Img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                    <Overlay></Overlay>
                    <Title>{movie.title}</Title>
                    <ReleaseDate>{movie.release_date}</ReleaseDate>
                </Movies>
            ))}
        </Container>
    )
}

const Movies = styled.div`
    position: relative;
    width: 150px;
    height: 220px;
    margin: 10px;
    padding-bottom: 55px;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;

    ${Movies}:hover & {
        opacity: 1;
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: white;
    margin-top: 5px;
`;

const ReleaseDate = styled.div`
    display: flex;
    color: white;
    font-size: 11px;
`;