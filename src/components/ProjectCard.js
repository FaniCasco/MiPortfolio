import React from "react";

function ProjectCard({ title, techs, description, github, demo }) {
  return (
    <div className="project-card-glass">
      <h2 className="card-title">{title}</h2>
      <span className="card-institution">{techs}</span>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <a
          className="certificado-btn"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Código
        </a>
        <a
          className="certificado-btn"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
