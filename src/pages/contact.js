import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../styles/contact.css";
import "../styles/pages.css";
import logoContact from "../assets/images/logo-contact.png";

function Contact() {
  const [state, handleSubmit] = useForm("xdkekqpg");

  if (state.succeeded) {
    return (
      <section className="page-contact">
        <p className='mje-success'>Mensaje enviado exitosamente!</p>
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
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required disabled={state.submitting} />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id="lastname" name="lastname" placeholder="Tu apellido" required disabled={state.submitting} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" name="email" placeholder="fanymar@live.com" required disabled={state.submitting} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required disabled={state.submitting}></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-button" disabled={state.submitting}>
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