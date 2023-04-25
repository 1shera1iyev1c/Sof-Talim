import React from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Courses() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <>
      <div className={`courses__${theme}`}>
        <div className="container">
          <h2 className="courses__title fonts">{Language[lang].course.Kurs}</h2>
        </div>
      </div>
      <div className={`kurs__${theme}`}>
        <div className="container">
          <ul className="courses__list">
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">
                    {Language[lang].course.Dastur}
                  </h4>
                  <p className="courses__text">{Language[lang].course.Kun}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {Language[lang].course.Front}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Sanjar}{" "}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">{Language[lang].home.Rus}</h4>
                  <p className="courses__text">{Language[lang].course.Kun2}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {" "}
                  {Language[lang].home.Rus}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Malika}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">
                    {Language[lang].course.IELTS}
                  </h4>
                  <p className="courses__text">{Language[lang].course.Kun3}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {Language[lang].home.Eng}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Bilol}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">
                    {Language[lang].course.Matem}
                  </h4>
                  <p className="courses__text">{Language[lang].course.Kun4}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {Language[lang].course.Pezi}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Ibo}{" "}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">
                    {Language[lang].course.Mental}
                  </h4>
                  <p className="courses__text">{Language[lang].course.Kun5}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {Language[lang].course.Yosh}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Nozi}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
            <li className="courses__item">
              <Link className="link" to="/courses">
                <div className="courses__content">
                  <h4 className="courses__name">
                    {Language[lang].course.Arab}
                  </h4>
                  <p className="courses__text">{Language[lang].course.Kun6}</p>
                </div>
                <h3 className="courses__name2 fonts">
                  {Language[lang].course.Taj}
                </h3>
                <p className="courses__text2">
                  <strong>{Language[lang].course.Ustoz} :</strong>{" "}
                  {Language[lang].course.Baxa}
                </p>
                <Link className="courses__link" href="/contact">
                  {Language[lang].header.Kursgayozilish}
                </Link>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
