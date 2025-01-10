import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
    return(


        <>
        <div className="container contact" id="Contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icons"
            data-aos="zoom-in"
            data-aos-duration="1000">
                <a href="https://www.instagram.com/ryan_nestoroheist/" className="items">
                <FaInstagram className="icons"/>
                </a>
                <a href="#" className="items">
                    <FaFacebook className="icons"/>
                </a>
                <a href="https://www.linkedin.com/in/altaf-raza-b9460a309/" className="items">
                    <CiLinkedin className="icons"/>
                </a>
                <a href="https://github.com/Ryanraza07" className="items">
                    <FaGithub className="icons"/>
                </a>
                <a href="mailto::raazaltaf009@gmail.com" className="items">
                    <CiMail className="icons"/>
                </a>
                <a href="https://x.com/Altaf04844737" target="blank" className="items">
                    <FaSquareXTwitter className="icons" />
                </a>
            </div>


        </div>

       
        </>
    

);

};export default Contact;