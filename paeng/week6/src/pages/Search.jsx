import { useState } from "react";
import styled from "styled-components";
import View from "../components/View";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");  
  const [searchTerm, setSearchTerm] = useState("");  
  const [searchExist, setSearchExist] = useState(true);
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;

  const handleSearch = () => {
    setSearchTerm(inputValue);  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: VITE_API_KEY,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=ko&page=1`,
      options
    )
    .then((response) => response.json())
    .then((response) => {
      setMovies(response.results);
      setSearchExist(response.results.length > 0);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <SearchBlock>
      <div className="wrap">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        {searchExist ? <View movies={movies} /> : <div>{searchTerm}에 대한 검색 결과가 없습니다.</div>}
      </div>
    </SearchBlock>
  );
};

export default Search;

const SearchBlock = styled.div`
  display: inline-block;
  .wrap {
    width: 60vw;
    height: 60vh;
    overflow-y: scroll;
  }
  .wrap::-webkit-scrollbar {
    width: 8px;
  }
  .wrap::-webkit-scrollbar-thumb {
    background-color: #f1ce08;
    border-radius: 10px;
  }
  img {
    width: 150px;
    height: 220px;
  }
  .poster{
    position: relative;
  }
  .ov {
    display: none;
    width: 110px;
    height: 180px;
    overflow: hidden;
    font-weight: normal;
    margin-top: -223px;
  }
  ul {
    margin-right: 5px;
  }
  .poster:hover .ov {
    background-color: rgba(0, 0, 0, 0.621);
    cursor: pointer;
    display: block;
  }
`;
