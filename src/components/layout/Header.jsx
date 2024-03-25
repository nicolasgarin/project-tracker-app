import React from "react";
import logo from "../../assets/logo-celeste-circulo.svg";
import esLogo from "../../assets/esp.svg";
import enLogo from "../../assets/eng.svg";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useUserOptions } from "../../context/UserOptionsContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme, lang, toggleLang } = useUserOptions();

  return (
    <header className={`header ${theme}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="project tracker logo" />
        </Link>
        <div className="options d-flex align-items-center">
          <div className="switch-container d-flex align-items-center">
            <IoMoon />
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <span className="slider round" />
            </label>
            <IoSunny />
          </div>
          <div className="lang-container">
            <div
              className={`logo-cont d-flex align-items-center justify-content-center ${
                lang === "es" ? "animation" : "animation-2"
              }`}
              onClick={toggleLang}
            >
              <img
                className="lang-logo"
                src={lang === "es" ? esLogo : enLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
