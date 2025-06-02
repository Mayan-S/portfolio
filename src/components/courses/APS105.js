import React from 'react';
import './APS105.css';

const APS105 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1wTr_icQcbTjRggyd1WNMQBU6s_gh_3-1yljnLa1aSHo/edit?tab=t.0");
    };

    return (
        <div className="aps105-container">
            <div className="title105">
                <a href="https://engineering.calendar.utoronto.ca/course/aps105h1" target="_blank" rel="noopener noreferrer">
                    <p>APS105: Computer Fundamentals</p>
                </a>
            </div>
            <p>
                An introduction to computer systems and problem solving using computers. Topics include: the representation of information, programming techniques, programming style, basic loop structures, functions, arrays, strings, pointer-based data structures and searching and sorting algorithms. The laboratories reinforce the lecture topics and develops essential programming skills.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default APS105;