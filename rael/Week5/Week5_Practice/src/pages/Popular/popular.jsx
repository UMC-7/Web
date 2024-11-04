import {MoviePoster} from "../../components/MoviePoster"

const Popular = () => {
    return (
        <MoviePoster apiUrl='/movie/popular?language=ko-KR&page=1'/>
    );
};

export default Popular;