import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login/Login.jsx";
import JoinNow from "./components/JoinNow/JoinNow.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import School from "./views/School.jsx";
import Master from "./views/Master.jsx";
import Faculty from "./views/Faculty.jsx";
import Content from "./views/Content.jsx";
import CareerTalent from "./views/CareerTalent.jsx";
import Button from "./components/Button/Button.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/home" element={<School />} />
        <Route path="/master" element={<Master />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/content" element={<Content />} />
        <Route path="/career-talent" element={<CareerTalent />} />
      </Routes>
      <Button />
    </Router>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
