import React from "react";
import "./style.css";
import aboutImg from "../../img/aboutImg.png";
// import aboutImg2 from "../../img/aboutImg2.png";
// import aboutImg3 from "../../img/aboutImg3.png";


export default function AboutPage() {
    
    return (
      <div id="about-screen">
        <div className="about-image">
          <img src={aboutImg} />
        </div>
        <div className="about-des">
          <p>ABOUT ME</p>
          <p>
            Passionate Front-End React Developer based in Bangkok, Thailand 🇹🇭
          </p>
          <p>
            Greetings! I'm a dynamic junior front-end React developer,
            proficient in React, JavaScript, CSS, and HTML. With a true passion
            for clean and efficient code, I thrive on turning ideas into
            engaging user experiences. Eager to stay updated with the latest
            industry trends, I am committed to continuously honing my skills to
            deliver top-notch web applications. I take pride in my
            problem-solving abilities and collaborative mindset, making me an
            asset to any development team. Let's connect and explore how I can
            bring value to your projects. Together, we can craft exceptional
            digital experiences!
          </p>
        </div>
      </div>
    );
}