import {MoviePoster} from "../../components/MoviePoster"

const NowPlaying = () => {
    return (
        <MoviePoster apiUrl='/movie/now_playing?language=ko-KR&page=1'/>
    );
};

export default NowPlaying;