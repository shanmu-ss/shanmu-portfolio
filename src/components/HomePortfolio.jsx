// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-brand fixed-top shadow-sm  navbar-expand-lg navbar-light bg-secondary navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5"><span className="fst-italic fw-bolder" style={{ color: '#ffffff' }}>Shanmu</span></h1>
      </a>
      <div className="navbar-collapse px-lg-3">
        <div className=" m-auto py-0">
          <a href="https://www.instagram.com/shanmu_throttler?igsh=cm01ODdzZHRiYmpl" className="btn btn-secondary space-btn-insta" style={{ color: '#ffffff' }}>Instagram</a>
          <a href="www.linkedin.com/in/bs5" className="btn btn-secondary space-btn-Linkedin" style={{ color: '#ffffff' }}>LinkedIn</a>
          <a href="https://github.com/shanmu-ss" className="btn btn-secondary space-btn-Github" style={{ color: '#ffffff' }}>Github</a>
        </div>
        <a href="/add-employee" className="btn btn-menu d-none d-lg-block" style={{ backgroundColor: '#457efa', color: '#ffffff' }}>Reach out</a>
      </div>
    </nav>
    
  );
};

export default Navbar;
