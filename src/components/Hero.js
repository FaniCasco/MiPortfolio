import React from "react";
import logo2 from "../assets/images/logo-simple.png";
import cv from "../assets/documents/cv-FaniCasco-Oct25.pdf";

function Hero() {
    return (
        <section className="hero">
        
            <div className="hero-left">
                <h1 className="hero-greeting">
                    ¡Hola! Soy <br />
                    <span className="hero-name">Fany</span>
                </h1>
                <p className="hero-motivation">Desarrolladora Front-End con foco en React y JavaScript.
                    Formo parte del equipo de Estudio Rocha & Asociados (Programa +26). <br />
                    Creo interfaces claras, funcionales y con intención — combinando lógica y creatividad.</p>
                <a href={cv} download="FaniCasco-CV.pdf" className="hero-button">
                    Descargar CV
                </a>
            </div>
     
            <div className="hero-right">
                <img src={logo2} alt="Hero Img" />
            </div>
        </section>
    );
}

export default Hero;






