import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot <small>(with Wallaby.js support)</small></h1>

      <h2>Get Started</h2>
      <ol>
        <li>Sample <Link to="search">search</Link> page</li>
      </ol>
    </div>
  );
};

export default HomePage;
