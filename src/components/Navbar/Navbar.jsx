import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleJoinNow = () => {
    navigate("/join-now");
  };

  const handleHome = () => {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-options">
        <button className="navbar-button" onClick={handleHome}>Home</button>
        <button className="navbar-button">About</button>
        <button className="navbar-button">Services</button>
        <button className="navbar-button">Contact</button>
      </div>
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
