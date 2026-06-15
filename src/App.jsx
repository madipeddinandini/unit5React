import React, { useState } from 'react';
import CharacterInput from './components/characterInput.jsx';
import CharacterStats from './components/characterStats.jsx';
import './App.css';

function App() {
  
  const [text, setText] = useState('');

  return (
    <div className="app-container">
      <div className="card">
        <h1>Live Character Count</h1>
        
        <CharacterInput text={text} onTextChange={setText} />
        
        <CharacterStats text={text} />
      </div>
    </div>
  );
}

export default App;