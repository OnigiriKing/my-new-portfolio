import React from "react";
import "./style.css";

export default function StartPage() {
  return (
    <div id="start-screen">
      <div className="start-screen-wrapper">
        <div className="start-screen-des">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Nick. A passionate Front-end React Developer based in
            Bangkok, Thailand.
          </p>
        </div>
        <div className="start-screen-photo">Photo here</div>
      </div>
      <div className="start-screen-skills">
        <div>Tech Stack</div>
        <div>React, js, css etc</div>
      </div>
    </div>
  );
}
