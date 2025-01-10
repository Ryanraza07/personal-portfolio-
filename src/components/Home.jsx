import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";
import { GiThirdEye } from "react-icons/gi";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Portfolio",
        "My Name is Altaf Raza",
        "I am a Full Stack Developer",
        "Android Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="Home">
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a href="/assets/resume.pdf" className="btn btn-outline-warning">
          Download Resume
        </a>
      </div>
      <div className="right" data-aos="fade-up-left"
    data-aos-duration="1000">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
       
      </div>
      
    </div>
    
  );
}

export default Home;
