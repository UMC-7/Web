import {MoviePoster} from "../../components/MoviePoster"

const TopRated = () => {
    return (
        <MoviePoster apiUrl='/movie/top_rated?language=ko-KR&page=1'/>
    );
};

export default TopRated;