import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../img/cutelogo.png";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <img src={logo} alt="" />
        <div className="n-name">Nidhi</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
             
            <li>
           
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
            <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
            <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
       
         <button className="button n-button">  <Link to="contact" spy={true} smooth={true}>Contact</Link></button> 
       
      </div>
    </div>
  );
};

export default navbar;
