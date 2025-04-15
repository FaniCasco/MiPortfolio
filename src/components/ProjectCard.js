// components/ProjectCard.jsx
import React from "react";
import "../styles/projects.css";

function ProjectCard({ title, description, image, techs, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title}  className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tecnologías:</strong> {techs}</p>
      <div className="project-links">
        {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
        {demo && <a href={demo} target="_blank" rel="noreferrer">Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
