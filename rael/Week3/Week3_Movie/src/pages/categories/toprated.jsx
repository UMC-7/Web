import { MoviePoster } from "../../components/MoviePoster";

const TopRated = () => {
    return (
        <MoviePoster apiUrl="https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1"/>
    );
};

export default TopRated;