import React, { useContext } from 'react';
import ChordContext from './ChordContext';

const selectedStyle = {
    backgroundColor: '#583b2d',
    color: 'white'
};

const ChordModifier = ({ modifier }) => {
    const { currentChordModifier } = useContext(ChordContext);
    return (
        <div className="key-modifier">
            <button className="key-button" style={currentChordModifier === modifier ? selectedStyle : null} value={modifier}>
                {modifier}
            </button>
        </div>
    )
}

export default ChordModifier;