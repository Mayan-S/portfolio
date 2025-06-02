import React from 'react';
import './MAT187.css';

const MAT187 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1wTr_icQcbTjRggyd1WNMQBU6s_gh_3-1yljnLa1aSHo/edit?tab=t.0");
    };

    return (
        <div className="mat187-container">
            <div className="title187">
                <a href="https://engineering.calendar.utoronto.ca/course/mat187h1" target="_blank" rel="noopener noreferrer">
                    <p>MAT187: Calculus II</p>
                </a>
            </div>
            <p>
                Topics include: techniques of integration, an introduction to mathematical modeling with differential equations, infinite sequences and series, Taylor series, parametric and polar curves, and application to mechanics and other engineering problems.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default MAT187;