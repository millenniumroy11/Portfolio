import React from 'react';
import logoImg from '../assets/logo.ico';
//import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg metallic-navbar">
        <div className="container-fluid">
          {/*<a className="navbar-brand text-silver" href="#about">MyPortfolio</a>*/}
          <img src={logoImg} alt="logo" className="logo-img" />
          <button className="navbar-toggler bg-silver" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-silver" href="#about">About</a>
              <a className="nav-link text-silver" href="#education">Education</a>
              <a className="nav-link text-silver" href="#experience">Experience</a>
              <a className="nav-link text-silver" href="#projects">Projects</a>
              <a className="nav-link text-silver" href="#skills">Skills</a>
              <a className="nav-link text-silver" href="#certifications">Certifications</a>
              <a className="nav-link text-silver" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
