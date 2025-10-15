import React from "react";
import "./style.css";
import Typed from "typed.js";
import { skillsSvg } from "../../svg/skillsSvg";
import selfie from "../../img/selfie.webp"

function TypeComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Frontend Developer"],
      backSpeed: 30,
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing-lib">
      I'm a <span ref={el} />
    </div>
  );
}

export default function StartPage() {

  const skills = React.useMemo(() => skillsSvg(40), []);
  
  return (
    <main id="start-screen">
      <div className="start-screen-wrapper">
        <div className="text-photo-wrapper">
          <div className="start-screen-des">
            <div className="auto-typing">
              <TypeComponent />
            </div>
            <p>
              Hello, I'm Nick – a dedicated Front-end React Developer based in
              Tokyo, Japan.
            </p>
          </div>
          <div className="start-screen-photo">
            <img
              src={selfie}
              alt="img"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
          </div>
        </div>
        <div className="start-screen-skills">
          <p>Tech Stack</p>
          <div>
            <ul className="skill-list">
              <li className="skill">{skills.react}</li>
              <li className="skill">{skills.javaScript}</li>
              <li className="skill">{skills.css}</li>
              <li className="skill">{skills.html}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
