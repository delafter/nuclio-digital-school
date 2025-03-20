import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create your acount</h1>
          <p>Firts Name</p>
          <input type="text" required />
          <p>Last Name</p>
          <input type="text" required />
          <p>E-mail Address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <p>Phone Optional </p>

          <input type="text" required />
          <button className="form-buttom" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
