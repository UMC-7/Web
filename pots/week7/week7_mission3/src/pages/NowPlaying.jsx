import React, { useState } from "react";
import View from "../components/View";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

// 환경변수에서 API 키 가져오기
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

// API 요청 함수 분리
const fetchNowPlayingMovies = async ({ page }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${VITE_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }

  return response.json();
};

const NowPlaying = () => {
  const [page, setPage] = useState(1); // 현재 페이지 상태

  const { data, isLoading, isError, isPreviousData } = useQuery({
    queryKey: ["now-playing", page],
    queryFn: () => fetchNowPlayingMovies({ page }),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Loading>로딩 중입니다...</Loading>;
  }

  if (isError) {
    return (
      <ErrorMessage>
        영화 데이터를 가져오는 중 오류가 발생했습니다.
      </ErrorMessage>
    );
  }

  // 데이터가 없을 때의 처리
  if (!data || !data.results || data.results.length === 0) {
    return <ErrorMessage>현재 상영 중인 영화를 찾을 수 없습니다.</ErrorMessage>;
  }

  // 영화 데이터를 18개씩 잘라냄
  const moviesToShow = data.results.slice(0, 18);

  return (
    <Container>
      <View movies={moviesToShow} /> {/* 잘라낸 데이터를 전달 */}
      <Pagination>
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || isPreviousData}
        >
          이전
        </Button>
        <PageNumber>페이지 {page}</PageNumber>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!data || data.results.length < 18}
        >
          다음
        </Button>
      </Pagination>
    </Container>
  );
};

export default NowPlaying;

// 스타일 정의
const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  color: gray;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
  background-color: ${(props) => (props.disabled ? "gray" : "#f1ce08")};
  color: ${(props) => (props.disabled ? "white" : "black")};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "gray" : "#e1b907")};
  }
`;

const PageNumber = styled.span`
  font-size: 16px;
  color: black;
`;