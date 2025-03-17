import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (window.location.pathname === "/login" || window.location.pathname === "/join-now") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleHome = () => {
   window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleHome}>
        <img
          style={{ width: "60px", height: "50px" }}
          src=""
          alt="logo"
          className="logo"
        />
      </div>
      
      {/* Si estás en la home, `Link` funciona normalmente. Si estás en login, redirige primero y luego hace scroll */}
      {window.location.pathname === "/login" || window.location.pathname === "/join-now" ? (
        <>
          <button className="navbar-logo" onClick={() => handleNavigation("school")}>School</button>
          <button className="navbar-logo" onClick={() => handleNavigation("master")}>Master</button>
          <button className="navbar-logo" onClick={() => handleNavigation("faculty")}>Faculty</button>
          <button className="navbar-logo" onClick={() => handleNavigation("content")}>Content</button>
          <button className="navbar-logo" onClick={() => handleNavigation("career-talent")}>Career Talent</button>
        </>
      ) : (
        <>
          <Link className="navbar-logo" to="school" smooth={true} duration={500}>School</Link>
          <Link className="navbar-logo" to="master" smooth={true} duration={500}>Master</Link>
          <Link className="navbar-logo" to="faculty" smooth={true} duration={500}>Faculty</Link>
          <Link className="navbar-logo" to="content" smooth={true} duration={500}>Content</Link>
          <Link className="navbar-logo" to="career-talent" smooth={true} duration={500}>Career Talent</Link>
        </>
      )}

      <div className="navbar-auth">
        <button className="navbar-button" onClick={() => navigate("/login")}>Login</button>
        <button className="navbar-button" onClick={() => navigate("/join-now")}>Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
