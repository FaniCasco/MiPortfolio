import React from "react";
import logo2 from "../assets/images/logo-hero-1.png";
import cv from "../assets/documents/cv-fanicasco-abril2025.pdf";

function Hero() {
    return (
        <section className="hero">
            {/* Sección Izquierda: Saludo */}
            <div className="hero-left">
                <h1 className="hero-greeting">
                    ¡Hola! Soy <br />
                    <span className="hero-name">Fany</span>
                </h1>
                <p className="hero-motivation">Soy una profesional apasionada por la tecnología,
                    con formación especializada en desarrollo Front-End. <br /> Mi principal enfoque es crear soluciones digitales que permitan a los clientes optimizar y mejorar su flujo de trabajo.</p>
                <a href={cv} download="FaniCasco-CV.pdf" className="hero-button">
                    Descargar CV
                </a>
            </div>

            {/* Sección Derecha: Imagen */}
            <div className="hero-right">
                <img src={logo2} alt="Hero Img" />
            </div>
        </section>
    );
}

export default Hero;






