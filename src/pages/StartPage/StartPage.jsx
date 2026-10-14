import React from "react";
import "./style.css";
import Typed from "typed.js";
import selfie from "../../img/selfie.webp";
import reactIcon from "../../img/skills/react.svg";
import typeScriptIcon from "../../img/skills/typescript.svg";
import javaScriptIcon from "../../img/skills/javascript.svg";
import reduxIcon from "../../img/skills/redux.svg";
import nodeIcon from "../../img/skills/nodejs.svg";
import postgreSqlIcon from "../../img/skills/postgresql.svg";
import gitIcon from "../../img/skills/git.svg";
import scssIcon from "../../img/skills/scss.svg";

function TypeComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer", "React Developer"],
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
        Nikita Zamyshliaev — Software Engineer specializing in React and
        TypeScript
      </span>
      <span aria-hidden="true">
        I'm a <span ref={el} />
      </span>
    </h1>
  );
}

export default function StartPage() {
  const skills = [
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: typeScriptIcon },
    { name: "JavaScript", icon: javaScriptIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "PostgreSQL", icon: postgreSqlIcon },
    { name: "Git", icon: gitIcon },
    { name: "SCSS", icon: scssIcon },
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
              Software engineer with professional frontend experience in
              React, Redux, and REST APIs, plus full-stack projects built with
              TypeScript, Node.js, and PostgreSQL.
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
                <li className="skill" key={skill.name}>
                  <span className="skill-icon" aria-hidden="true">
                    <img src={skill.icon} alt="" decoding="async" />
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
