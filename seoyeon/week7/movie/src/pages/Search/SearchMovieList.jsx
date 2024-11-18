import { useSearchParams } from "react-router-dom"
import useCustomFetch from "../../hooks/useCustomFetch"
import * as S from "./search.style"
import * as M from "../../components/MovieView/movieview.style"
import { Movie } from "../../components/MovieView/movieview.style"
import MoviePoster from "../../components/MoviePoster"
import CardSkeleton from "../../components/Card/CardSkelton"

const SearchMovieList=()=>{
    const [searchParams, setSearchParams] = useSearchParams({
        query:""
    })
    const query = searchParams.get('query')

    const {data, isLoading, isError} = useCustomFetch(`/search/movie?query=${query}&include_adult=false&language=kor&page=1`)

    console.log(data)

    if (isLoading){
        return(
            <S.MovieGridContainer>
                {data.data?.results.map((movie)=>
                    <CardSkeleton/>
                )}
            </S.MovieGridContainer>
        )
    }
    if(query && !isLoading &&data.data.results.length===0){
        return(
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>검색어 '{query}'에 해당하는 영화가 없습니다.</h1>
            </div>
        )
    }

    return(
        <S.MovieGridContainer>
            {data.data?.results.map((movie)=>
                <Movie to={`/movies/${movie.id}`}>
                    <MoviePoster title={movie.title} poster_path={movie.poster_path}/>
                    <M.MovieInfoFonf>{movie.title}</M.MovieInfoFonf>
                    <M.MovieInfoFonf>{movie.release_date}</M.MovieInfoFonf>
                </Movie>
            )}
        </S.MovieGridContainer>
    )
}

export default SearchMovieList