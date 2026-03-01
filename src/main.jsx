import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Como from "./components/Como";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Como />
    <Servicos />
    <Sobre />
    <Footer />
  </StrictMode>,
);
