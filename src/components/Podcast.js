import React from 'react';
import { useNavigate } from 'react-router-dom';

const Podcast = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'darkgreen' }}>My Podcasts</h1>
      <a href="https://baconsale.com/">Visit baconsale.come</a>
    </>
  );
};

export default Podcast;
