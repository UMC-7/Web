import React from 'react';
import './App.css';
import { MOVIES } from './mocks/movies';

const base_url = "https://image.tmdb.org/t/p";
const file_size = "/w500";

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 20 }}>
      {MOVIES.results.map((movie) => {
        const file_path = movie.poster_path;

        return (
          <div
            className="movie-item"
            style={{
              width: 180,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 8,
            }}
            key={movie.id}
          >
            <img
              src={`${base_url}${file_size}${file_path}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 8,
              }}
            />
            {/* 오버레이 요소 */}
            <div className="movie-overlay"></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;