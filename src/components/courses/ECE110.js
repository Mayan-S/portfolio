import React from 'react';
import './ECE110.css';

const ECE110 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1wTr_icQcbTjRggyd1WNMQBU6s_gh_3-1yljnLa1aSHo/edit?tab=t.0");
    };

    return (
        <div className="ece110-container">
            <div className="title110">
                <a href="https://engineering.calendar.utoronto.ca/course/ece110h1" target="_blank" rel="noopener noreferrer">
                    <p>ECE110: Electrical Fundamentals</p>
                </a>
            </div>
            <p>
                An overview of the physics of electricity and magnetism: Coulomb's law, Gauss' law, Ampere's law, Faraday's law. Physics of capacitors, resistors and inductors. An introduction to circuit analysis: resistive circuits, nodal and mesh analysis, 1st order RC and RL transient response and sinusoidal steady-state analysis.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default ECE110;