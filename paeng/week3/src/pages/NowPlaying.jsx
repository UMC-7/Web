import View from "../components/view";
import { useState } from "react";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: VITE_API_KEY,
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1",
    options
  )
    .then((response) => response.json())
    .then(response => setMovies(response.results))
    .catch((err) => console.error(err));

  return <View movies={movies} />;
};

export default NowPlaying;
