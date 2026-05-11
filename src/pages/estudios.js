import React, { useState } from "react";

import { CURSOS } from "../data/cursos";

import "../styles/pages.css";
import "../styles/estudios.css";

import EducationCard from "../components/EducationCard";

import logoEstudios from "../assets/images/logo-formacion.png";

function Estudios() {

  const handleVerCertificado = (url) =>
    window.open(url, "_blank");

  /* PAGINACIÓN */

  const cursosPorPagina = 4;

  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(
    CURSOS.length / cursosPorPagina
  );

  const indiceInicial =
    (paginaActual - 1) * cursosPorPagina;

  const indiceFinal =
    indiceInicial + cursosPorPagina;

  const cursosActuales =
    CURSOS.slice(indiceInicial, indiceFinal);

  return (
    <section className="page">

      {/* LEFT */}

      <div className="page-left">

        <div className="page-left-header">

          <img
            src={logoEstudios}
            alt="Formación académica"
            id="logo-header"
          />

          <h1 className="page-title">
            Formación Académica
          </h1>

        </div>

        <div className="education-container">

          {cursosActuales.map((curso, index) => (

            <EducationCard
              key={index}
              curso={curso}
              onVerCertificado={handleVerCertificado}
            />

          ))}

        </div>

        {/* PAGINACIÓN */}

        <div className="pagination">

          <button
            disabled={paginaActual === 1}
            onClick={() =>
              setPaginaActual((prev) => prev - 1)
            }
            className="pagination-btn"
          >
            ←
          </button>

          <span className="pagination-info">
            {paginaActual} / {totalPaginas}
          </span>

          <button
            disabled={paginaActual === totalPaginas}
            onClick={() =>
              setPaginaActual((prev) => prev + 1)
            }
            className="pagination-btn"
          >
            →
          </button>

        </div>

      </div>

      {/* RIGHT */}

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
