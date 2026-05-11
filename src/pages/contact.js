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

      .then((response) => {

        console.log(
          "SUCCESS!",
          response.status,
          response.text
        );

        setMessageSent(true);

        setLoading(false);

        e.target.reset();

      })

      .catch((error) => {

        console.error(
          "FAILED...",
          error
        );

        alert(
          "Hubo un error al enviar el mensaje."
        );

        setLoading(false);

      });

  };

  /* =============================
     SUCCESS
  ============================= */



if (messageSent) {
  return (
    <section className="page-contact success-page">
      <div className="success-card">
        <img
          src={logoContact}
          alt="Mensaje enviado"
          className="success-logo"
        />

        <h2 className="success-title">
          ¡Mensaje enviado!
        </h2>

        <p className="success-text">
          Gracias por contactarte conmigo 💛
        </p>

        <p className="success-text-secondary">
          Tu mensaje fue enviado correctamente.
          <br />
          Te responderé lo antes posible.
        </p>

        <button
          className="form-button"
          onClick={() => setMessageSent(false)}
        >
          Enviar otro mensaje
        </button>
      </div>
    </section>
  );
}

  /* =============================
     FORM
  ============================= */

  return (

    <section className="page-contact">

      <div className="page-left-contact">

        <div className="page-left-header">

          <img
            src={logoContact}
            alt="Contacto"
            id="logo-header"
          />

          <h1 className="page-title-contact">
            Contacto
          </h1>

        </div>

        <p className="page-text">
          ¿Tenés una propuesta, proyecto
          o simplemente querés conectar?
          Podés escribirme a través del formulario.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              required
            />

          </div>

          <div className="form-group">

            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />

          </div>

          <div className="form-group">

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Escribe tu mensaje"
            />

          </div>

          <div className="form-button-container">

            <button
              type="submit"
              className="form-button"
              disabled={loading}
            >

              {loading
                ? "Enviando..."
                : "Enviar Mensaje"}

            </button>

          </div>

        </form>

      </div>

      {/* RIGHT */}

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
