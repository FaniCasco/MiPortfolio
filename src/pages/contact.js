import React from "react";
import "../styles/contact.css";
import "../styles/pages.css"; // Asegúrate de importar también el CSS de pages
import logoContact from "../assets/images/logo-contact.png";

function Contact() {
  return (
    <section className="page-contact">
      {/* Sección Izquierda: Información de Contacto */}
      <div className="page-left-contact">
        <div className="page-left-header">
          <img src={logoContact} alt="Contact Logo" id="logo-header" />
          <h1 className="page-title-contact">Contacto</h1>
        </div>

        <form className="contact-form" action="https://formsubmit.co/fanymar@live.com" method="POST">
          {/* ... (resto del formulario) ... */}
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id="lastname" name="lastname" placeholder="Tu apellido" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="tucorreo@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="3" placeholder="Escribe tu mensaje aquí..." required></textarea>
          </div>
          <div>
            <input type="hidden" name="_captcha" value="false" />
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button">Enviar Mensaje</button>
          </div>
        </form>
      </div>

      {/* Sección Derecha: Imagen */}
      <div className="page-right">
        <img src={logoContact} alt="Contact Logo" id="logo-bottom" />
      </div>
    </section>
  );
}

export default Contact;
