import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3
          className="App-link"
        >
          Richard Tinajero
        </h3>
        <a 
          href="https://github.com/rj-tinajero/profile/blob/master/RichardTinajero_Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
        <a href="https://github.com/rj-tinajero" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/richard-tinajero" target="_blank"><i class="fab fa-linkedin-in"></i></a>

      </header>
    </div>
  );
}

export default App;
