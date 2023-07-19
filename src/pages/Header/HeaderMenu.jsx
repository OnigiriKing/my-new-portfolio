import React from "react";
import "./style.css";
import { headerSvg } from "../../svg/headerSvg";

export default function HeaderMenu() {
  
  const [isHover, setHover] = React.useState({ln: false, git: false, inst: false })

  function changeHover(type, state) {
    setHover((prevState) => ({ ...prevState, [type]: state }));
  }
  

  function getMouseHandlers(mediaType) {
    return {
      onMouseEnter: function () {
        changeHover(mediaType, true);
      },
      onMouseLeave: function () {
        changeHover(mediaType, false);
      },
    };
  }

    return (
      <div className="header-menu">
        <div>
          <p>Onigiri_King</p>
        </div>
        <div className="nav-links">
          <p>Home</p>
          <p>About</p>
          <p>Works</p>
        </div>
        <div className="sm-links">
          <a
            href="https://www.linkedin.com/in/onigiriking/"
            target="_blank"
            {...getMouseHandlers("ln")}
          >
            {headerSvg("ln", isHover.ln)}
          </a>
          <a
            href="https://github.com/OnigiriKing"
            target="_blank"
            {...getMouseHandlers("git")}
          >
            {headerSvg("git", isHover.git)}
          </a>
          <a
            href="https://www.instagram.com/onigiri_king/"
            target="_blank"
            {...getMouseHandlers("inst")}
          >
            {headerSvg("inst", isHover.inst)}
          </a>
        </div>
      </div>
    );
}
