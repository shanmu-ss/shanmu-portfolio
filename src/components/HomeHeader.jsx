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
            <h1 className="font-weight-normal">Associate Software Engineer</h1>
            <p className="mt-3">
              Experienced Cloud Engineer with 2+ years in both professional and freelance settings. Dedicated to ongoing learning, I actively pursue skill improvement and stay current with the latest in Technology and DevOps.
            </p>
            <a href="doc/Resume.pdf" className="btn btn-secondary">Download Resume</a>
          </div>
          <div className="col-lg-5 text-center">
            <img src="https://i.ibb.co/gwTZd6m/Untitled-design.png" className="img-fluid rounded-circle" alt="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
