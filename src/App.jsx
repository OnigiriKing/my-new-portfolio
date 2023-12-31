import React from "react";
import "./style.css";
import StartPage from "./pages/StartPage/StartPage";
import HeaderMenu from "./pages/Header/HeaderMenu";
import AboutPage from "./pages/AboutPage/About";
import WorksScreen from "./pages/MyWorks/Works";
import Footer from "./pages/Footer/Footer";
import Contacts from "./pages/ContactPage/Contact";
import DropMenu from "./pages/DropMenu/DropMenu";

export default function App() {
  return (
    <div className="App">
      <DropMenu />
      <HeaderMenu />
      <StartPage />
      <AboutPage />
      <WorksScreen />
      <Contacts />
      <Footer />
    </div>
  );
}
