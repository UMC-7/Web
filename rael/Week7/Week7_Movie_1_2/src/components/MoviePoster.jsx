import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/queries/useGetMovies";
import SkeletonList from "../components/card-skeleton/SkeletonList";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MoviePoster = ({category}) => {
    const navigate = useNavigate();

    const ToMovieDetail = (movie) => {
        navigate(`/movies/${movie.id}`, {state: {movie}})
        console.log(movie);
    }

    const {data: movies, isPending, isError} = useQuery({
        queryFn: () => useGetMovies({categories: category, pageParam: 1}), 
        queryKey: ['movies', category], 
        cacheTime: 10000,
        staleTime: 10000,  
    })

    // isPending: 데이터를 불러오는 중입니다. 데이터가 로딩중일때 IsPending true.
    // isLoading: 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다.

    if (isPending) {
        return <Container>
            <SkeletonList number={25}/>
        </Container>
    }
    
    if (isError) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    return (
        <Container>
            {movies?.results.map((movie) => (
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