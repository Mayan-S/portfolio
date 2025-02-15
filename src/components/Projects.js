import React from 'react';
import './Projects.css';

const Projects = () => (
  <div className="projects-container">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <div className="project-image-1">
        </div>
        <div className="project-content">
          <h3>Dog Life Simulator</h3>
          <p>Game that simulates the experience of adopting and caring for an aged dog.</p>
          <div className="project-links">
            <a href="https://github.com/Mayan-S/dog-life-simulator" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
          <div className="project-tags">
            <span className="tag">Java</span>
            <span className="tag">OOP</span>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image-2">
        </div>
        <div className="project-content">
          <h3>Resume Builder</h3>
          <p>Generate an engineering resume in under 10 minutes as a TeX or PDF file.</p>
          <div className="project-links">
            <a href="https://github.com/Mayan-S/resume-builder" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
          <div className="project-tags">
            <span className="tag">JavaScript</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image-3">
        </div>
        <div className="project-content">
          <h3>Personal Portfolio</h3>
          <p>Portfolio that showcases and organises my projects and coursework.</p>
          <div className="project-links">
            <a href="https://github.com/Mayan-S/portfolio" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          </div>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;