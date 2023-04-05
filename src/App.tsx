//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopBanner from './Blah';
//import MovieList from './Movies';
import JoelHiltonHeadshot from './img/JoelHiltonHeadshot.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Podcast from './components/Podcast';
import Home from './components/Home';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/MovieList">MovieList</Link>
        </li>
      </ul>
    </nav>
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
