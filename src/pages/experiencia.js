import React from "react";
import { EXPERIENCIA_ACTUAL, APORTES } from "../data/experiencia";
import AporteCard from "../components/AporteCard";
import "../styles/experiencia.css";
import "../styles/pages.css";
import logoExperiencia from "../assets/images/logo-about.png";

function Experiencia() {
  return (
    <section className="page page-experiencia">
      <div className="page-left experiencia-left">
        <div className="page-left-header">
          <img src={logoExperiencia} alt="Experiencia laboral" id="logo-header" />
          <h1 className="page-title">Experiencia Laboral</h1>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <span className="badge-programa">+26</span>
            <h2 className="experience-empresa">{EXPERIENCIA_ACTUAL.empresa}</h2>
            <p className="experience-programa">{EXPERIENCIA_ACTUAL.programa}</p>
            <p className="experience-rol">{EXPERIENCIA_ACTUAL.rol}</p>
            <div className="tech-tags">
              {EXPERIENCIA_ACTUAL.tecnologias.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="experience-body">
            {EXPERIENCIA_ACTUAL.descripcion.map((parrafo, idx) => (
              <p key={idx} className="experience-parrafo">
                {parrafo}
              </p>
            ))}
          </div>
        </div>

        <div className="aportes-section">
          <h3 className="aportes-title">Lo que aporto</h3>
          <div className="aportes-grid">
            {APORTES.map((item, idx) => (
              <AporteCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="page-right-experiencia">
        <img
          src={logoExperiencia}
          alt="Experiencia laboral"
          id="logo-bottom"
          className="img-experiencia"
        />
      </div>
    </section>
  );
}

export default Experiencia;
