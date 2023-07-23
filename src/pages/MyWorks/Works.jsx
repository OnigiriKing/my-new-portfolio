import React from "react";
import "./style.css"
import { portfolioSvg } from "../../svg/portfolioSvg";


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
              <a>
                <img></img>
              </a>
               </div>
              <div className="website-info">
                <p>Onigiri Crypto</p>
                <p>
                  Onigiri Crypto is a cryptocurrency price browsing website that
                  provides real-time data sourced from the Bitfinex API.
                </p>
                <div className="skills-used">
                  <div>React</div>
                  <div> Vanila Css</div>
                </div>
                <div className="website-links">
                  <a href="Link" target="_blank">
                    Code{portfolioSvg(50).github}
                  </a>
                  <a href="Link" target="_blank">
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