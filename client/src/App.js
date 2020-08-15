import React from "react";
//import Plot from 'react-plotly.js';
import Nav from './components/nav';
import Body from './components/header';
import Info from './components/info';
import "./App.css";

function App() {
  return (
    <div>
      <Nav/>
      <Body/> 
      <Info/>
    </div>
  );
}

export default App;
