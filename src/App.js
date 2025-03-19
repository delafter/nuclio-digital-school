import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.jsx";
import FrontPage from "./views/FrontPage";
import School from "./views/School";
import Master from "./views/Master";
import Faculty from "./views/Faculty";
import Content from "./views/Content";
import CareerTalent from "./views/CareerTalent";
import BackPage from "./views/BackPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
   
    <div className="App">
      <div id="front-page">
        <FrontPage />
      </div>
      
      <div id="school">
        <School />
      </div>
      <div id="master">
        <Master />
      </div>
      <div id="faculty">
        <Faculty />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="career-talent">
        <CareerTalent />
      </div>
      <div id="back-page">
        <BackPage />
      </div>
    </div>
  );
}

export default App;
