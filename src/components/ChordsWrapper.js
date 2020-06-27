import React, { useEffect, useContext } from 'react';
import ChordContext from "./ChordContext";
import "../piano.css";
import chordFunctions from "../helper/chords.js";


const ChordsWrapper = () => {
    const { currentChordNote, currentChordModifier } = useContext(ChordContext);

    let chordNotes;
    const getCurrentChord = (rootNote, modifier) => {
        if (modifier === "maj") {
            chordNotes = chordFunctions.getMajorChord(rootNote);
        } else if (modifier === "min") {
            chordNotes = chordFunctions.getMinorChord(rootNote);
        } else if (modifier === "sus2") {
            chordNotes = chordFunctions.getSusTwoChord(rootNote);
        } else if (modifier === "sus4") {
            chordNotes = chordFunctions.getSusFourChord(rootNote);
        } else if (modifier === "6") {
            chordNotes = chordFunctions.getSixChord(rootNote);
        } else if (modifier === "maj6") {
            chordNotes = chordFunctions.getMajorSixChord(rootNote);
        } else if (modifier === "min6") {
            chordNotes = chordFunctions.getMinorSixChord(rootNote);
        } else if (modifier === "7") {
            chordNotes = chordFunctions.getSevenChord(rootNote);
        } else if (modifier === "maj7") {
            chordNotes = chordFunctions.getMajorSevenChord(rootNote);
        } else if (modifier === "min7") {
            chordNotes = chordFunctions.getMinorSevenChord(rootNote);
        } else if (modifier === "dim") {
            chordNotes = chordFunctions.getDiminishedChord(rootNote);
        } else if (modifier === "aug") {
            chordNotes = chordFunctions.getAugmentedChord(rootNote);
        }
    }
    


    useEffect(() => {
        getCurrentChord(currentChordNote, currentChordModifier);

        const plotChordNotes = (note1, note2, note3, note4 = null) => {
            const a = document.querySelector(".main-container");
            for (let i = 0; i < a.children.length; i++) {
                if (a.children[i].classList.contains(note1) || a.children[i].classList.contains(note2) || a.children[i].classList.contains(note3) || a.children[i].classList.contains(note4)) {
                 a.children[i].classList.add("active-note");
                } else {
                 a.children[i].classList.remove("active-note");
                }
            }
        }
        plotChordNotes(...chordNotes);
    }, []);

    return (
        <div className="main-container">
            <div className="white-key-1 C B#">
            </div>
            <div className="black-key C# Db margin-left">
            </div>
            <div className="white-key D margin-left">
            </div>
            <div className="black-key D# Eb margin-left">
            </div>
            <div className="white-key E Fb margin-left">
            </div>
            <div className="white-key F E# active-note">
            </div>
            <div className="black-key F# Gb margin-left active-note">
            </div>
            <div className="white-key G margin-left">
            </div>
            <div className="black-key G# Ab margin-left">
            </div>
            <div className="white-key A margin-left">
            </div>
            <div className="black-key A# Bb margin-left">
            </div>
            <div className="white-key B Cb margin-left">
            </div>
            <div className="white-key-1 C B#">
            </div>
            <div className="black-key C# Db margin-left">
            </div>
            <div className="white-key D margin-left">
            </div>
            <div className="black-key D# Eb margin-left">
            </div>
            <div className="white-key E Fb margin-left">
            </div>
            <div className="white-key F E# active-note">
            </div>
            <div className="black-key F# Gb margin-left active-note">
            </div>
            <div className="white-key G margin-left">
            </div>
            <div className="black-key G# Ab margin-left">
            </div>
            <div className="white-key A margin-left">
            </div>
            <div className="black-key A# Bb margin-left">
            </div>
            <div className="white-key B Cb margin-left">
            </div>
        </div>
    )
};


export default ChordsWrapper;