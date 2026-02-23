import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { ROUTES } from "./config/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {ROUTES.filter((r) => r.element).map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
