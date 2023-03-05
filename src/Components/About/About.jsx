import React, { useContext } from "react";
import "./About.css";

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import pic from "../../img/animation/pic1.jpeg";

const About = () => {
  // context

  
  return (
    <div className="services" id="about">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>About </span>
        <span>I am Nidhi</span>
        <spane>
        I enjoy creating things that are live on the internet. My interest in web development started back   <br />
        in 2020 when I decided to try my hands on Ruby on Rails.Fast-forward to today, and I’ve had the   <br />privilege of working at a huge corporation SAP Labs.
        <br />  <br />
        Educational Background :  <br />
        I have done a Master's in Computer Application from the National Institute of Technology, Calicut. 
        <br />   <br />
        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity  <br /> that matches my skills and experience then don't hesitate to contact me.
        </spane>

      </div>
      {/* right */}
      <div id="blur"></div>
      <div className="containerAbout">
     
      <div className="box">
    
        <h1 > <img src={pic} alt="" /></h1>
      </div>
    </div>
    
    </div>
  );
};

export default About;
