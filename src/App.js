import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  ); 
}

export default App;
