import React from 'react';
import { useNavigate } from 'react-router-dom';

const Podcast = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="align">
        <h1 style={{ color: 'darkgreen' }}>My Podcasts</h1>

        <br />
        <a href="https://baconsale.com/">Visit baconsale.come</a>
      </div>
    </>
  );
};

export default Podcast;
