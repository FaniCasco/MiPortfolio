import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages.css";
import "../styles/contact.css";
import logoContact from "../assets/images/logo-contact.png";
function Contact() {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ibm1a4j", // Reemplaza con tu Service ID de EmailJS
        "template_s9fon5g", // Reemplaza con tu Template ID
        e.target,
        "Xs_5gpoybEQ3MDsCi" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setMessageSent(true);
          setLoading(false);
        },
        (error) => {
          console.error("Error:", error.text);
          setLoading(false);
        }
      );
  };

  if (messageSent) {
    return (
      <section className="page-contact">
        <p className="mje-success">¡Mensaje enviado exitosamente!</p>
      </section>
    );
  }

  return (
    <section className="page-contact">
      <div className="page-left-contact">
        <div className="page-left-header">
          <img src={logoContact} alt="Contact Logo" id="logo-header" />
          <h1 className="page-title-contact">Contacto</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label><br />
            <input type="text" id="name" name="name" placeholder="Nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email"></label><br />
            <input type="email" id="email" name="email" placeholder="E-mail" required />
          </div>

          <div className="form-group">
            <label htmlFor="message"></label><br />
            <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje"></textarea>
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>

      </div>

      <div className="page-right-contacto">
        <img src={logoContact} alt="Contact Logo" id="logo-bottom" className="img-contacto" />
      </div>
    </section>
  );
}

export default Contact;

