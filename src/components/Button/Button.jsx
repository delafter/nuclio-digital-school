import React, { useState, useEffect } from "react";
import "./Button.css";

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY + 20) {
        setShowButton(true); // Mostrar botón cuando se baja
      } else if (window.scrollY < lastScrollY - 20) {
        setShowButton(false); // Ocultar botón cuando se sube
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll manualmente
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`button-container ${showButton ? "show" : "hide"}`}>
      <button className="button-button" onClick={() => scrollToSection("school")}>School</button>
      <button className="button-button" onClick={() => scrollToSection("master")}>Master</button>
      <button className="button-button" onClick={() => scrollToSection("faculty")}>Faculty</button>
      <button className="button-button" onClick={() => scrollToSection("content")}>Content</button>
      <button className="button-button" onClick={() => scrollToSection("career-talent")}>Career Talent</button>
    </div>
  );
};

export default Button;
