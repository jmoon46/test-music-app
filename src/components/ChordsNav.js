import React, { useContext } from 'react';
import ChordRootSelector from './ChordRootSelector';
import ChordModifier from './ChordModifier';
import ChordContext from './ChordContext';

const ChordsNav = () => {
    const rootNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const modifiers = ['maj', 'min', 'sus2', 'sus4', '6', 'maj6', 'min6', '7', 'maj7', 'min7', 'dim', 'aug'];
    return (
        <div>Here goes the chord nav</div>
    )
};

export default ChordsNav;