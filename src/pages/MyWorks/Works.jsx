import "./style.css";
import { portfolioSvg } from "../../svg/portfolioSvg";
import projectsList from "./data/projects";

export default function WorksScreen() {
  function scroll(e, translate) {
    const img = e.currentTarget.querySelector("img");
    img.style.transform = translate ?? "translateY(0%)";
  }

  function displayProjects() {
    return Object.values(projectsList).map((project, index) => {
      const icons = portfolioSvg(24);

      return (
        <div
          className={`portfolio-website ${index % 2 ? "website-reverse" : ""}`}
          key={project.key}
        >
          <div className="website-img">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the ${project.name} live demo`}
              onMouseEnter={(e) =>
                scroll(
                  e,
                  window.matchMedia("(max-width: 1000px)").matches
                    ? project.transformMobile
                    : project.transform
                )
              }
              onMouseLeave={(e) => scroll(e)}
              onFocus={(e) =>
                scroll(
                  e,
                  window.matchMedia("(max-width: 1000px)").matches
                    ? project.transformMobile
                    : project.transform
                )
              }
              onBlur={(e) => scroll(e)}
            >
              <img
                src={project.img}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <div className="website-info">
            <h3>{project.name}</h3>
            <p>{project.des}</p>
            <ul className="skills-used" aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <div className="website-links">
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                Code{icons.github}
              </a>
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                Live Demo{icons.link}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="works-screen" aria-labelledby="portfolio-title">
      <div className="portfolio-wrapper">
        <div className="portfolio-text">
          <p className="section-label">PORTFOLIO</p>
          <h2 id="portfolio-title">Selected software projects</h2>
        </div>
        <div className="portfolio-projects">
          {displayProjects()}
        </div>
      </div>
    </section>
  );
}
