import React from "react";
import "./style.css";
import StartPage from "./pages/StartPage/StartPage";
import HeaderMenu from "./pages/Header/HeaderMenu";
import AboutPage from "./pages/AboutPage/About";
import WorksScreen from "./pages/MyWorks/Works";

export default function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <StartPage />
      <AboutPage />
      <WorksScreen />
    </div>
  );
}
