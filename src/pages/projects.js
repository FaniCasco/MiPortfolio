import React from "react";
import logoProjects from "../assets/images/logo-projects.png";
import "../styles/pages.css";
import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      title: "Gestor de Tareas",
      description: "App web con funcionalidades CRUD, login y filtros dinámicos.",
      techs: "React, Firebase, Bootstrap",
      github: "https://github.com/FaniCasco/todo-app",
      demo: "https://fani-todo.web.app",
    },
    {
      title: "E-commerce",
      description: "Tienda con carrito, filtros y consumo de API para productos.",
      techs: "React, Node.js, MongoDB",
      github: "https://github.com/FaniCasco/ecommerce-app",
      demo: "https://fani-ecommerce.netlify.app",
    },
    {
      title: "E-commerce",
      description: "Tienda con carrito, filtros y consumo de API para productos.",
      techs: "React, Node.js, MongoDB",
      github: "https://github.com/FaniCasco/ecommerce-app",
      demo: "https://fani-ecommerce.netlify.app",
    },
    {
      title: "E-commerce",
      description: "Tienda con carrito, filtros y consumo de API para productos.",
      techs: "React, Node.js, MongoDB",
      github: "https://github.com/FaniCasco/ecommerce-app",
      demo: "https://fani-ecommerce.netlify.app",
    },
    // podés agregar más si querés
  ];

  return (
    <section className="page">
      <div className="projects-container">
        <div className="projects-content">
          <h1 className="page-title">Proyectos</h1>
          <p className="page-text">
            Algunos proyectos que reflejan mi crecimiento y pasión por el desarrollo web.
          </p>

          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-card-glass" key={idx}>
                <h2 className="card-title">{proj.title}</h2>
                <span className="card-institution">{proj.techs}</span>
                <p className="card-description">{proj.description}</p>
                <div className="card-footer">
                  <a className="certificado-btn" href={proj.github} target="_blank" rel="noreferrer">
                    Ver Código
                  </a>
                  <a className="certificado-btn" href={proj.demo} target="_blank" rel="noreferrer">
                    Ver Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-right">
          <img src={logoProjects} alt="Logo proyectos" />
        </div>
      </div>
    </section>

  );
}

export default Projects;




