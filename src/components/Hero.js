import React from "react";
import logo2 from "../assets/images/logo-simple.png";
import cv from "../assets/documents/cv-FaniCasco-Junio2026.pdf";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">
                <h1 className="hero-greeting">
                    ¡Hola! Soy <br />
                    <span className="hero-name">Fani Casco</span>
                </h1>
                <p className="hero-motivation">
                    Product Designer Jr y Desarrolladora Front-End con foco en UX/UI, React.Js, Vue.Js y quasar.
                    <br />
                    Diseño y desarrollo interfaces claras, funcionales y centradas en la experiencia de usuario.
                </p>
                <p className="hero-stack">
                    UX/UI •  Figma •  React • Vue.Js •  Quasar •  Responsive Design • Google Cloud
                </p>

                <div className="hero-buttons">
                    <a
                        href={cv}
                        download="cv-FaniCasco-mayo2026-.pdf"
                        className="hero-button"
                    >
                        CV FRONT-END Dev
                    </a>

                    <a
                        href={cv}
                        download="cv-FaniCasco-UxUiDesigner.pdf"
                        className="hero-button"
                    >
                        CV UX/UI Designer
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <img src={logo2} alt="Hero Img" />
            </div>
        </section>
    );
}

export default Hero;






