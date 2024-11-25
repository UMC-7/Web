import View from "../components/View";
import { useEffect, useState } from "react";
import axios from "axios";

// 환경변수에서 API 키 가져오기
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API 요청
    const getNowPlayingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${VITE_API_KEY}`, // Bearer 토큰 형식으로 API 키 전달
            },
          }
        );
        // 영화 데이터 저장
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error); // 오류 발생 시 콘솔에 출력
      }
    };

    getNowPlayingMovies();
  }, []); // 빈 배열로 의존성 설정하여 첫 렌더링 시 한 번만 실행

  return <View movies={movies} />;
};

export default NowPlaying;