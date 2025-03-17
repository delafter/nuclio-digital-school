import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.jsx";
import School from "./views/School";
import Master from "./views/Master";
import Faculty from "./views/Faculty";
import Content from "./views/Content";
import CareerTalent from "./views/CareerTalent";


function App() {
  return (
   
    <div className="App">
      
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
    </div>
  );
}

export default App;
