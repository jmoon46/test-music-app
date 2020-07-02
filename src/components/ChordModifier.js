import React, { useContext } from 'react';

const ChordModifier = ({ modifier }) => {
    return (
        <option value={modifier}>{modifier}</option>
    )
}

export default ChordModifier;