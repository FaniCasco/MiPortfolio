import React from "react";

function AporteCard({ icono, titulo, detalle }) {
  return (
    <div className="aporte-card">
      <span className="aporte-icono" role="img" aria-hidden="true">
        {icono}
      </span>
      <div>
        <h4 className="aporte-titulo">{titulo}</h4>
        <p className="aporte-detalle">{detalle}</p>
      </div>
    </div>
  );
}

export default AporteCard;
