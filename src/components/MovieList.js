import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList1 from '../Movies';

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="align">
        <h1 style={{ color: 'darkred' }}>Movie List</h1>
      </div>
      <br />
      <MovieList1 />
    </>
  );
};

export default MovieList;
