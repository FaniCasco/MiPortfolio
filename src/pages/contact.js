import React, { useState } from "react";
import "../styles/contact.css";
import "../styles/pages.css";
import logoContact from "../assets/images/logo-contact.png";

function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
  
      // Validación mejorada
      if (!/\S+@\S+\.\S+/.test(data.email)) {
        throw new Error('Email inválido');
      }
  
      // FormSubmit URL de destino
      const formSubmitURL = "https://formsubmit.co/fanymar@live.com";  // Reemplaza con tu correo en FormSubmit

      const response = await fetch(formSubmitURL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new URLSearchParams(data)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en el servidor');
      }
  
      alert('Mensaje enviado exitosamente!');
      e.target.reset();
    } catch (error) {
      alert(error.message || 'Error al enviar el mensaje');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="page-contact">
      {/* Sección Izquierda: Información de Contacto */}
      <div className="page-left-contact">
        <div className="page-left-header">
          <img src={logoContact} alt="Contact Logo" id="logo-header" />
          <h1 className="page-title-contact">Contacto</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
              disabled={isSending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Tu apellido"
              required
              disabled={isSending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@email.com"
              required
              disabled={isSending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              required
              disabled={isSending}
            ></textarea>
          </div>

          <div className="form-button-container">
            <button
              type="submit"
              className="form-button"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
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
