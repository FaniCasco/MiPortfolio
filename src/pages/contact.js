import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/contact.css";
import "../styles/pages.css";
import logoContact from "../assets/images/logo-contact.png";

function Contact() {
  const [state, handleSubmit] = useForm("xdkekqpg");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);  // Guarda el token de reCAPTCHA
  };

  if (state.succeeded) {
    return (
      <section className="page-contact">
        <p className="mje-success">Mensaje enviado exitosamente!</p>
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
          {/* Evitar que Formspree bloquee mensajes como spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="g-recaptcha" value={captchaValue} />

          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Nombre" required disabled={state.submitting} />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id="lastname" name="lastname" placeholder="Apellido" required disabled={state.submitting} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" name="_replyto" placeholder="E-mail" required disabled={state.submitting} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje" disabled={state.submitting}></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* reCAPTCHA v3 */}
          <ReCAPTCHA
            sitekey="6LfB2vsqAAAAAAfk9vURkznEOtvr43iyiZQpAxGu"  // TU CLAVE DEL SITIO
            onChange={handleCaptchaChange}
          />

          <div className="form-button-container">
            <button type="submit" className="form-button" disabled={!captchaValue || state.submitting}>
              {state.submitting ? (
                <>
                  <span className="spinner"></span> Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="page-right">
        <img src={logoContact} alt="Contact Logo" id="logo-bottom" />
      </div>
    </section>
  );
}

export default Contact;

