import React from "react";

import {
  PROJECTS_DEV,
  PROJECTS_FIGMA,
} from "../data/projects";

import ProjectCard from "../components/ProjectCard";

import "../styles/pages.css";
import "../styles/projects.css";

import logoProjects from "../assets/images/logo-projects.png";

const PROJECTS_INTRO =
  "Esta sección reúne proyectos desarrollados tanto desde el lado técnico como desde el diseño UX/UI.";

function Projects() {
  return (
    <section className="page">

      <div className="projects-wrapper">

        {/* HEADER */}

        <div className="projects-header-full">

          <div className="section-header">

            <img
              src={logoProjects}
              alt="Proyectos"
              className="section-logo"
            />

            <h1 className="section-title">
              Proyectos
            </h1>

          </div>

          <p className="page-text text-projects">
            {PROJECTS_INTRO}
          </p>

        </div>

        {/* COLUMNAS */}

        <div className="projects-columns">

          {/* DESARROLLO */}

          <div className="projects-column">

            <h2 className="projects-subtitle">
              Desarrollo Front-End
            </h2>

            <div className="projects-grid">

              {PROJECTS_DEV.map((proj, idx) => (
                <ProjectCard
                  key={idx}
                  {...proj}
                  type="dev"
                />
              ))}

            </div>

          </div>

          {/* UX/UI */}

          <div className="projects-column">

            <h2 className="projects-subtitle">
              UX/UI & Prototipos
            </h2>

            <div className="projects-grid">

              {PROJECTS_FIGMA.map((proj, idx) => (
                <ProjectCard
                  key={idx}
                  {...proj}
                  type="figma"
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;