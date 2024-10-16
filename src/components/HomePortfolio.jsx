// Navbar.js
import React from 'react';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top shadow-sm">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h1 className="display-5 text-white">Shanmu</h1>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="https://www.instagram.com/shanmu_throttler" className="nav-link text-white">Instagram</a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/bs5" className="nav-link text-white">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/shanmu-ss" className="nav-link text-white">Github</a>
            </li>
          </ul>
        </div>
        <a href="/add-employee" className="btn btn-primary">Reach Out</a>
      </div>
    </nav>
  );
};

export default Navbar;
