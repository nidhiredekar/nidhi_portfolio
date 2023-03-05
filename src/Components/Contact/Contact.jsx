import React  from "react";
import "./Contact.css";


const Contact = () => {
 
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <div className="awesome">
       <p>Email: nidhiredekar13@gmail.com</p>
       <span>Phone: 7000331023</span>
       </div>
      </div>
      </div>

  );
};

export default Contact;
