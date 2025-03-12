import React from "react";
import "../styles/pages.css";
import logoEstudios from "../assets/images/logo-formacion.png";

function Estudios() {
  return (
    <section className="page">
      <div className="page-left">
        <h1 className="page-title">Formación Académica</h1>
        <p className="page-text">
          Mi formación en desarrollo Front-End incluye tecnologías como HTML, CSS, JavaScript, 
          React y otras herramientas modernas para la creación de aplicaciones web.
        </p>
      </div>

      <div className="page-right">
        <img src={logoEstudios} alt="Estudios Logo" />
      </div>
    </section>
  );
}

export default Estudios;
