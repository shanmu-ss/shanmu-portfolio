import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        <a href="/" className="navbar-brand-text">
          &lt;<span>Shanmu</span> /&gt;
        </a>
        <button
          className="navbar-toggler navbar-toggler-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-toggler-icon-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#certifications" className="nav-link">Certs</a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/bs5" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/shanmu-ss" className="nav-link" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <a href="#contact" className="btn btn-primary ms-3">Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;

