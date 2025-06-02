import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CourseNotes from './components/CourseNotes';
import Contact from './components/Contact';
import HamburgerMenu from './components/HamburgerMenu';
import APS100 from './components/courses/APS100';
import APS111 from './components/courses/APS111';
import CIV100 from './components/courses/CIV100';
import APS164 from './components/courses/APS164';
import MAT188 from './components/courses/MAT188';
import MAT186 from './components/courses/MAT186';
import APS191 from './components/courses/APS191';
import APS112 from './components/courses/APS112';
import APS105 from './components/courses/APS105';
import MAT187 from './components/courses/MAT187';
import MIE100 from './components/courses/MIE100';
import ECE110 from './components/courses/ECE110';
import ReactGA from 'react-ga4';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-70N1HX57PF');
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Analytics />
      <div className="App">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/course-notes" element={<CourseNotes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aps100" element={<APS100 />} />
          <Route path="/aps111" element={<APS111 />} />
          <Route path="/civ100" element={<CIV100 />} />
          <Route path="/aps164" element={<APS164 />} />
          <Route path="/mat188" element={<MAT188 />} />
          <Route path="/mat186" element={<MAT186 />} />
          <Route path="/aps191" element={<APS191 />} />
          <Route path="/aps112" element={<APS112 />} />
          <Route path="/aps105" element={<APS105 />} />
          <Route path="/mat187" element={<MAT187 />} />
          <Route path="/mie100" element={<MIE100 />} />
          <Route path="/ece110" element={<ECE110 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;