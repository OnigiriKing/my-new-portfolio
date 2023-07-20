import React from "react";
import "./style.css";
import {contactSvg} from "../../svg/contactSvg";


export default function Contacts() {
  return (
    <div className="contacts-page">
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
              <p>Bangkok, Thailand</p>
            </div>
          </div>

          <div className="contacts-object">
            <span className="contacts-svg">{contactSvg(40).emailSvg}</span>
            <div className="contacts-des">
              <p>Email</p>
              <p>oooNikita87@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}