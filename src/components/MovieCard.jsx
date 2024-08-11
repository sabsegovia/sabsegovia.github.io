import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faClock, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/MovieCard.css';
import '../index.css';

const MovieCard = ({ movie, handleListChange, handleDeleteMovie }) => {
  const [rating, setRating] = useState(movie.rating || 0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState(movie.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    movie.rating = rate;
  };

  const handleMouseEnter = (rate) => {
    setHoverRating(rate);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const addComment = () => {
    if (newComment.trim() === '') return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');
    
  };

  return (
    <div className={`movie-card ${isExpanded ? 'expanded' : ''}`}>
      <img src={movie.posterUrl} alt={`${movie.title} poster`} className="movie-poster" />
      <h3>{movie.title} <span>({movie.year})</span></h3>
      <p>Director: {movie.director}</p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <span
            key={index}
            className={`star ${hoverRating >= star || rating >= star ? 'filled' : ''} ${Math.ceil(hoverRating) === star || Math.ceil(rating) === star ? 'half' : ''}`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
        ))}
      </div>
      <div className="buttons">
        <button
          className="watchlist"
          onClick={() => handleListChange(movie, 'watchlist')}
          title="Agregar a Watchlist"
        >
          <FontAwesomeIcon icon={faClock} />
        </button>
        <button
          className="favorites"
          onClick={() => handleListChange(movie, 'favorites')}
          title="Agregar a Favoritos"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="watched"
          onClick={() => handleListChange(movie, 'watched')}
          title="Agregar a Watched"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        {handleDeleteMovie && (
          <button
            className='delete'
            onClick={() => handleDeleteMovie(movie.id)}
            title='Eliminar película'
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <button className="info-button" onClick={toggleExpand}>
        + info
      </button>
      {isExpanded && (
        <div className="movie-details">
          <p className="synopsis">Sinopsis: {movie.synopsis}</p>
          <p className="general-rating">Ratings: {movie.generalRating} <FontAwesomeIcon icon={faStar} /></p>
          <div className="comments-section">
            <h4>Reseñas:</h4>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Añadir una reseña..."
            />
            <button className="info-button" onClick={addComment}>Añadir reseña</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
