import React, { useState } from 'react';
import './App.css';
import ModalNav from './components/ModalNav';
import ChordsNav from './components/ChordsNav';
import KeySigContext from './components/KeySigContext';
import ChordContext from './components/ChordContext';
import ScaleWrapper from './components/ScaleWrapper';
import ChordsWrapper from './components/ChordsWrapper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [currentNote, setCurrentNote] = useState('C');
  const [currentModifier, setCurrentModifier] = useState('♮');

  const [currentChordNote, setCurrentChordNote] = useState('C');
  const [currentChordModifier, setCurrentChordModifier] = useState('maj');
  const [currentSymbol, setCurrentSymbol] = useState('♮')

  return (
    <div className="App">
      
        <Router basename={process.env.PUBLIC_URL}>
          <nav className="main-nav">
            <Link to="/">Modal Chart</Link>
            <Link to="/chord-generator">Chord Generator</Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <KeySigContext.Provider
                value={{
                  currentNote,
                  setCurrentNote,
                  currentModifier,
                  setCurrentModifier
                }}>
                <h1>Modal Interchange</h1>
                <ModalNav />
                <ScaleWrapper />
              </KeySigContext.Provider>
            </Route>
            <Route exact path="/chord-generator">
              <ChordContext.Provider
                value = {{
                  currentChordNote,
                  setCurrentChordNote,
                  currentChordModifier,
                  setCurrentChordModifier,
                  currentSymbol,
                  setCurrentSymbol
                }}>
                <h1>Chord Generator</h1>
                <ChordsNav />
                <ChordsWrapper />
              </ChordContext.Provider>
            </Route>
          </Switch>
        </Router>
      <div className="pre-footer"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
