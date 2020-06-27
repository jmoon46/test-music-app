import React, { useState, useEffect } from 'react';
import "../piano.css";


const ChordsWrapper = () => {

    useEffect(() => {
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
        plotChordNotes("C", "E", "G");
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