import React from 'react';
import './APS111.css';

const APS111 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1U7kmSY1FLingec0VMd_MmJCAXVcqhKh-h_ra2jIzmDQ/edit?tab=t.0");
    };

    return (
        <div className="aps111-container">
            <div className="title111">
                <a href="https://engineering.calendar.utoronto.ca/course/aps111h1" target="_blank" rel="noopener noreferrer">
                    <p>APS111: Engineering Strategies & Practice I</p>
                </a>
            </div>
            <p>
                This course introduces and provides a framework for the design process. Students are introduced to communication as an integral component of engineering practice. The course is a vehicle for understanding problem solving and developing communications skills. This first course in the two Engineering Strategies and Practice course sequence introduces students to the process of engineering design, to strategies for successful team work, and to design for human factors, society and the environment. Students write team and individual technical reports.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default APS111;