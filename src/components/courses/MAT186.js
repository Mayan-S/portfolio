import React from 'react';
import './MAT186.css';

const MAT186 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1PTkTya_QMGwZkPkKJXJ3Cl45r2qi-_M22QttGziWFqU/edit?tab=t.0");
    };

    return (
        <div className="mat186-container">
            <div className="title186">
                <a href="https://engineering.calendar.utoronto.ca/course/mat186h1" target="_blank" rel="noopener noreferrer">
                    <p>MAT186: Calculus</p>
                </a>
            </div>
            <p>
                Topics include: limits and continuity; differentiation; applications of the derivative - related rates problems, curve sketching, optimization problems, L'Hopital's rule; definite and indefinite integrals; the Fundamental Theorem of Calculus; applications of integration in geometry, mechanics and other engineering problems.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default MAT186;