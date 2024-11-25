import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SkeletonList from "../components/card-skeleton/SkeletonList";
import { useState, useEffect } from "react";
import { useGetPagination } from "../hooks/queries/useGetPagination";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MoviePoster = ({category}) => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: movies, 
        isPending, 
        isError, 
    } = useGetPagination(category, currentPage);

    // 전체 페이지 개수
    const totalPages = movies?.total_pages || 0;
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...] 버튼
    //const numbers = [...Array(totalPages + 1).keys()].slice(1);


    // 페이지네이션 로직을 개선하여 버튼 수를 제한
    const maxPageButtons = 7; // 최대 표시할 페이지 버튼 수
    const pageNumbers = [];

    if (totalPages <= maxPageButtons) {
        // 전체 페이지 수가 최대 버튼 수 이하인 경우 모든 페이지 표시
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // 첫 번째 페이지는 항상 표시
        pageNumbers.push(1);

        let startPage = Math.max(2, currentPage - 2);
        let endPage = Math.min(totalPages - 1, currentPage + 2);

        if (currentPage <= 3) {
            // 초기 페이지 근처일 때
            endPage = 5;
        } else if (currentPage >= totalPages - 2) {
            // 마지막 페이지 근처일 때
            startPage = totalPages - 4;
        }

        // 중간 페이지 추가
        if (startPage > 2) {
            pageNumbers.push("...");
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) {
            pageNumbers.push("...");
        }

        // 마지막 페이지는 항상 표시
        pageNumbers.push(totalPages);
    }

    const ToMovieDetail = (movie) => {
        navigate(`/movies/${movie.id}`, {state: {movie}})
        // console.log(movie);
    }

    // isPending: 데이터를 불러오는 중입니다. 데이터가 로딩중일때 IsPending true.
    // isLoading: 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다.

    console.log(movies);

    if (isPending) {
        return <Container>
            <SkeletonList number={20}/>
        </Container>
    }
    
    if (isError) {
        return <div>
            <h1 style={{color:'white'}}>Error!!!</h1>
        </div>
    }

    return (
        <>
            <Container>
                {movies?.results?.map((movie) =>  (
                        <Movies key={movie.id} onClick={() => {ToMovieDetail(movie)}}>
                            <Img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                            <Overlay></Overlay>
                            <Title>{movie.title}</Title>
                            <ReleaseDate>{movie.release_date}</ReleaseDate>
                        </Movies>
                    ))}
            </Container>
            <PaginationContainer>
                <Button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    이전
                </Button>
                {pageNumbers.map((number, idx) =>
                    number === "..." ? (
                        <Ellipsis key={`ellipsis-${idx}`}>...</Ellipsis>
                    ) : (
                        <PageButton
                            key={`page-${number}`}
                            active={currentPage === number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </PageButton>
                    )
                )}
                <Button 
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    다음
                </Button>
            </PaginationContainer>
        </>
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

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    background-color: ${(props) => (props.active ? "#ddd" : "#FFFFFF")};
`;

const PageButton = styled.button`
    padding: 10px;
    font-size: 15px;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    background-color: ${(props) => (props.active ? "#FF8AA3" : "#FFFFFF")};
`;

const Ellipsis = styled.span`
    margin: 0 5px;
    padding: 5px 10px;
    color: white;
`;