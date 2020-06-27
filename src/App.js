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
  return (
    <div className="App">
      
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Modal Chart</Link>
              </li>
              <li>
                <Link to="/chord-generator">Chords</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <ChordContext.Provider>
              <KeySigContext.Provider
                value={{
                  currentNote,
                  setCurrentNote,
                  currentModifier,
                  setCurrentModifier
                }}>
                <Route exact path="/">
                  <h1>Modal Interchange</h1>
                  <ModalNav />
                  <ScaleWrapper />
                </Route>
              </KeySigContext.Provider>
              <Route exact path="/chord-generator">
                <h1>Chord Generator</h1>
                <ChordsNav />
                <ChordsWrapper />
              </Route>
            </ChordContext.Provider>
          </Switch>
        </Router>
      <div className="pre-footer"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
