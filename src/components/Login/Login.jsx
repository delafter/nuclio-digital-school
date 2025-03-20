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
          <h1>Login</h1>
       {/*    <p>Email:</p> */}
          <input className="input-email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
        {/*   <p>Password:</p> */}
          <input className="input-password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <div >
            <a className="forgot-password" href="/">Forgot password or email?</a>
          </div>
        </div>
        <button className="form-buttom-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
