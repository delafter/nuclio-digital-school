import React from 'react';
import './App.css';
import School from './views/School';
import Master from './views/Master';
import Faculty from './views/Faculty';
import Content from './views/Content';
import CareerTalent from './views/CareerTalent';


function App() {
  return (
    <div className="App">
      <School/>
      <Master/>
      <Faculty/>
      <Content/>
      <CareerTalent/>
    </div>
  );
}

export default App;
