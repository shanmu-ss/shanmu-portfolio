// HomeHeader.js
import React from 'react';
import '../Portfolio.css';
import HomePortfolio from '../components/HomePortfolio';

function HomeHeader() {
  return (
    <div className="portfolio-section">
      <HomePortfolio />
      <div className="container text-white py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="display-4">Hi, This is <span className="highlight">SHANMU</span></h3>
            <h1 className="font-weight-normal">Software Engineer</h1>
            <p className="mt-3">
              Experienced Cloud Engineer with 2+ years in both professional and freelance settings. Dedicated to ongoing learning, I actively pursue skill improvement and stay current with the latest in Technology and DevOps.
            </p>
            <a href="https://www.canva.com/design/DAFxI7GaMrM/C9Yvk4KLhe2ThyG6EiG-dw/view" className="btn btn-secondary">Download Resume</a>
          </div>
          <div className="col-lg-5 text-center">
            <img src="img/shanmu.png" className="img-fluid rounded-circle" alt="Profile" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
