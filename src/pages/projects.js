import React from "react";
import "../styles/pages.css";
import logoProjects from "../assets/images/logo-projects.png";

function Projects() {
  return (
    <section className="page">
      <div className="page-left">
        <h1 className="page-title">Mis Proyectos</h1>
        <p className="page-text">
          He desarrollado diversas aplicaciones web enfocadas en optimizar flujos 
          de trabajo y mejorar la experiencia de usuario. Aquí puedes ver algunos de ellos.
        </p>
      </div>

      <div className="page-right">
        <img src={logoProjects} alt="Projects Logo" />
      </div>
    </section>
  );
}

export default Projects;
