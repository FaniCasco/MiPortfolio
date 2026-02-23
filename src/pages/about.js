import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";
import "../styles/about.css";
import logoAbout from "../assets/images/logo-about.png";

function About() {
  return (
    <section className="page">
      <div className="page-left">
        <div className="page-left-header">
          <img src={logoAbout} alt="About Logo" id="logo-header" />
          <h1 className="page-title">Sobre Mí</h1>
        </div>
        <p className="page-text">
          Soy Desarrolladora Front-End con foco en React y JavaScript. Actualmente
          formo parte del equipo de desarrollo en{" "}
          <Link to="/experiencia" className="about-link">
            Estudio Rocha & Asociados
          </Link>{" "}
          (Programa +26 del Gobierno de Córdoba), donde participo en la creación,
          mejora y mantenimiento de interfaces web.
        </p>
        <p className="page-text">
          Me apasiona crear soluciones digitales que simplifiquen procesos y aporten valor real.
          Mi formación en arte, junto con mi experiencia en gestión y tecnología, me permite
          combinar lógica + creatividad para diseñar interfaces claras, funcionales y con intención.
        </p>
        <p className="page-text">
          <strong className="about-highlight">Objetivo profesional:</strong> Seguir aprendiendo,
          mantenerme actualizada en nuevas tecnologías y crecer profesionalmente dentro de equipos
          que valoren la iniciativa, el aprendizaje constante y la creación de productos digitales
          de calidad.
        </p>
        <Link to="/experiencia" className="about-cta">
          Ver mi experiencia laboral →
        </Link>
      </div>

      <div className="page-right-about">
        <img src={logoAbout} alt="About Logo" id="logo-bottom" className="img-about" />
      </div>
    </section>
  );
}

export default About;
