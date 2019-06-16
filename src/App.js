import React from 'react';
import image from './BackArrow.png';
import './App.css';
import { RunList } from './RunList';
import logo from './logo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={image} className="App-BackArrow" alt="BackArrow" />
      <img src={logo} className="App-Logo" alt="logo" />

        <p>
          
        </p>
        <a>
          
        </a>
          <RunList />
      </header>
    </div>
  );
}

export default App;
