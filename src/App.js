import React, { useState } from 'react';
import './App.css';
import ModalNav from './components/ModalNav';
import KeySigContext from './components/KeySigContext';
import ScaleWrapper from './components/ScaleWrapper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Route path="/">
              <h1>Modal Interchange</h1>
              <ModalNav />
              <ScaleWrapper />
            </Route>
            <Route path="/chord-generator">

            </Route>
          </Switch>
        </Router>
      </KeySigContext.Provider>
      <div className="pre-footer"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
