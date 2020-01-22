import React from 'react';
import NavSel from './NavSelector';

const Nav = () => {
  const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const elements = notes.forEach(note => <NavSel note={note} />);
  console.log(elements);
  return <div className="nav">{elements}</div>;
};

export default Nav;
