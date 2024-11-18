import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./search.style.js"; 
import MovieView from "../../components/MovieView/MovieView.jsx";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../apis/axios-instance.js";
import { Movie } from "../../components/MovieView/movieview.style.js";
import MoviePoster from "../../components/MoviePoster.jsx";
import * as M from "../../components/MovieView/movieview.style.js"
import useCustomFetch from "../../hooks/useCustomFetch.js";
import SearchMovieList from "./SearchMovieList.jsx";

const SearchPage=()=>{
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams({
        query:""
   })

   const query = searchParams.get('query')

    const onSearchChange = (e)=>{
        setSearchValue(e.target.value)
    }
    const handleSearch=()=>{
        if(query===searchValue) return;
        navigate(`/search?query=${searchValue}`)
        console.log("handleSearch")
    }
    const handleSearchWithKeyboard=(e)=>{
        if(e.key==='Enter'){
            handleSearch()
        }
    }

    return(
        <div>
            <S.SearchContainer>
                <input placeholder="검색어를 입력하세요" value={searchValue} onChange={onSearchChange}
                    onKeyDown={handleSearchWithKeyboard}></input>
                <button onClick={handleSearch}>검색</button>
            </S.SearchContainer>
            <SearchMovieList></SearchMovieList>
        </div>    )
}
export default SearchPage