import React from "react";
import "../styles/estudios.css";
import logoEstudios from "../assets/images/logo-formacion.png";
import certificado1 from "../assets/certificados/fullstack-cilsa.png";
import certificado2 from "../assets/certificados/intensivo-javascript.pdf";
import certificado3 from "../assets/certificados/Diploma_CAC-python.pdf";
import certificado4 from "../assets/certificados/Diploma_CAC-agile.pdf";
//import certidicado5 from "../assets/certificados/Diploma_CAC-agile.pdf";


const cursos = [
  { 
    titulo: "BOOTCAMP FULLSTACK", 
    institucion: "CILSA", 
    fecha: "Agosto a Diciembre 2024", 
    descripcion: "Adquirí habilidades en desarrollo web integral, dominando tecnologías como React.js para frontend y Node.js con Express.js para backend. Implementé bases de datos SQL/NoSQL, maquetación responsive con Bootstrap, y control de versiones mediante Git. Apliqué metodologías ágiles (Scrum) en proyectos reales, desde despliegue en hosting hasta integración full stack, culminando en una aplicación completa con autenticación, gestión de datos y trabajo colaborativo.",
    icono: "bi bi-stack",
    certificado: certificado1 // Referencia directa
  },
  { 
    titulo: "JAVASCRIPT INTENSIVO", 
    institucion: "CILSA", 
    fecha: "Octubre a Noviembre 2024", 
    descripcion: "El objetivo de este curso fue reforzar los conceptos básicos sobre programación con el lenguaje JavaScript desde lo más básico como son variables, tipos de datos, hasta las funciones e introducción al DOM.",
    icono: "bi bi-stack",
    certificado: certificado2 // Referencia directa
  },
  { 
    titulo: "PROGRAMACIÓN INICIAL CON PYTHON", 
    institucion: "CODO A CODO 4.0", 
    fecha: "Febrero a Julio de 2024", 
    descripcion: "Adquirí fundamentos esenciales de programación mediante Python, iniciando con lógica algorítmica utilizando PSeInt para el diseño de pseudocódigo y diagramas de flujo. El curso cubrió estructuras de control, funciones y modularización, enfocándose en la resolución de problemas con enfoque estructurado. Además, desarrollé interfaces gráficas básicas con Tkinter, creando aplicaciones funcionales.",
    icono: "bi bi-stack",
    certificado: certificado3 // Referencia directa
  },
  { 
    titulo: "Especializaciones:  AGILE Y SCRUM y HABILIDADES BLANDAS ", 
    institucion: "CODO A CODO 4.0", 
    fecha: "2023-2024", 
    descripcion: "Adquirí conocimientos esenciales en metodologías ágiles, como los fundamentos de Scrum (roles, eventos y artefactos), técnicas para gestionar historias de usuario y herramientas de coaching. El curso incluyó una introducción a marcos complementarios como Kanban, Lean, XP y TDD, enfocándose en la mejora continua y la entrega eficiente de proyectos en entornos colaborativos.",
    icono: "bi bi-stack",
    certificado: certificado4 // Referencia directa
  },
  // ... otros cursos
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
          <p className="page-text">Estos son todos los cursos y especializaciones que realicé</p>
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
                    {curso.certificado && (
                        <button 
                          className="certificado-btn"
                          onClick={() => handleVerCertificado(curso.certificado)}
                        >
                          Ver Certificado
                        </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-right">
        <img src={logoEstudios} alt="Estudios Logo" id="logo-bottom" />
      </div>
    </section>
  );
}

export default Estudios;
