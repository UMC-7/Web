import { useEffect, useState } from "react";
import axios from "axios";

// 환경 변수에서 API 키 가져오기
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useGetMovies = (url) => {
  const [data, setData] = useState(null); // movies 혹은 movie detail data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 상태 시작
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${url}?language=ko&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${VITE_API_KEY}`, // Bearer 형식으로 API 키 전달
            },
          }
        );
        setData(response.data); // 요청 성공 시 데이터 저장
      } catch (error) {
        setError(error); // 요청 실패 시 에러 저장
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, [url]); // url이 변경될 때마다 재요청

  return { data, loading, error };
};

export default useGetMovies;