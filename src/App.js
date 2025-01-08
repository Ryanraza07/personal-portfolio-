import logo from './logo.svg';
import './App.css';
import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import react from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
function App(){
  return (
  <> <Navbar />
  <Home />
  <Experience/>
  <Skills />
  </>

  );
}

export default App;
