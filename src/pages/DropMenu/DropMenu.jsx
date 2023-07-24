import React from "react";
import "./style.css";
import { closeButton } from "../../svg/headerSvg";


export default function DropMenu() {

  function closeMenu() {

  }


    return (
      <div className="drop-menu ">
        <div className="menu-close-button">{closeButton(50)}</div>
        <a href="#start-screen">Home</a>
        <a href="#about-screen">About</a>
        <a href="#works-screen">Projects</a>
        <a href="#contacts-screen">Contacts</a>
      </div>
    );
}