import React from 'react';
import './MIE100.css';

const MIE100 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1wTr_icQcbTjRggyd1WNMQBU6s_gh_3-1yljnLa1aSHo/edit?tab=t.0");
    };

    return (
        <div className="mie100-container">
            <div className="title100">
                <a href="https://engineering.calendar.utoronto.ca/course/mie100h1" target="_blank" rel="noopener noreferrer">
                    <p>MIE100: Dynamics</p>
                </a>
            </div>
            <p>
                This course on Newtonian mechanics considers the interactions which influence 2-D, curvilinear motion. These interactions are described in terms of the concepts of force, work, momentum and energy. Initially the focus is on the kinematics and kinetics of particles. Then, the kinematics and kinetics of systems of particles and solid bodies are examined. Finally, simple harmonic motion is discussed. The occurrence of dynamic motion in natural systems, such as planetary motion, is emphasized. Applications to engineered systems are also introduced.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default MIE100;