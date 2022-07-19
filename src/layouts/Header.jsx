import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/15974125765772_image2.jpg'

const Header = () => {

  return (
    <header>
      <Link to="/"> 
        <h1>HRnet</h1>
      </Link>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;