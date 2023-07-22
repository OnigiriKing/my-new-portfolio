import React from "react";
import "./style.css";
import Typed from "typed.js";
import { skillsSvg } from "../../svg/skillsSvg";

function TypeComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Frontend Developer"],
      backSpeed: 30,
      typeSpeed: 60,
      loop: true,
      loopCount: 1,
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
  return (
    <div id="start-screen">
      <div className="start-screen-wrapper">
        <div className="text-photo-wrapper">
          <div className="start-screen-des">
            <div className="auto-typing">
              <TypeComponent />
            </div>
            <p>
              Hello, I'm Nick – a dedicated Front-end React Developer based in
              Bangkok, Thailand.
            </p>
          </div>
          <div className="start-screen-photo"></div>
        </div>
        <div className="start-screen-skills">
          <p>Tech Stack</p>
          <div>
            <ul className="skill-list">
              <li className="skill">{skillsSvg(40).react}</li>
              <li className="skill">{skillsSvg(40).javaScript}</li>
              <li className="skill">{skillsSvg(40).css}</li>
              <li className="skill">{skillsSvg(40).html}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
