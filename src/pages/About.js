import React from "react";
import UnGodlyHour from "../img/UGH.gif";
import "../styles/About.css";

function About() {
  
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${UnGodlyHour})` }}
       
        ></div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>This the true defintion of coming into another out-of-body dimension. Our drinks here at UnGodly Hour will take you for a journey. It will enhance your tatse buds and put you in a trance. The main objective here is take you away from all the stress in your day-to-day life. Come over here to UnGodly Hour and let us take over your heavenly spirit.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
