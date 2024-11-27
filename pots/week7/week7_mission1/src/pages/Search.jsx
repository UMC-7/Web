import { useState } from "react";
import styled from "styled-components";
import View from "../components/View";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchExist, setSearchExist] = useState(true);
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${VITE_API_KEY}`,          },
        }
      );
      const data = await response.json();
      setMovies(data.results);
      setSearchExist(data.results.length > 0);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setSearchExist(false); // 네트워크 오류로 검색 결과가 없을 경우 false로 설정
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      fetchMovies(inputValue.trim());
    } else {
      alert("검색어를 입력하세요.");
    }
  };

  return (
    <SearchBlock>
      <div className="search-bar">
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Enter 키로 검색
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <div className="search-results">
        {searchExist ? (
          <View movies={movies} />
        ) : (
          <div>{`"${inputValue}"에 대한 검색 결과가 없습니다.`}</div>
        )}
      </div>
    </SearchBlock>
  );
};

export default Search;

const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .search-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  input {
    width: 300px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
  }

  button {
    height: 40px;
    padding: 0 20px;
    border: none;
    border-radius: 5px;
    background-color: #f1ce08;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e1b907;
    }
  }

  .search-results {
    width: 60vw;
    max-height: 60vh;
    overflow-y: auto;
  }

  .search-results::-webkit-scrollbar {
    width: 8px;
  }

  .search-results::-webkit-scrollbar-thumb {
    background-color: #f1ce08;
    border-radius: 10px;
  }
`;