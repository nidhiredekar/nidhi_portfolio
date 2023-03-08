import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import { Link } from "react-scroll";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/in.png";

const Intro = () => {

  return (
    <div className="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hy! I Am</span>
          <span>Nidhi Redekar</span>
          <span>
            I build things for the web.
          </span>
        </div>
       
          <button className="button i-button">  <Link to="contact" spy={true} smooth={true}>Hire me</Link></button>
      
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/nidhiredekar/">  <img  src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/nidhiredekar/"><img src={LinkedIn} alt="" /></a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right animate.pop ">
        <img src={Vector1} alt="" />
        <img  src={Vector2} alt="" />
        <img class="animate pop delay-2"  id="girl" src={girl} alt=""  />
        {/* animation */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
