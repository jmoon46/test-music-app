import React from 'react';
import KeySel from './KeySelector';
import KeySym from './KeyModifier';

const Nav = () => {
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const symbols = ['♮', '♭', '♯'];
  const keyNote = notes.map((note, index) => (
    <KeySel note={note} key={index} />
  ));
  const keySymbol = symbols.map((symbol, index) => (
    <KeySym symbol={symbol} key={index} />
  ));
  return (
    <div className="nav">
      <div>{keyNote}</div>
      <div>{keySymbol}</div>
    </div>
  );
};

export default Nav;
