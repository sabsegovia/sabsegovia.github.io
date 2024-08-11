import React from 'react';
import '../styles/WatchlistPage.css';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';
import '../index.css';

const WatchlistPage = ({ watchlist, handleListChange, handleDeleteMovie }) => {
  return (
    <div className="watchlist-page">
      <h1 className='watchlist-title'>Watchlist</h1>
      <div className="movie-list">
        {watchlist.length === 0 ? (
          <p>No tienes películas en tu watchlist.</p>
        ) : (
           watchlist.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleListChange={handleListChange}
              handleDeleteMovie={(id) => handleDeleteMovie(id, 'watchlist')}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
