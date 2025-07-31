import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import linkedinIcon from './images/linkedin.png';
import githubIcon from './images/github.png';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = text;
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 6000);
      } else if (isDeleting && displayedText === '') {
        setTimeout(() => setIsDeleting(false), 3000);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, loopNum]);

  return <span className="typewriter">{displayedText}</span>;
};

const Home = () => {
  return (
    <div className="container">
      <h1 className="name">Mayan Saravanabavan</h1>
      <p className="subtitle">Electrical Engineering Student <Typewriter text="at the University of Toronto" /></p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/mayan-saravanabavan/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
        </a>
        <a href="https://github.com/Mayan-S" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="github" />
        </a>
      </div>
      <div className="links">
        <Link to="/about" className="link-button"><span>About Me</span></Link>
        <Link to="/projects" className="link-button"><span>Projects</span></Link>
        <Link to="/course-notes" className="link-button"><span>Course Notes</span></Link>
        <Link to="/contact" className="link-button"><span>Contact Me</span></Link>
      </div>
    </div>
  );
};

export default Home;