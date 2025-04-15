import React from "react";
import { FaHome, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiReact,
  SiMysql,

} from "react-icons/si";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Primera columna: Menú de navegación */}
        <nav className="footer-menu">
          <Link to="/"><FaHome /></Link>
          <Link to="/about">Sobre mí</Link>
          <Link to="/estudios">Formación</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contacto</Link>
        </nav>

        {/* Segunda columna: Información */}
        <div className="footer-info">
  <p>&copy; {new Date().getFullYear()} FANI MARIEL CASCO</p>
  <p>
    <FaHeart style={{ color: '#f5deb3', marginRight: '5px' }} />
    Desarrolladora Front End Jr.
    <FaHeart style={{ color: '#f5deb3', marginLeft: '5px' }} />
  </p>
</div>


       

          <div className="footer-tech">
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiGit />
            <SiGithub />
            <SiReact />
            <SiMysql />
          </div>
        </div>

    </footer>
  );
}



export default Footer;

