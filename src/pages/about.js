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
        Desarrolladora Front-End Jr con experiencia liderando equipos y creando
         aplicaciones funcionales. Mis años trabajando en ventas, costura y arte 
         me dieron experiencia en: atención al detalle, creatividad para resolver
          problemas y paciencia para tejer soluciones desde cero. 
          Actualmente trabajo en aplicaciones de gestión de clientes mientras
           busco empleo en una empresa donde pueda formar parte de un equipo IT 
           para seguir aprendiendo, aportar ideas frescas y crecer profesionalmente 
           mientras construimos cosas útiles juntos. 
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

