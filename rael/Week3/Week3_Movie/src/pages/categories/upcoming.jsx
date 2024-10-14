import { MoviePoster } from "../../components/MoviePoster";

const UpComing = () => {
    return (
        <MoviePoster apiUrl="https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1"/>
    );
};

export default UpComing;