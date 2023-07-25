import React from "react";
import "./style.css";
import {contactSvg} from "../../svg/contactSvg";


export default function Contacts() {

  const emailLink = `mailto:oooNikita87@gmail.com`;

  const mapLink = `https://www.google.com/maps/place/Bangkok`;

  return (
    <div id="contacts-screen">
      <div className="contacts-wrapper">
        <div className="contacts-welcome">
          <p>CONTACT</p>
          <p> Your next great project starts here!</p>
        </div>

        <div className="contact-info-wrapper">
          <div className="contacts-object">
            <span className="contacts-svg">{contactSvg(40).mapSvg}</span>
            <div className="contacts-des">
              <p>Location</p>
              <a href={mapLink} target="_blank" rel="noreferrer">
                Bangkok, Thailand
              </a>
            </div>
          </div>

          <div className="contacts-object">
            <span className="contacts-svg">{contactSvg(40).emailSvg}</span>
            <div className="contacts-des">
              <p>Email</p>
              <a href={emailLink}>oooNikita87@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}