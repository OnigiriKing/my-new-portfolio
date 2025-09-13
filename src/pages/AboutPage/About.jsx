import "./style.css";
import aboutImg from "../../img/aboutImg.png";

export default function AboutPage() {
  return (
    <div id="about-screen">
      <div className="about-image">
        <img src={aboutImg} alt="aboutImage" />
      </div>
      <div className="about-des">
        <p>ABOUT ME</p>
        <p>Passionate Front-End React Developer based in Tokyo, Japan 🇯🇵</p>
        <p>
          Hello! I'm a front-end developer, proficient in React, JavaScript,
          CSS, and HTML. With a true passion for clean and efficient code, I
          thrive on turning ideas into engaging user experiences. My
          problem-solving abilities and collaborative mindset, allows me to be a
          good asset to any development team. Let's connect and explore how I
          can bring value to your projects.
        </p>
      </div>
    </div>
  );
}
