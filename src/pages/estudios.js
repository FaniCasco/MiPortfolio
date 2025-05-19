import React from "react";
import "../styles/estudios.css";
import logoEstudios from "../assets/images/logo-formacion.png";
import certificado1 from "../assets/certificados/fullstack-cilsa.png";
import certificado2 from "../assets/certificados/intensivo-javascript.pdf";
import certificado3 from "../assets/certificados/Diploma_CAC-python.pdf";
import certificado4 from "../assets/certificados/Diploma_CAC-agile.pdf";
import certificado5 from "../assets/certificados/frontend-argprog.pdf";
import certificado6 from "../assets/certificados/bbdd-argprog.pdf";
import certificado7 from "../assets/certificados/desSoftware-argprog.pdf";
import certificado8 from "../assets/certificados/nodejs.jpeg";
import certificado9 from "../assets/certificados/Diploma_CAC-reactjs.pdf";
import certificado10 from "../assets/certificados/coder.jpeg";
import certificado11 from "../assets/certificados/certificado-ingles-2.pdf";

const cursos = [
    {
    titulo: "ENGLISH PRE-INTERMEDIATE 1 COURSE",
    institucion: "CIUDAD BILINGÜE - ENGLISH DISCOVERIES",
    fecha: "MAYO 2025",
    descripcion: "Completé nivel 2 del trayecto de aprendizaje de Iglés para el trabajo logrando llegar a nivel A2",
    icono: "bi bi-stack",
    certificado: certificado11
  },
  {
    titulo: "BOOTCAMP FULLSTACK",
    institucion: "CILSA",
    fecha: "Agosto a Diciembre 2024",
    descripcion: "Adquirí habilidades en desarrollo web integral, dominando tecnologías como React.js para frontend y Node.js con Express.js para backend. Implementé bases de datos SQL/NoSQL, maquetación responsive con Bootstrap, y control de versiones mediante Git. Apliqué metodologías ágiles (Scrum) en proyectos reales, desde despliegue en hosting hasta integración full stack, culminando en una aplicación completa con autenticación, gestión de datos y trabajo colaborativo.",
    icono: "bi bi-stack",
    certificado: certificado1
  },
  {
    titulo: "JAVASCRIPT INTENSIVO",
    institucion: "CILSA",
    fecha: "Octubre a Noviembre 2024",
    descripcion: "El objetivo de este curso fue reforzar los conceptos básicos sobre programación con el lenguaje JavaScript desde lo más básico como son variables, tipos de datos, hasta las funciones e introducción al DOM.",
    icono: "bi bi-stack",
    certificado: certificado2
  },
  {
    titulo: "PROGRAMACIÓN INICIAL CON PYTHON",
    institucion: "CODO A CODO 4.0",
    fecha: "Febrero a Julio de 2024",
    descripcion: "Adquirí fundamentos esenciales de programación mediante Python, iniciando con lógica algorítmica utilizando PSeInt para el diseño de pseudocódigo y diagramas de flujo. El curso cubrió estructuras de control, funciones y modularización, enfocándose en la resolución de problemas con enfoque estructurado. Además, desarrollé interfaces gráficas básicas con Tkinter, creando aplicaciones funcionales.",
    icono: "bi bi-stack",
    certificado: certificado3
  },
  {
    titulo: "Especializaciones: AGILE Y SCRUM",
    institucion: "CODO A CODO 4.0",
    fecha: "2023-2024",
    descripcion: "Adquirí conocimientos esenciales en metodologías ágiles, como los fundamentos de Scrum (roles, eventos y artefactos), técnicas para gestionar historias de usuario y herramientas de coaching. El curso incluyó una introducción a marcos complementarios como Kanban, Lean, XP y TDD, enfocándose en la mejora continua y la entrega eficiente de proyectos en entornos colaborativos.",
    icono: "bi bi-stack",
    certificado: certificado4
  },
  {
    titulo: "FULL STACK JR",
    institucion: "ARGENTINA PROGRAMA 4.0 (Facultad de Ingeniería UnLaPam)",
    fecha: "Febrero a Noviembre 2023",
    descripcion: "Adquirí conocimientos básicos tanto de Front End como de BackEnd. Este trayecto de aprendizaje constó de 4 módulos: Programación Front End, Programación Backend, Base de datos y Desarrollo de Software.",
    icono: "bi bi-stack",
    certificado: [
      { nombre: "Frontend", url: certificado5 },
      { nombre: "Base de Datos", url: certificado6 },
      { nombre: "Desarrollo de Software", url: certificado7 }
    ]
  },
  {
    titulo: "FULL STACK - NODE/JS",
    institucion: "CODO A CODO 4.0",
    fecha: "Marzo a Julio 2023",
    descripcion: "En este curso, aprendí a crear servidores web multipropósito con Node JS y Express JS, desarrollar aplicaciones con arquitectura API Rest y trabajar con bases de datos en la nube como Firestore.",
    icono: "bi bi-stack",
    certificado: certificado8
  },
  {
    titulo: "REACT JS",
    institucion: "CODO A CODO 4.0",
    fecha: "Agosto a Octubre 2023",
    descripcion: "En este curso, aprendí a construir interfaces dinámicas mediante componentes reutilizables, manejo de estado (useState, useEffect) y props, integración con APIs REST, enrutamiento con React Router, y optimización de rendimiento. Es mi herramienta favorita para trabajar en mis proyectos.",
    icono: "bi bi-stack",
    certificado: certificado9
  },
  {
    titulo: "DESARROLLO WEB",
    institucion: "CODERHOUSE",
    fecha: "Junio a Agosto 2022",
    descripcion: "Aprendí a desarrollar sitios web usando HTML, CSS y JavaScript, creando diseños responsivos con Flexbox y Grid. Dominé Bootstrap para maquetar rápido, optimicé estilos con SASS y gestioné código con Git. Desarrollé proyectos reales como e-commerce, apliqué SEO básico y desplegué sitios funcionales, trabajando con metodologías ágiles.",
    icono: "bi bi-stack",
    certificado: certificado10
  }

];
function Estudios() {
  const handleVerCertificado = (certificadoUrl) => {
    window.open(certificadoUrl, '_blank');
  };

  return (
    <section className="page">
      <div className="page-left">
        <div className="page-left-header">
          <img src={logoEstudios} alt="Estudios Logo" id="logo-header" />
          <h1 className="page-title">Formación Académica</h1>

        </div>

        <div className="education-container">
          {cursos.map((curso, index) => (
            <div key={index} className="education-card">
              <div className="card-icon">
                <i className={curso.icono}></i>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h5 className="card-title">{curso.titulo}</h5>
                  <span className="card-institution">{curso.institucion}</span>
                </div>
                <div className="card-content">
                  <p className="card-description">{curso.descripcion}</p>
                  <div className="card-footer">
                    <span className="card-date">{curso.fecha}</span>
                    <div className="certificados-container">
                      {Array.isArray(curso.certificado) ? (
                        <div className="dropdown">
                          <button className="certificado-btn">
                            Ver Certificados ▼
                          </button>
                          <div className="dropdown-content">
                            {curso.certificado.map((cert, idx) => (
                              <a
                                key={idx}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificado-link"
                              >
                                {cert.nombre}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        curso.certificado && (
                          <button
                            className="certificado-btn"
                            onClick={() => handleVerCertificado(curso.certificado)}
                          >
                            Ver Certificado
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-right-formacion">
        <img src={logoEstudios} alt="Estudios Logo" id="logo-bottom" className="img-estudios" />
      </div>
    </section>
  );
}

export default Estudios;
