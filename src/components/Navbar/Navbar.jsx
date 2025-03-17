import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleJoinNow = () => {
    navigate("/join-now");
  };

  const handeHome = () => {
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handeHome}>
        <img
        style={{ width: "60px", height: "50px" }}
         src="data:image/png;base64,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" alt="logo" className="logo" />
      </div>
      <Link className="navbar-logo" to="school" smooth={true} duration={500}>
        School
      </Link>
      <Link className="navbar-logo" to="master" smooth={true} duration={500}>
        Master
      </Link>
      <Link className="navbar-logo" to="faculty" smooth={true} duration={500}>
        Faculty
      </Link>
      <Link className="navbar-logo" to="content" smooth={true} duration={500}>
        Content
      </Link>
      <Link className="navbar-logo" to="career-talent" smooth={true} duration={500}>
        Career Talent
      </Link>

      <div className="navbar-auth">
        <button className="navbar-button" onClick={handleLogin}>
          Login
        </button>
        <button className="navbar-button" onClick={handleJoinNow}>
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
