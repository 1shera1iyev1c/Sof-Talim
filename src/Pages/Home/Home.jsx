import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import rasm from "../../Assets/Image/teacher.png";
import rasm2 from "../../Assets/Image/teacher2.png";
import rasm3 from "../../Assets/Image/parta.jpg";
import rasm4 from "../../Assets/Image/globus.jpg";
import rasm5 from "../../Assets/Image/abc.jpg";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <>
      <div className={`intro__${theme}`}>
        <div className="container intro__container">
          <div>
            <h2 className="intro__title">{Language[lang].home.Name}</h2>
            <p className="intro__text">
              {Language[lang].home.Talim} <br /> {Language[lang].home.Bilim}
            </p>
            <Link className="intro__link" to="/teachers">
              {Language[lang].header.Ustozlar}
            </Link>
          </div>
          <ul className="intro__list">
            <li className="list2__item3 list2__item">
              <Link className="list2__item--link" to="/teachers">
                <img
                  className="ackili-opa ms-5"
                  src={rasm}
                  alt="bola"
                  width={140}
                />
                <div className="div pt-4">
                  <h3 className="title__keepitreal">
                    {Language[lang].home.Bilol}
                  </h3>
                  <p className="text__total">
                    {Language[lang].home.Fan} :{" "}
                    <span className="span__number">
                      {Language[lang].home.Eng}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="list2__item3 list2__item">
              <Link className="list2__item--link" to="/teachers">
                <img
                  className="ackili-opa ms-5"
                  src={rasm2}
                  alt="qiz"
                  width={140}
                />
                <div className="div">
                  <h3 className="title__keepitreal">
                    {Language[lang].home.Malika}
                  </h3>
                  <p className="text__total">
                    {Language[lang].home.Fan} :{" "}
                    <span className="span__number">
                      {Language[lang].home.Rus}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`nmadr__${theme}`}>
        <div className="container">
          <ul className="list">
            <li className="item">
              <div>
                <h3 className="list__title">{Language[lang].home.Title}</h3>
                <p className="list__text">{Language[lang].home.Text}</p>
              </div>
              <img
                className="list__img"
                src={rasm3}
                alt="rasm"
                width={300}
                height={200}
              />
            </li>
            <li className="item">
              <div>
                <h3 className="list__title">{Language[lang].home.Title}</h3>
                <p className="list__text">{Language[lang].home.Text}</p>
              </div>
              <img
                className="list__img"
                src={rasm4}
                alt="rasm"
                width={300}
                height={200}
              />
            </li>
            <li className="item">
              <div>
                <h3 className="list__title">{Language[lang].home.Title}</h3>
                <p className="list__text">{Language[lang].home.Text}</p>
              </div>
              <img
                className="list__img"
                src={rasm5}
                alt="rasm"
                width={300}
                height={200}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
