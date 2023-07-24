import React from "react";
import "./style.css"
import { portfolioSvg } from "../../svg/portfolioSvg";
import Nike from "../../img/Nike.png";


export default function WorksScreen() {




    return (
      <div id="works-screen">
        <div className="portfolio-wrapper">
          <div className="portfolio-text">
            <p>PORTFOLIO</p>
            <p>Embracing Individuality Across Every Project</p>
          </div>
          <div className="portfolio-projects">
            <div className="portfolio-website">
              <div className="website-img">
                <a href="https://www.nike.com/th/" target="_blank">
                  <img src={Nike} />
                </a>
              </div>
              <div className="website-info">
                <p>Nike</p>
                <p>
                  Nike's website is the official online platform for the
                  renowned sportswear and athletic footwear brand. Shop the
                  latest collections and iconic products for sports, fitness,
                  and style.
                </p>
                <div className="skills-used">
                  <div>React</div>
                  <div> Vanila Css</div>
                </div>
                <div className="website-links">
                  <a href="Link" target="_blank">
                    Code{portfolioSvg(50).github}
                  </a>
                  <a href="https://www.nike.com/th/" target="_blank">
                    Live Demo{portfolioSvg(50).link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}