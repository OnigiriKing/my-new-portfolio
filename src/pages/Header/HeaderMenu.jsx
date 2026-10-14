import "./style.css";
import { headerSvg, menuSvg } from "../../svg/headerSvg";

export default function HeaderMenu({ isMenuOpen, menuButtonRef, onMenuOpen }) {
  return (
    <header className="header-menu">
      <a className="header-name" href="#start-screen">
        Nikita Zamyshliaev
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#start-screen">Home</a>
        <a href="#about-screen">About</a>
        <a href="#works-screen">Projects</a>
        <a href="#contacts-screen">Contacts</a>
        <button
          ref={menuButtonRef}
          className="mobile-menu"
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={onMenuOpen}
        >
          {menuSvg(34)}
        </button>
      </nav>
      <nav className="sm-links" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/onigiriking/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          {headerSvg("ln")}
        </a>
        <a
          href="https://github.com/OnigiriKing"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          {headerSvg("git")}
        </a>
      </nav>
    </header>
  );
}
