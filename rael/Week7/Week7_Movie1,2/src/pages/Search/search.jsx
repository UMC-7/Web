import { useState } from "react";
import TitleStyle from "../../components/TitleStyle";
import * as S from './search.style'
import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import { MovieSearch } from "../../components/MovieSearch";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    const handleSearchMovie = () => {
        navigate(`/search?mq=${searchValue}`)
        console.log('hi');
    }

    const handleSearchLoad = searchValue === mq;
    console.log(handleSearchLoad);

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter' && searchValue!==mq) {
            handleSearchMovie();
        }
    }

    return (
        <>
            <S.SearchContainer>
                <input placeholder="영화 제목을 입력해주세요." value={searchValue} onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <button onClick={handleSearchMovie} disabled={handleSearchLoad}>검색</button>
            </S.SearchContainer>
            <MovieSearch/>
        </>
    );
};

export default SearchPage;