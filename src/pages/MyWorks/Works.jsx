import React from "react";
import "./style.css";
import { portfolioSvg } from "../../svg/portfolioSvg";
import projectsList from "./data/projects";

export default function WorksScreen() {
  function scroll(e, translate, back = false) {
    const element = e.currentTarget.querySelector("img");
    if (back === false) {
      element.style.transform = translate;
    } 
    if (back === true) {
      element.style.transform = "translateY(0%)";
    } 
  }
  
  function DisplayProjects() {
    return Object.keys(projectsList).map((key) => {
      const el = projectsList[key];

      return (
        <div className="portfolio-website" key={el.key}>
          <div className="website-img">
            <a
              href={el.demoLink}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(e) => scroll(e, el.transform )}
              onMouseLeave={(e) => scroll(e, 0, true)}
            >
              <img src={el.img} alt="Website" />
            </a>
          </div>
          <div className="website-info">
            <p>{el.name}</p>
            <p>{el.des}</p>
            <div className="skills-used">
              <div>{el.language}</div>
              <div> {el.css}</div>
            </div>
            <div className="website-links">
              <a href={el.codeLink} target="_blank" rel="noreferrer">
                Code{portfolioSvg(50).github}
              </a>
              <a href={el.demoLink} target="_blank" rel="noreferrer">
                Live Demo{portfolioSvg(50).link}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div id="works-screen">
      <div className="portfolio-wrapper">
        <div className="portfolio-text">
          <p>PORTFOLIO</p>
          <p>Embracing Individuality Across Every Project</p>
        </div>
        <div className="portfolio-projects">
          <DisplayProjects />
        </div>
      </div>
    </div>
  );
}
