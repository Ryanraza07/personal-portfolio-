import logo from './logo.svg';
import './App.css';
import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import react from 'react';
import React, { useEffect, useRef } from "react";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Note from './components/Note';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App(){
  useEffect(() => {
    Aos.init();
  }, []);
  return (
  <> <Navbar />
  <Home />
  <Note />
  <Experience/>
  <Skills />
  <Projects />
  <Contact />
  </>

  );
}

export default App;
