import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "../config/constants";
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
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        e.target,
        EMAILJS.PUBLIC_KEY
      )
      .then(
        () => {
          setMessageSent(true);
          setLoading(false);
        },
        (error) => {
          console.error("Error al enviar mensaje:", error.text);
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
          <img src={logoContact} alt="Contacto" id="logo-header" />
          <h1 className="page-title-contact">Contacto</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" />
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Escribe tu mensaje"
            />
          </div>
          <div className="form-button-container">
            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>
      </div>

      <div className="page-right-contacto">
        <img
          src={logoContact}
          alt="Contacto"
          id="logo-bottom"
          className="img-contacto"
        />
      </div>
    </section>
  );
}

export default Contact;
