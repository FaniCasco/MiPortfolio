import React from "react";
import logoProjects from "../assets/images/logo-projects.png";
import "../styles/pages.css";
import "../styles/projects.css";
import videoCafe from "../assets/videos/cafe-coco.mp4";
import videoInmobiliaria from "../assets/videos/demo-gestorInmobiliario.mp4";


function Projects() {
  const projects = [
    {
      title: "SISTEMA DE GESTION DE CLIENTES Y PRODUCTOS",
      description: "Es un sistema que permite gestionar clientes y productos. Además, el usuario puede tener el control del stock y las ventas. Puede ser utilizado con o sin conexión a internet.",
      techs: "React, Postgres, Bootstrap, NodeJs, Express, SweetAlert",
      github: "https://github.com/FaniCasco/GESTION-DE-PRODUCTOS-CAFE",
      demo: videoCafe,
    },
    {
      title: "GESTOR DE CLIENTES DE UNA INMOBILIARIA",
      description: "Esta App permite a una inmobiliaria tener el registro de inquilinos y propietarios en un listado fácil de manipular. Puede editar, agregar y eliminar datos. Tambien posee una barra de búsqueda, un botón para imprimir el recibo y otro para enviarlo por whastapp.",
      techs: "React, NodeJs, Postgres, Bootstrap.",
      github: "https://github.com/FaniCasco/GESTION-DE-CLIENTES",
      demo: videoInmobiliaria,
    },
    {
      title: "SISTEMA DE GESTIÓN HOTELERA",
      description: "Este es un sistema que gestiona toda la administración de un hotel: empleados, reservas, habitaciones, cobros y huéspedes.",
      techs: "React, Node.js, Bootstrap, SweetAlert",
      github: "https://github.com/FaniCasco/Sistema-de-gestion-Hotelera",
      demo: "https://sistema-de-gestion-hotelera-one.vercel.app/",
    },
    {
      title: "E-COMMERCE DE VENTA DE COMIDA RÁPIDA",
      description: "Sitio web que simula ser una tienda de comida rápida. Simple y con calidad en sus imágenes y mucho color.",
      techs: "React, Bootstrap, HTML5, CSS3, SWEET ALERT",
      github: "https://github.com/FaniCasco/PROYECTO-GRUPAL-2-CILSA",
      demo: "https://lusafastfood.vercel.app/",
    },
    {
      title: "BILLETERA VIRTUAL",
      description: "Billetera virtual hecha en equipo con Python y Tkinter para la interfaz. Con registro de usuario y contraseña, se puede gestionar entradas de dinero, carga de servicios, pagos y consulta de movimientos.",
      techs: "PYTHON, TKINTER",
      github: "https://github.com/FaniCasco/PAYPY",
      demo: "#",
    },
    {
      title: "PLATAFORMA STREAM REACTv",
      description: "Es una aplicación web desarrollada en equipo con React y Firebase, con sistema de registro de usuario y contraseña. Consume el uso de la API TMDB. Gracias a ello se pueden ver los trailers de series y películas, siendo actualizada con los estrenos al día de la fecha.",
      techs: "REACT, FIREBASE, NODEJS, EXPRESS, BOOSTRAP, SWEETALERT, TMDB API",
      github: "https://github.com/FaniCasco/Plataforma-Stream-ReacTv",
      demo: "https://23644-grupo1-reac-tv.vercel.app/",
    },
    {
      title: "DULCES HUMAYA: SITIO WEB DE RECETAS",
      description: "Es un sitio web simple pero con colores y diseños de calidad. Es responsive para diversos tamaños de pantallas y tiene una vista agradable para el ususario. Consume una API de recetas y esta construída con React.",
      techs: "REACT,  NODEJS, EXPRESS, BOOTSTRAP, API",
      github: "https://github.com/FaniCasco/REACT-TP-HUMAYA",
      demo: "https://react-tp-humaya.vercel.app/",
    },
    {
      title: "E-COMMERCE: HOUSE HERRAMIENTAS",
      description: "Este sitio web fue mi primer proyecto en mis comienzos con el desarrollo web. Consiste en un sitio de 5 páginas, con formulario de ocntacto y página de error 404. Simple pero completo, con todo lo que debe tener un sitio web en cuanto al SEO.",
      techs: "HTML5, CSS3, BOOTSTRAP, SAAS, JAVASCRIPT",
      github: "https://github.com/FaniCasco/PROYECTO-FINAL-CODER",
      demo: "https://househerramientas.vercel.app/",
    }
    // podés agregar más si querés
  ];

  return (
    <section className="page">
      <div className="projects-container">
        <div className="projects-content">
          <div className="section-header">
            <img src={logoProjects} alt="Logo proyectos" className="section-logo" />
            <h1 className="section-title">Proyectos</h1>
          </div>

          <p className="page-text text-projects">
            A continuación podés ver una selección de proyectos que reflejan mi evolución
            como desarrolladora web. <br />
            Empecé creando una tienda e-commerce utilizando HTML5, CSS3 y Bootstrap, y
            con el tiempo fui incorporando tecnologías modernas como React, Node.js y bases de datos. <br />
            Cada proyecto cuenta una parte del camino, desde los primeros pasos hasta los desafíos más
            actuales.
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

        <div className="page-right-projects">
          <img src={logoProjects} alt="Logo proyectos"
            className="img-projects"
          />
        </div>
      </div>
    </section>

  );
}

export default Projects;




