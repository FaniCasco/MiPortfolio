import React from "react";
import { CURSOS } from "../data/cursos";
import "../styles/pages.css";
import EducationCard from "../components/EducationCard";
import "../styles/estudios.css";
import logoEstudios from "../assets/images/logo-formacion.png";

function Estudios() {
  const handleVerCertificado = (url) => window.open(url, "_blank");

  return (
    <section className="page">
      <div className="page-left">
        <div className="page-left-header">
          <img src={logoEstudios} alt="Formación académica" id="logo-header" />
          <h1 className="page-title">Formación Académica</h1>
        </div>
        <div className="education-container">
          {CURSOS.map((curso, index) => (
            <EducationCard
              key={index}
              curso={curso}
              onVerCertificado={handleVerCertificado}
            />
          ))}
        </div>
      </div>
      <div className="page-right-formacion">
        <img
          src={logoEstudios}
          alt="Formación académica"
          id="logo-bottom"
          className="img-estudios"
        />
      </div>
    </section>
  );
}

export default Estudios;
