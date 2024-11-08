import {MoviePoster} from "../../components/MoviePoster"

const UpComing = () => {
    return (
        <MoviePoster apiUrl='/movie/upcoming?language=ko-KR&page=1'/>
    );
};

export default UpComing;