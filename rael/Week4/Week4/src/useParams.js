import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
    const params = useParams();
    console.log(params)

    return (
        <div className="test">
            <p>현재 페이지의 파라미터는 {params.movieId} 입니다.</p>
        </div>
    )
}

export default MovieDetailPage;