import { useState } from 'react';

const useGetMovies = (url) => {
  const [movies, setMovies] = useState([]);

  
    const VITE_API_KEY = import.meta.env.VITE_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: VITE_API_KEY,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${url}?language=ko&page=1`, options)
    .then((response) => response.json())
    .then(response => setMovies(response.results))
    .catch((err) => console.error(err));
 

  return { movies };
};

export default useGetMovies;
