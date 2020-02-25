import React, { useContext } from 'react';
import KeySelector from './KeySelector';
import KeyModifier from './KeyModifier';
import KeySigContext from './KeySigContext';

const Nav = () => {
  const { setCurrentNote, setCurrentModifier } = useContext(KeySigContext);

  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const symbols = ['♮', '♭', '♯'];
  const keyNote = notes.map((note, index) => (
    <KeySelector note={note} key={index} />
  ));
  const keyModifier = symbols.map((symbol, index) => (
    <KeyModifier symbol={symbol} key={index} />
  ));

  const handleNoteClick = e => {
    if (e.target.value === undefined) {
      return
    }
    setCurrentNote(e.target.value);
  };

  const handleModifierClick = e => {
    if (e.target.value === undefined) {
      return
    }
    setCurrentModifier(e.target.value);
  };

  return (
    <div className="nav">
      <div className="key-buttons-wrapper" onClick={handleNoteClick}>{keyNote}</div>
      <div className="key-buttons-wrapper modifier-buttons-wrapper" onClick={handleModifierClick}>{keyModifier}</div>
    </div>
  );
};

export default Nav;
