// App.js - Archivo principal
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/about";
import Estudios from "./pages/estudios";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;