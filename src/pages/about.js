import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages.css";
import "../styles/about.css";

import logoAbout from "../assets/images/logo-about.png";

function About() {
  return (
    <section className="page">

      {/* LEFT */}
      <div className="page-left">

        <div className="page-left-header">
          <img
            src={logoAbout}
            alt="About Logo"
            id="logo-header"
          />

          <h1 className="page-title">
            Sobre Mí
          </h1>
        </div>

        <p className="page-text">
          Soy Desarrolladora Front-End, ampliando mi experiencia en UX/UI Design</p>
        <p className="page-text">Mi última experiencia laboral fue en <a
          href="https://estudiorochayasoc.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          Estudio Rocha & Asociados
        </a>, y mi función consistía en la mejora y mantenimiento de interfaces web y gestión de contenidos digitales.
        </p>

        <p className="page-text">
          En algunos proyectos, tuve que migrar la estructura hecha en React, al framework Quasar, utilizando Vue.js. Esto implicó adaptar componentes y funcionalidades a la nueva tecnología, asegurando que la experiencia de usuario se mantuviera clara, funcional y consistente durante la transición.

        </p>

        <p className="page-text">
          Además, participé en la actualización y organización de contenidos en
          sitios WordPress institucionales vinculados al Gobierno de Córdoba,
          fortaleciendo mi mirada sobre accesibilidad, estructura de información
          y experiencia de usuario.
        </p>

        <p className="page-text">
          Mi formación en arte, junto con mi experiencia en tecnología y gestión,
          me permite combinar lógica + creatividad para diseñar productos digitales
          intuitivos, visualmente cuidados y orientados a resolver problemas reales.
        </p>

        <p className="page-text">
          Actualmente continúo capacitándome en UX/UI, automatización, Vue.js 3,
          n8n y herramientas de AI, buscando seguir creciendo profesionalmente
          dentro de equipos colaborativos, dinámicos y orientados al aprendizaje continuo.
        </p>

        <p className="page-text">
          <strong className="about-highlight">
            Objetivo profesional:
          </strong>{" "}
          Seguir desarrollando productos digitales centrados en el usuario,
          combinando diseño, tecnología y pensamiento creativo para construir
          experiencias funcionales y de calidad. Me motiva seguir aprendiendo,
          no solo en programación, sino también en herramientas de diseño,
          gestión y organización que me permitan crecer profesionalmente de
          forma integral.
        </p>

        <Link
          to="/experiencia"
          className="about-cta"
        >
          Ver mi experiencia laboral →
        </Link>

      </div>

      {/* RIGHT */}
      <div className="page-right-about">

        <img
          src={logoAbout}
          alt="About Logo"
          id="logo-bottom"
          className="img-about"
        />

      </div>

    </section>
  );
}

export default About;
