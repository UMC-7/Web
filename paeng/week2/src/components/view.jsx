import { MOVIES } from "../mocks/movies";
import "../styles/view.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const View = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {MOVIES.results.map((movie) => (
        <div
          key={movie.id}
          className="movie"
          style={{ width: "160px", margin: "10px" }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default View;
