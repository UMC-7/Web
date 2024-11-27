import React, { useRef } from "react";
import View from "../components/View";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

// API 요청 함수
const fetchNowPlayingMovies = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${pageParam}`,
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
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["now-playing"],
    queryFn: ({ pageParam }) => fetchNowPlayingMovies({ pageParam }),
    getNextPageParam: (lastPage) => {
      // 다음 페이지를 결정 (마지막 페이지를 초과하면 undefined 반환)
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });

  const observerRef = useRef(); // Intersection Observer 참조

  const lastMovieElementRef = React.useCallback(
    (node) => {
      if (isFetchingNextPage) return; // 데이터 로딩 중일 때는 옵저버 작동 중단
      if (observerRef.current) observerRef.current.disconnect(); // 기존 Observer 해제

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // 스크롤이 끝에 도달했을 때 다음 페이지 로드
        }
      });

      if (node) observerRef.current.observe(node); // 새 노드에 옵저버 연결
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  if (isLoading) {
    return <Loading>로딩 중입니다...</Loading>;
  }

  if (isError) {
    return <ErrorMessage>영화 데이터를 가져오는 중 오류가 발생했습니다.</ErrorMessage>;
  }

  // 응답 데이터가 없거나 비어 있는 경우
  if (!data || !data.pages || data.pages.length === 0) {
    return <ErrorMessage>현재 상영 중인 영화를 찾을 수 없습니다.</ErrorMessage>;
  }

  const movies = data.pages.flatMap((page) => page.results); // 모든 페이지 데이터를 플랫하게 정리

  return (
    <Container>
      <View movies={movies} />
      <div ref={lastMovieElementRef}>
        {isFetchingNextPage && <Loading>로딩 중입니다...</Loading>}
        {!hasNextPage && <EndMessage>더 이상 데이터가 없습니다.</EndMessage>}
      </div>
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

const EndMessage = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  color: gray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;