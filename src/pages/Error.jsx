import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className='error-page'>
      <h1>Oops !</h1>
      <p>Sorry, this page doesn't exist.</p>
      <Link to="/">Go home</Link>
    </main>
  );
};

export default Error;