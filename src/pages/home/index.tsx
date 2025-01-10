import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './home.scss' ;
import itPeriprealLogo from '../../assets/itperipreal.svg';
import printingLogo from '../../assets/printing.svg';
import pantryLogo from '../../assets/pantry.svg';
import merchandiseLogo from '../../assets/merchandise.svg';

const Home = () => {
  const [content, setContent] = useState<string>('');

  const handleContent = (content: string) => {
    setContent(content);
  };

  return (
    <div className="home">
      <div className="home-title">
        <p className="home-title-1">E-Catalogue</p>
        <p className="home-title-1">select what you need here</p>
        <p className="home-title-2">Select your needs based on the categories below</p>
      </div>

      <div className="home-content">
        <Link to="/it-periperal" className="home-content-card bg-1">
          <div className="home-content-card-title">
            <p>IT Periperal</p>
            <p>Go</p>
          </div>
          <img src={itPeriprealLogo} className="logo-content" alt="It Peripreal logo" />
        </Link>

        <Link to="/printing" className="home-content-card bg-2">
          <div className="home-content-card-title">
            <p>Printing</p>
            <p>Go</p>
          </div>
          <img src={printingLogo} className="logo-content" alt="Printing logo" />
        </Link>

        <Link to="/stationary-supply" className="home-content-card bg-3">
          <div className="home-content-card-title">
            <p>Stationary & Pantry Supply</p>
            <p>Go</p>
          </div>
          <img src={pantryLogo} className="logo-content" alt="Pantry logo" />
        </Link>
        
        <Link to="merchandise" className="home-content-card bg-4">
          <div className="home-content-card-title">
            <p>Merchandise</p>
            <p>Go</p>
          </div>
          <img src={merchandiseLogo} className="logo-content" alt="Merchandise logo" />
        </Link>
      </div>
    </div>
  );
};

export default Home;