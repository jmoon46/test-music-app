import React, { useContext } from 'react';
import ChordContext from './ChordContext';

const selectedStyle = {
    backgroundColor: '#583b2d',
    color: 'white'
};

const ChordRootSelector = ({ note }) => {
    const { currentChordNote } = useContext(ChordContext);
    return (
        <div className="key-selector">
            <button className="key-button" style={currentChordNote === note ? selectedStyle : null} value={note}>
                {note}
            </button>
        </div>
    )
};

export default ChordRootSelector;