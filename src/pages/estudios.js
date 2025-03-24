import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/pages.css";
import logoEstudios from "../assets/images/logo-formacion.png";

const cursos = [
  { titulo: "React Avanzado", institucion: "Platzi", fecha: "2023", descripcion: "Curso de React con hooks y optimización de performance.", icono: "bi bi-code-slash" },
  { titulo: "JavaScript Moderno", institucion: "Udemy", fecha: "2022", descripcion: "Profundización en ES6+, asincronía y buenas prácticas.", icono: "bi bi-file-code" },
  { titulo: "CSS Flexbox y Grid", institucion: "Coderhouse", fecha: "2021", descripcion: "Maquetación avanzada con CSS moderno.", icono: "bi bi-palette" }
];

function Estudios() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <img src={logoEstudios} alt="Estudios Logo" className="img-fluid mb-3" />
        <h1 className="fw-bold">Formación Académica</h1>
        <p>Mi formación en desarrollo Front-End incluye tecnologías como HTML, CSS, JavaScript, React y más.</p>
      </div>

      <div className="timeline">
        {cursos.map((curso, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-icon">
              <i className={curso.icono}></i>
            </div>
            <div className="timeline-content">
              <h5 className="fw-bold">{curso.titulo}</h5>
              <h6 className="text-muted">{curso.institucion} - {curso.fecha}</h6>
              <p>{curso.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Estudios;

