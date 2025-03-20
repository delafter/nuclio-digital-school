import React, { useState } from "react";
import "./JoinNow.css";

const JoinNow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="joinNow-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create your acount</h1>
          <p>Firts Name</p>
          <input input className="input-join" type="text" required />
          <p>Last Name</p>
          <input input className="input-join" type="text" required />
          <p>E-mail Address</p>
          <input className="input-join"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <p>Password</p>
          <input input className="input-join"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        <p>Phone <span className="optional">Optional</span></p>

          <input
          input className="input-join" type="text" required />
          <button className="form-buttom" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinNow;
