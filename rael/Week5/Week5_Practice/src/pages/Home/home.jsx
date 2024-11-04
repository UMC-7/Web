import {MoviePoster} from "../../components/MoviePoster"

const HomePage = () => {
    return (
        <MoviePoster apiUrl='/movie/popular?language=ko-KR&page=1'/>
    );
};

export default HomePage;