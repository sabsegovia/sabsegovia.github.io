import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import FavoritesPage from './pages/FavoritesPage';
import WatchedPage from './pages/WatchedPage';
import Footer from './components/Footer';

  
const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);

  const handleListChange = (movie, list) => {
    const updatedMovie = { ...movie };
    if (list === 'watchlist') {
      setWatchlist(prevList => [...prevList, movie]);
    } else if (list === 'favorites') {
      setFavorites(prevList => [...prevList, movie]);
    } else if (list === 'watched') {
      setWatched(prevList => [...prevList, movie]);
    }
  };

  const handleDeleteMovie = (movieId, list) => {
    if (list === 'watchlist') {
      setWatchlist(prevList => prevList.filter(movie => movie.id !== movieId));
    } else if (list === 'favorites') {
      setFavorites(prevList => prevList.filter(movie => movie.id !== movieId));
    } else if (list === 'watched') {
      setWatched(prevList => prevList.filter(movie => movie.id !== movieId));
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleListChange={handleListChange} />} />
        <Route path="/watchlist" element={
          <WatchlistPage
            watchlist={watchlist}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
        <Route path="/favorites" element={
          <FavoritesPage
            favorites={favorites}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
        <Route path="/watched" element={
          <WatchedPage
            watched={watched}
            handleListChange={handleListChange}
            handleDeleteMovie={handleDeleteMovie}
          />
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;