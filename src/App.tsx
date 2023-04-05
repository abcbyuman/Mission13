//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopBanner from './Blah';
import MovieList from './Movies';
import JoelHiltonHeadshot from './img/JoelHiltonHeadshot.jpg';
/*import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';*/

/* function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}*/

function App() {
  return (
    /* <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch> */

    <div className="App">
      <TopBanner saying="Austins React Website - Main" />
      <img src={JoelHiltonHeadshot} alt="Joel" />
      <MovieList />
    </div>
    /* </Router> */
  );
}

export default App;
