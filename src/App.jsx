import "./style.css";
import { useEffect, useRef, useState } from "react";
import StartPage from "./pages/StartPage/StartPage";
import HeaderMenu from "./pages/Header/HeaderMenu";
import AboutPage from "./pages/AboutPage/About";
import WorksScreen from "./pages/MyWorks/Works";
import Footer from "./pages/Footer/Footer";
import Contacts from "./pages/ContactPage/Contact";
import DropMenu from "./pages/DropMenu/DropMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <DropMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
      <HeaderMenu
        isMenuOpen={isMenuOpen}
        menuButtonRef={menuButtonRef}
        onMenuOpen={() => setIsMenuOpen(true)}
      />
      <main id="main-content">
        <StartPage />
        <AboutPage />
        <WorksScreen />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
