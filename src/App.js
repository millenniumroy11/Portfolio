//import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skils from './components/Skils';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  //Routes,
  //Route,
  //Link
} from "react-router-dom";



function App() {
  return (
    /*<Router>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skils />
      <Certifications />
      <Contact />
    </Router>*/
    <Router>
  <Navbar />
  <div id="about"><About /></div>
  <div id="education"><Education /></div>
  <div id="experience"><Experience /></div>
  <div id="projects"><Projects /></div>
  <div id="skills"><Skils /></div>
  <div id="certifications"><Certifications /></div>
  <div id="contact"><Contact /></div>
</Router>
  );
}

export default App;
