import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseNotes.css';

const CourseNotes = () => {
  const [showSemester1, setShowSemester1] = useState(false);
  const [showSemester2, setShowSemester2] = useState(false);

  const toggleSemester1 = () => setShowSemester1(!showSemester1);
  const toggleSemester2 = () => setShowSemester2(!showSemester2);

  return (
    <div className="course-notes-container">
      <div className="title">
        <p>Course Notes</p>
      </div>
      <h3>First Year:</h3>
      <div className="semester" onClick={toggleSemester1}>
        Semester #1:
      </div>
      {showSemester1 && (
        <ul>
          <li><Link to="/aps100" className="course-link">APS100: Orientation to Engineering</Link></li>
          <li><Link to="/aps111" className="course-link">APS111: Engineering Strategies & Practice I</Link></li>
          <li><Link to="/civ100" className="course-link">CIV100: Mechanics</Link></li>
          <li><Link to="/aps164" className="course-link">APS164: Intro Chemistry from a Materials Perspective</Link></li>
          <li><Link to="/mat188" className="course-link">MAT188: Linear Algebra</Link></li>
          <li><Link to="/mat186" className="course-link">MAT186: Calculus</Link></li>
        </ul>
      )}
      <div className="semester" onClick={toggleSemester2}>
        Semester #2:
      </div>
      {showSemester2 && (
        <ul>
          <li><Link to="/aps191" className="course-link">APS191: Intro to Engineering</Link></li>
          <li><Link to="/aps112" className="course-link">APS112: Engineering Strategies & Practice II</Link></li>
          <li><Link to="/aps105" className="course-link">APS105: Computer Fundamentals</Link></li>
          <li><Link to="/mat187" className="course-link">MAT187: Calculus II</Link></li>
          <li><Link to="/mie100" className="course-link">MIE100: Dynamics</Link></li>
          <li><Link to="/ece110" className="course-link">ECE110: Electrical Fundamentals</Link></li>
        </ul>
      )}
    </div>
  );
};

export default CourseNotes;