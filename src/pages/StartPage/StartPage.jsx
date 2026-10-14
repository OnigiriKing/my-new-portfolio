import React from "react";
import "./style.css";
import Typed from "typed.js";
import selfie from "../../img/selfie.webp";

function TypeComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Frontend Developer"],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 id="hero-title" className="typing-lib">
      <span className="sr-only">
        Nikita Zamyshliaev — React and TypeScript Developer
      </span>
      <span aria-hidden="true">
        I'm a <span ref={el} />
      </span>
    </h1>
  );
}

export default function StartPage() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "Node.js",
    "REST APIs",
    "PostgreSQL",
    "Git",
  ];
  
  return (
    <section id="start-screen" aria-labelledby="hero-title">
      <div className="start-screen-wrapper">
        <div className="text-photo-wrapper">
          <div className="start-screen-des">
            <div className="auto-typing">
              <TypeComponent />
            </div>
            <p>
              Frontend-focused software engineer with professional React,
              Redux, and REST API experience, building full-stack projects
              with TypeScript, Node.js, and PostgreSQL.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#works-screen">
                View Projects
              </a>
              <a className="button button-secondary" href="#contacts-screen">
                Contact Me
              </a>
            </div>
          </div>
          <div className="start-screen-photo">
            <img
              src={selfie}
              alt="Portrait of Nikita Zamyshliaev"
              decoding="async"
              loading="eager"
            />
          </div>
        </div>
        <div className="start-screen-skills">
          <p>Tech Stack</p>
          <div>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li className="skill" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
