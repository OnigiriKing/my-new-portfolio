import "./style.css";
import { closeButton } from "../../svg/headerSvg";

export default function DropMenu() {
  function closeMenu() {
    function close() {
      document.querySelector(".drop-menu").classList.remove("menu-open");
    }
    return {
      onClick: function () {
        close();
      },
    };
  }

  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...closeMenu()}>
        {closeButton(50)}
      </div>
      <a href="#start-screen" {...closeMenu()}>
        Home
      </a>
      <a href="#about-screen" {...closeMenu()}>
        About
      </a>
      <a href="#works-screen" {...closeMenu()}>
        Projects
      </a>
      <a href="#contacts-screen" {...closeMenu()}>
        Contacts
      </a>
    </div>
  );
}
