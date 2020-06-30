import React, { useContext } from 'react';
import ChordContext from './ChordContext';

const selectedStyle = {
    backgroundColor: '#583b2d',
    color: 'white'
};

const ChordModifier = ({ modifier }) => {
    const { currentChordModifier } = useContext(ChordContext);

    return (
        <option value={modifier}>{modifier}</option>
    )
}

export default ChordModifier;