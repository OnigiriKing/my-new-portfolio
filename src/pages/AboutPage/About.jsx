import React from "react";
import "./style.css";
import aboutImg from "../../img/aboutImg.png";
import aboutImg2 from "../../img/aboutImg2.png";
import aboutImg3 from "../../img/aboutImg3.png";


export default function AboutPage() {
    
    return (
      <div id="about-screen">
        <div className="about-image">
          <img src={aboutImg3} />
        </div>
        <div className="about-des">
          <p>ABOUT ME</p>
          <p>Dedicated Front-end React Developer based in Bangkok, Thailand.</p>
          <p>
            text
          </p>
        </div>
      </div>
    );
}