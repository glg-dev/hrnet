import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Link to="/"> 
        <h1>HRnet</h1>
      </Link>
    </header>
  );
};

export default Header;