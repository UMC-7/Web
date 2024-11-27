import View from "../components/View";
import { useEffect, useState } from "react";
import axios from "axios";

// 환경변수에서 API 키 가져오기
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // Axios를 사용하여 GET 요청 보내기
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${VITE_API_KEY}`,
            },
          }
        );
        // API 응답에서 영화 데이터 가져오기
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return <View movies={movies} />;
};

export default Popular;