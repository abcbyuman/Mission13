//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Podcast from './components/Podcast';
import Home from './components/Home';
import MovieList from './components/MovieList';

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Podcast">My Podcasts</Link>
          </li>
          <li>
            <Link to="/MovieList">MovieList</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Podcast" Component={Podcast} />
          <Route path="/MovieList" Component={MovieList} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
