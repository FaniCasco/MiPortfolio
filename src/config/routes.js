import About from "../pages/about";
import Contact from "../pages/contact";
import Estudios from "../pages/estudios";
import Experiencia from "../pages/experiencia";
import Projects from "../pages/projects";

export const ROUTES = [
  { path: "/", name: "Inicio" },
  { path: "/about", name: "Sobre mí", element: About },
  { path: "/experiencia", name: "Experiencia", element: Experiencia },
  { path: "/estudios", name: "Formación", element: Estudios },
  { path: "/projects", name: "Proyectos", element: Projects },
  { path: "/contact", name: "Contacto", element: Contact },
];
