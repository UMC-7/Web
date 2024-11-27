import View from "../components/View";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

// 환경변수에서 API 키 가져오기
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

// API 요청 함수 분리
const fetchNowPlayingMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${VITE_API_KEY}`, // Bearer 토큰 형식으로 API 키 전달
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch now playing movies");
  }
  return response.json(); // JSON 응답 반환
};

const NowPlaying = () => {
  // useQuery로 API 데이터 요청 및 상태 관리
  const { data, isLoading, isError } = useQuery({
    queryKey: ["now-playing"], // Query Key
    queryFn: fetchNowPlayingMovies, // 데이터를 가져오는 함수
  });

  if (isLoading) {
    return <Loading>로딩 중입니다...</Loading>;
  }

  if (isError) {
    return <ErrorMessage>영화 데이터를 가져오는 중 오류가 발생했습니다.</ErrorMessage>;
  }

  // 응답 데이터가 없거나 비어 있는 경우
  if (!data || !data.results || data.results.length === 0) {
    return <ErrorMessage>현재 상영 중인 영화를 찾을 수 없습니다.</ErrorMessage>;
  }

  return <View movies={data.results} />; // 올바른 데이터 참조
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