import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList1 from '../Movies';

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'darkred' }}>Movie List</h1>
      <MovieList1 />
    </>
  );
};

export default MovieList;
