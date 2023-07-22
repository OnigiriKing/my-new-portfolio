import React from "react";
import "./style.css";
import Typed from "typed.js";

function TypeComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Front-End Developer"],
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
        <div className="start-screen-des">
          <div className="auto-typing">
            <TypeComponent />
          </div>
          <p>
            Hi, I'm Nick. A passionate Front-end React Developer based in
            Bangkok, Thailand.
          </p>
        </div>
        <div className="start-screen-photo"></div>
      </div>
      <div className="start-screen-skills">
        <div>Tech Stack</div>
        <div>React, js, css etc</div>
      </div>
    </div>
  );
}
