import React from 'react';
import '../styles/FavoritesPage.css';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const FavoritesPage = ({ favorites, handleListChange, handleDeleteMovie }) => {
  return (
    <div className="favorites-page">
      <h1 className='favorite-title'>Favoritos</h1>
      <div className="movie-list">
        {favorites.length === 0 ? (
          <p>No tienes películas en tu lista de favoritos.</p>
        ) : (
          favorites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleListChange={handleListChange}
              handleDeleteMovie={(id) => handleDeleteMovie(id, 'favorites')}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

