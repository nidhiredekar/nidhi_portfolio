import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";



const Skills = () => {


  return (
    
    <div className="ag-format-container" id="skills">
      <div className="skills">
      <span >S<span>kills</span></span>
      
      </div>
      
       <div id="bluro" style={{ background: "rgb(238 210 255)" }}></div>
   
       {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg "></div>

        <div class="ag-courses-item_title">
         Frameworks 
        </div>

        <div class="ag-courses-item_date-box">
          Nodejs, Expressjs , Spring-boot
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
        </div>
    </div>

    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Programming Languages 
        </div>
        <div class="ag-courses-item_date-box">
         Java,Javascript,C++,C
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Frontend 
        </div>

        <div class="ag-courses-item_date-box">
          Reactjs ,HTML ,CSS ,Bootstrap
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Tools
        </div>

        <div class="ag-courses-item_date-box">
        GIT/Github,Postman,Jenkins,SAP Cloud Platform
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Database
        </div>
    
        <div class="ag-courses-item_date-box">
          SQL , NOSQL , MongoDB 
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
      </div>
    </div>
    
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Programming Skills
        </div>

        <div class="ag-courses-item_date-box">
         DSA ,OOPS , Restfull APIs ,
          {/* <span class="ag-courses-item_date">
            04.11.2022
          </span> */}
        </div>
      </div>
    </div>

  </div>
  <div
          className="blur"
          style={{
            background: "#C1F5FF",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
            top: "270%",
            left: "56%",
          }}
        ></div>
</div>
  );
};

export default Skills;
