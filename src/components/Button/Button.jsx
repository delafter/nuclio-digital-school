import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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

  return (
    <div className={`button-container ${showButton ? "show" : "hide"}`}>
      <Link className="button-button" to="school" smooth={true} duration={500}>School</Link>
      <Link to="master" smooth={true} duration={500}>Master</Link>
      <Link to="faculty" smooth={true} duration={500}>Faculty</Link>
      <Link to="content" smooth={true} duration={500}>Content</Link>
      <Link to="career-talent" smooth={true} duration={500}>Career Talent</Link>
    </div>
  );
};

export default Button;
