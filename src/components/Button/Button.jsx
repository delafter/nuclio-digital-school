import React, { useState, useEffect } from "react";
import "./Button.css";
import Logo from "../../assets/images/product-images/logoNuclio.jpg";

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY + 20) {
        setShowButton(true); 
      } else if (window.scrollY < lastScrollY - 20) {
        setShowButton(false); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const scrollToSection = (id, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  
 

  return (
    <div className={`button-container ${showButton ? "show" : "hide"}`}>
      <button className="button-button" onClick={() => scrollToSection("school")}>School</button>
      <button className="button-button" onClick={() => scrollToSection("master")}>Master</button>
      <button className="button-button" onClick={() => scrollToSection("faculty")}>Faculty</button>
      <button className="button-button" onClick={() => scrollToSection("content")}>Content</button>
      <button className="button-button" onClick={() => scrollToSection("career-talent")}>Career & Talent</button>
      <button className="button-button" onClick={() => scrollToSection("front-page", -110)}> 
        <img 
        src={Logo} alt="Logo" className="logo-image" />
        </button>
    </div>
  );
};

export default Button;
