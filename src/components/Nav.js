import React, { useState, useContext } from 'react';
import KeySelector from './KeySelector';
import KeyModifier from './KeyModifier';
import KeySigContext from './KeySigContext';

const Nav = () => {
  const {
    currentNote,
    setCurrentNote,
    currentModifier,
    setCurrentModifier
  } = useContext(KeySigContext);

  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const symbols = ['♮', '♭', '♯'];
  const keyNote = notes.map((note, index) => (
    <KeySelector note={note} key={index} />
  ));
  const keyModifier = symbols.map((symbol, index) => (
    <KeyModifier symbol={symbol} key={index} />
  ));

  const handleNoteClick = e => {
    setCurrentNote(e.target.value);
  };

  const handleModifierClick = e => {
    setCurrentModifier(e.target.value);
  };

  return (
    <div className="nav">
      <div onClick={handleNoteClick}>{keyNote}</div>
      <div onClick={handleModifierClick}>{keyModifier}</div>
    </div>
  );
};

export default Nav;
