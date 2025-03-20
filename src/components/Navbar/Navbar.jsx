import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../../assets/images/product-images/logoNuclio.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (path) => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/join-now"
    ) {
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
    <nav
      style={{
        backgroundColor: showNavbar
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.5)",
        transition: "background-color 0.5s",
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        top: "0",
        left: "0",
      }}
      className={`navbar ${showNavbar ? "show" : "hide"}`}
    >
      <div className="navbar-logo" onClick={handleHome}>
        <img
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "3px solid white",
          }}
          src={Logo}
          alt="logo"
          className="logo"
        />
        <span
          style={{
            marginLeft: "10px",
            fontWeight: "bold",
          }}
        >
          Nuclio Digital School
        </span>
      </div>

      {window.location.pathname === "/login" ||
      window.location.pathname === "/join-now" ? (
        <>
          <button
            className="navbar-logo-letras"
            onClick={() => handleNavigation("school")}
          >
            School
          </button>
          <button
            className="navbar-logo-letras"
            onClick={() => handleNavigation("master")}
          >
            Master
          </button>
          <button
            className="navbar-logo-letras"
            onClick={() => handleNavigation("faculty")}
          >
            Faculty
          </button>
          <button
            className="navbar-logo-letras"
            onClick={() => handleNavigation("content")}
          >
            Content
          </button>
          <button
            className="navbar-logo-letras"
            onClick={() => handleNavigation("career-talent")}
          >
            Career & Talent
          </button>
        </>
      ) : (
        <>
          <Link
            className="navbar-logo-letras"
            to="school"
            smooth={true}
            duration={500}
          >
            School
          </Link>
          <Link
            className="navbar-logo-letras"
            to="master"
            smooth={true}
            duration={500}
          >
            Master
          </Link>
          <Link
            className="navbar-logo-letras"
            to="faculty"
            smooth={true}
            duration={500}
          >
            Faculty
          </Link>
          <Link
            className="navbar-logo-letras"
            to="content"
            smooth={true}
            duration={500}
          >
            Content
          </Link>
          <Link
            className="navbar-logo-letras"
            to="career-talent"
            smooth={true}
            duration={500}
          >
            Career & Talent
          </Link>
        </>
      )}

      <div className="navbar-auth">
        <button className="navbar-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="navbar-button" onClick={() => navigate("/join-now")}>
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
