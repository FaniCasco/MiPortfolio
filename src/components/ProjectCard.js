import React from "react";

function ProjectCard({
  title,
  techs,
  description,
  github,
  demo,
  type,
}) {
  return (
    <div className="project-card-glass">

      <h2 className="card-title">
        {title}
      </h2>

      <span className="card-institution">
        {techs}
      </span>

      <p className="card-description">
        {description}
      </p>

      <div className="card-footer">

        {/* SOLO DESARROLLO */}

        {type === "dev" && github && (
          <a
            className="certificado-btn"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Código
          </a>
        )}

        {/* DEMO / FIGMA */}

        <a
          className="certificado-btn"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {type === "figma"
            ? "Ver Prototipo"
            : "Ver Demo"}
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;
