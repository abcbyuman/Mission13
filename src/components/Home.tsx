import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../Blah';
import JoelHiltonHeadshot from '../img/JoelHiltonHeadshot.jpg';

function Render() {
  return (
    <div className="App">
      <img src={JoelHiltonHeadshot} alt="Joel" />
      <br />
      <br />
      <br />
      <br />
      <TopBanner saying="A page dedicated to the preservation of Joels legendary movie collections" />
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'darkblue' }}>The Joel Hilton Movie Collection</h1>
      <Render />
    </>
  );
};

export default Home;
