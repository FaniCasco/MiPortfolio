import React from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages.css";
import "../styles/projects.css";
import logoProjects from "../assets/images/logo-projects.png";

const PROJECTS_INTRO =
  "A continuación podés ver una selección de proyectos que reflejan mi evolución como desarrolladora web. " +
  "Empecé creando una tienda e-commerce utilizando HTML5, CSS3 y Bootstrap, y con el tiempo fui incorporando tecnologías modernas como React, Node.js y bases de datos. " +
  "Cada proyecto cuenta una parte del camino, desde los primeros pasos hasta los desafíos más actuales.";

function Projects() {
  return (
    <section className="page">
      <div className="projects-container">
        <div className="projects-content">
          <div className="section-header">
            <img src={logoProjects} alt="Proyectos" className="section-logo" />
            <h1 className="section-title">Proyectos</h1>
          </div>
          <p className="page-text text-projects">{PROJECTS_INTRO}</p>
          <div className="projects-grid">
            {PROJECTS.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </div>
        <div className="page-right-projects">
          <img
            src={logoProjects}
            alt="Proyectos"
            className="img-projects"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
