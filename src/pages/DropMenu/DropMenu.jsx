import { useEffect, useRef } from "react";
import "./style.css";
import { closeButton } from "../../svg/headerSvg";

export default function DropMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <nav
      id="mobile-navigation"
      className={`drop-menu ${isOpen ? "menu-open" : ""}`}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <button
        ref={closeButtonRef}
        className="menu-close-button"
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      >
        {closeButton(50)}
      </button>
      <a href="#start-screen" tabIndex={isOpen ? 0 : -1} onClick={onClose}>
        Home
      </a>
      <a href="#about-screen" tabIndex={isOpen ? 0 : -1} onClick={onClose}>
        About
      </a>
      <a href="#works-screen" tabIndex={isOpen ? 0 : -1} onClick={onClose}>
        Projects
      </a>
      <a href="#contacts-screen" tabIndex={isOpen ? 0 : -1} onClick={onClose}>
        Contacts
      </a>
    </nav>
  );
}
