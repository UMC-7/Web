import {MoviePoster} from "../components/MoviePoster"

const HomePage = () => {
    return (
        <MoviePoster apiUrl="https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"/>
    );
};

export default HomePage;