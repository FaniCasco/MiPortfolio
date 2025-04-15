import React from "react";
import logo from "../assets/images/logo-simple.png";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub, FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" 
          style={{ width: '100px', height: '100px', marginRight: '10px', marginLeft: '-50px'}} 
          className="logo" />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/"> <FaHome /> </a></li>
            <li className="nav-item"><a className="nav-link" href="/about">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="/estudios">Formación</a></li>
            <li className="nav-item"><a className="nav-link" href="/projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contacto</a></li>
            <div className="footer-social-nav">
              <a href="https://www.linkedin.com/in/fani-casco/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/+543564582222" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="mailto:fanymar@live.com">
                <FaEnvelope />
              </a>
              <a href="https://github.com/FaniCasco" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
