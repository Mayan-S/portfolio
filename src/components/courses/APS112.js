import React from 'react';
import './APS112.css';

const APS112 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1wTr_icQcbTjRggyd1WNMQBU6s_gh_3-1yljnLa1aSHo/edit?tab=t.0");
    };

    return (
        <div className="aps112-container">
            <div className="title112">
                <a href="https://engineering.calendar.utoronto.ca/course/aps112h1" target="_blank" rel="noopener noreferrer">
                    <p>APS112: Engineering Strategies & Practice II</p>
                </a>
            </div>
            <p>
                An introduction to, and implementation of, a framework for the design process, which is used to teach in context, problem solving, professional communication, and team skills. Students are introduced to design, communication, and teamwork as integral and inter-related components of engineering practice. Building on the first course, this second course in the two Engineering Strategies and Practice course sequence introduces students to project management, oral professional communication, and to the design process in greater depth. Students work in teams on a term length design project. Students will write a series of team based and individual engineering reports and give a team based design project oral presentation.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default APS112;