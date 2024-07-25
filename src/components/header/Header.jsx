import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const pathname = window.location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container px-5">
        <span className="navbar-brand">
          <span className="fw-bolder text-primary">Showfolio</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <span className="text-primary">
                highlight your presence</span>
            </li>

          </ul>
        </div>
        {/* {pathname !== "/" && !pathname.includes("/home") ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('resume')}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
              </li>
            </ul>
          </div>
        ) : null} */}
      </div>
    </nav>
  );
};

export default Header;
