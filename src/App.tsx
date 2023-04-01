//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopBanner from './Blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Austins React Website - Main" />
      <MovieList />
    </div>
  );
}

export default App;
