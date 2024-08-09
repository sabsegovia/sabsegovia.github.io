import React from 'react';
import '../styles/WatchedPage.css';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const WatchedPage = ({ watched, handleListChange, handleDeleteMovie }) => {
  return (
    <div className="watched-page">
      <h1 className='watched-title'>Watched</h1>
      <div className="movie-list">
        {watched.length === 0 ? (
          <p>No tienes películas en tu lista de watched.</p>
        ) : (
          watched.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleListChange={handleListChange}
              handleDeleteMovie={(id) => handleDeleteMovie(id, 'watched')}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WatchedPage;