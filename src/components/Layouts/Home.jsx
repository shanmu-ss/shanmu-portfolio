// Home.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePortfolio from '../HomePortfolio';
import HomeHeader from '../HomeHeader';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomePortfolio />
    </div>
  );
};

export default Home;
