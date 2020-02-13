import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import KeySigContext from './components/KeySigContext';

function App() {
  const [currentNote, setCurrentNote] = useState('C');
  const [currentModifier, setCurrentModifier] = useState('♮');
  return (
    <div className="App">
      <KeySigContext.Provider
        value={{
          currentNote,
          setCurrentNote,
          currentModifier,
          setCurrentModifier
        }}
      >
        <h1>Music App</h1>
        <Nav />
      </KeySigContext.Provider>
    </div>
  );
}

export default App;
