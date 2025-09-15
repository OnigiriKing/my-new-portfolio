import "./style.css";
import { portfolioSvg } from "../../svg/portfolioSvg";
import projectsList from "./data/projects";

export default function WorksScreen() {
  function scroll(e, translate) {
    const img = e.currentTarget.querySelector("img");
    img.style.transform = translate ?? "translateY(0%)";
  }

  function DisplayProjects() {
    return Object.keys(projectsList).map((key, index) => {
      const el = projectsList[key];
      const icons = portfolioSvg(50);


      return (
        <div
          className={`portfolio-website ${index % 2 ? "website-reverse" : ""}`}
          key={el.key}
        >
          <div className="website-img">
            <a
              href={el.demoLink}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(e) =>
                scroll(
                  e,
                  window.matchMedia("(max-width: 1000px)").matches
                    ? el.transformMobile
                    : el.transform
                )
              }
              onMouseLeave={(e) => scroll(e)}
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
                Code{icons.github}
              </a>
              <a href={el.demoLink} target="_blank" rel="noreferrer">
                Live Demo{icons.link}
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
