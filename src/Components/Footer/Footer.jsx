import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Mail from "@iconscout/react-unicons/icons/uil-mailbox";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Doc from "@iconscout/react-unicons/icons/uil-file"
import Resume from './nidhi_resume.pdf';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>nidhiredekar13@gmail.com</span> */}
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/nidhiredekar/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/nidhiredekar/"> <Gitub color="white" size={"3rem"} /></a>
          <a href="nidhiredekar13@gmail.com"> <Mail color="white" size={"3rem"} /></a>
          
          <a href={Resume} download>
        
          <Doc color="white" size={"3rem"} />
     
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
