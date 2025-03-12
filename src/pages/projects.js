import React from "react";
import "../styles/pages.css";
import logoProjects from "../assets/images/logo-projects.png";

function Projects() {
  return (
    <section className="page">
      <div className="page-left">
        <div className="page-left-header">
          <img src={logoProjects} alt="Projects Logo" id="logo-header" />
          <h1 className="page-title">Proyectos</h1>
        </div>
        <p className="page-text">
          He desarrollado diversas aplicaciones web enfocadas en optimizar flujos 
          de trabajo y mejorar la experiencia de usuario. Aquí puedes ver algunos de ellos.
        </p>
      </div>

      <div className="page-right">
        <img src={logoProjects} alt="Projects Logo" id="logo-bottom" />
      </div>
    </section>
  );
}

export default Projects;
