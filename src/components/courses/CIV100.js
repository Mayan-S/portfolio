import React from 'react';
import './CIV100.css';

const CIV100 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1EQR5rXVsfMQyKCF62asKVuxmmCuW6JrfrbO8-6AknmI/edit?tab=t.0");
    };

    return (
        <div className="civ100-container">
            <div className="title100">
                <a href="https://engineering.calendar.utoronto.ca/course/civ100h1" target="_blank" rel="noopener noreferrer">
                    <p>CIV100: Mechanics</p>
                </a>
            </div>
            <p>
            The principles of statics are applied to composition and resolution of forces, moments and couples. The equilibrium states of structures are examined. Throughout, the free body diagram concept is emphasized. Vector algebra is used where it is most useful, and stress blocks are introduced. Shear force diagrams, bending moment diagrams and stress-strain relationships for materials are discussed. Stress and deformation in axially loaded members and flexural members (beams) are also covered.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default CIV100;