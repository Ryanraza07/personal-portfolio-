// Navbar.jsx
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" // removed bg-light
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{ margin: 0, padding: 0 }}> {/* Added style */}
            <div className="container-fluid navcolor">
                <a className="navbar-brand ms-5"  href="#" style={{fontSize:'2rem'}}> Portfolio</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item mx-3">
                            <a className="nav-link active hover-effect" href="#Home">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
