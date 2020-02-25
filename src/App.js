import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import KeySigContext from './components/KeySigContext';
import ScaleWrapper from './components/ScaleWrapper';

function App() {
  const [currentNote, setCurrentNote] = useState('C');
  const [currentModifier, setCurrentModifier] = useState('');
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
        <h1>Modal Interchange</h1>
        <Nav />
        <ScaleWrapper />
      </KeySigContext.Provider>
      <div className="footer"></div>
    </div>
  );
}

export default App;
