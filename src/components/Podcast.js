import React from 'react';
import { useNavigate } from 'react-router-dom';

const Podcast = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'green' }}>My Podcasts</h1>
    </>
  );
};

export default Podcast;
