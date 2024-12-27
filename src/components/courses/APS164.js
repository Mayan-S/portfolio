import React from 'react';
import './APS164.css';

const APS164 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/17D_08piVxVbFhirRJfrATzUWaFkw90g4fCo5ryjh2rM/edit?tab=t.0");
    };

    return (
        <div className="aps164-container">
            <div className="title164">
                <a href="https://engineering.calendar.utoronto.ca/course/aps110h1" target="_blank" rel="noopener noreferrer">
                    <p>APS164: Intro Chemistry from a Materials Perspective</p>
                </a>
            </div>
            <p>
                This course is structured around the principle of the structure-property relationship. This relationship refers to an understanding of the microstructure of a solid, that is, the nature of the bonds between atoms and the spatial arrangement of atoms, which permits the explanation of observed behaviour. Observed materials behaviour includes mechanical, electrical, magnetic, optical, and corrosive behaviour. Topics covered in this course include: structure of the atom, models of the atom, electronic configuration, the electromagnetic spectrum, band theory, atomic bonding, optical transparency of solids, magnetic properties, molecular bonding, hybridized orbitals, crystal systems, lattices and structures, crystallographic notation, imperfections in solids, reaction rates, activation energy, solid-state diffusion, materials thermodynamics, free energy, and phase equilibrium.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default APS164;