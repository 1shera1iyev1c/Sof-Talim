import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Image/logo.png";
import "./Header.scss";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  function handleTheme(e) {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  }

  function handleLang(evt) {
    setLang(evt.target.value);
    localStorage.setItem("lang", evt.target.value);
  }

  return (
    <header className={`header__${theme}`}>
      <div className="container header__container">
        <a href="#" >
          <img src={logo} alt="logo" width={200} height={100} />
        </a>
        <ul className="header__list">
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/home">
              {Language[lang].header.Asosiy}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/courses">
              {Language[lang].header.Kurslar}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/teachers">
              {Language[lang].header.Ustozlar}
            </Link>
          </li>
          <li className="header__item">
            <Link className={`header__link--${theme}`} to="/contact">
              {Language[lang].header.Kursgayozilish}
            </Link>
          </li>
        </ul>
        <div className="select__div">
          <select
            className="select form-select me-2"
            onChange={handleTheme}
            defaultValue={theme}
          >
            <option value="dark">{Language[lang].header.Tun}</option>
            <option value="light">{Language[lang].header.Kun}</option>
          </select>
          <select
            className="select form-select"
            onChange={handleLang}
            defaultValue={lang}
          >
            <option value="eng">
              Eng
            </option>
            <option value="uzb">
              Uzb
            </option>
            <option value="rus">
              Rus
            </option>
          </select>
        </div>
        <div>
          <Link className="header__link2 ms-4" to="/">
            {Language[lang].header.Royhatdanotish}
          </Link>
        </div>
      </div>
    </header>
  );
}
