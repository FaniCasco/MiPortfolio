import React from "react";

function EducationCard({ curso, onVerCertificado }) {
  const hasMultipleCertificates = Array.isArray(curso.certificado);

  return (
    <div className="education-card">
      <div className="card-icon">
        <i className={curso.icono} aria-hidden="true" />
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
              {hasMultipleCertificates ? (
                <div className="dropdown">
                  <button type="button" className="certificado-btn">
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
                    type="button"
                    className="certificado-btn"
                    onClick={() => onVerCertificado(curso.certificado)}
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
  );
}

export default EducationCard;
