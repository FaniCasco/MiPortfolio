import React from "react";
import "../styles/pages.css";
import logoAbout from "../assets/images/logo-about.png";

function About() {
  return (
    <section className="page">
      {/* Sección Izquierda */}
      <div className="page-left">
        <div className="page-left-header">
          <img src={logoAbout} alt="About Logo" id="logo-header" />
          <h1 className="page-title">Sobre Mí</h1>
        </div>
        <p className="page-text">
          Como desarrolladora Front-End, estoy en constante evolución y cuento con 
          una sólida formación en tecnologías web. Mi capacidad para gestionar 
          proyectos de forma autónoma me permite ofrecer soluciones efectivas.  
        </p>
      </div>

      {/* Sección Derecha */}
      <div className="page-right">
        <img src={logoAbout} alt="About Logo" id="logo-bottom"/>
      </div>
    </section>
  );
}

export default About;

