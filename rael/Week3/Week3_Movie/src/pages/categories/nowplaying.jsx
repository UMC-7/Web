import { MoviePoster } from "../../components/MoviePoster";

const NowPlaying = () => {
    return (
        <MoviePoster apiUrl="https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1"/>
    );
};

export default NowPlaying;