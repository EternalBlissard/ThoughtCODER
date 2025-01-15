import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homepage">
        <h1 className="slogan">HAVE A THOUGHT CODE IT OUT</h1>
        <h1 className="slogan">DON'T LET PERFECTION KILL YOUR BILLION DOLLAR CODE THOUGHT</h1>
        <button className="start-button" onClick={() => window.location.href = '/loading'}>
          START ThoughtCODER
        </button>
      </div>
    </div>
  );
}

export default App;
