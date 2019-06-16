import React from 'react';
import image from './BackArrow.png';
import './App.css';
import { RunList } from './RunList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={image} className="App-BackArrow" alt="BackArrow" />
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
