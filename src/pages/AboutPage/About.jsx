import "./style.css";
import aboutImg from "../../img/aboutImg.webp";

export default function AboutPage() {
  return (
    <section id="about-screen" aria-labelledby="about-title">
      <div className="about-image">
        <img
          src={aboutImg}
          alt="Nikita working on a software project"
          loading="lazy"
        />
      </div>
      <div className="about-des">
        <p className="section-label">ABOUT ME</p>
        <h2 id="about-title">
          Software engineer with a frontend foundation based in Tokyo, Japan 🇯🇵
        </h2>
        <p>
          I have professional experience building internal business tools with
          React, JavaScript, Redux, REST APIs, SCSS, and Git. I also develop
          full-stack projects with TypeScript, Node.js, and PostgreSQL. I enjoy
          turning business requirements into reliable, approachable interfaces
          and collaborating across frontend and backend work.
        </p>
        <ul className="credentials" aria-label="Qualifications">
          <li>JLPT N2</li>
          <li>HSK 5</li>
          <li>ITPEC FE Certificate of Excellence</li>
          <li>Professional experience in Japanese and international teams</li>
        </ul>
      </div>
    </section>
  );
}
