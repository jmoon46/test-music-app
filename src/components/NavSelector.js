import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NavSelector = ({ note }) => {
  return (
    <div>
      <button>{note}</button>
    </div>
  );
};

NavSelector.propTypes = {
  note: PropTypes.string
};
export default NavSelector;
