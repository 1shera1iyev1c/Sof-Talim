import React from "react";
import "./Teachers.scss";
import teacher from "../../Assets/Image/teacher.png";
import teacher2 from "../../Assets/Image/teacher2.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Teachers() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const teachers = [
    {
      id: 1,
      name: `${Language[lang].teacher.Sanjar}`,
      surName: `${Language[lang].teacher.Shopolatov}`,
      subject: `${Language[lang].course.Dastur}`,
      img: teacher,
      age: 21,
      isStudent: true,
      email: "https://temp-mail.org",
    },
    {
      id: 3,
      name: `${Language[lang].home.Malika}`,
      surName: `${Language[lang].teacher.Akramova}`,
      subject: `${Language[lang].home.Rus}`,
      img: teacher2,
      age: 28,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 2,
      name: `${Language[lang].home.Bilol}`,
      surName: `${Language[lang].teacher.Asadov}`,
      subject: `${Language[lang].home.Eng}`,
      img: teacher,
      age: 24,
      isStudent: true,
      email: "https://temp-mail.org",
    },
    {
      id: 4,
      name: `${Language[lang].teacher.Ibrohim}`,
      surName: `${Language[lang].teacher.Nabiyev}`,
      subject: `${Language[lang].course.Matem}`,
      img: teacher,
      age: 19,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 6,
      name: `${Language[lang].teacher.Nozima}`,
      surName: `${Language[lang].teacher.Azizova}`,
      subject: `${Language[lang].course.Mental}`,
      img: teacher2,
      age: 25,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 5,
      name: `${Language[lang].teacher.Bahrom}`,
      surName: `${Language[lang].teacher.Yoldashev}`,
      subject: `${Language[lang].course.Arab}`,
      img: teacher,
      age: 32,
      isStudent: false,
      email: "https://temp-mail.org",
    },
  ];

  return (
    <>
      <div className={`teachers__${theme}`}>
        <div className="container">
          <h2 className="teacher__title fonts">{Language[lang].header.Ustozlar}</h2>
        </div>
      </div>
      <div className={`teachers__container--${theme} pt-5`}>
        <div className="container">
          <Link to="/teachers" className="text-decoration-none">
            {teachers.length > 0 && (
              <ul className="teacher__list">
                {teachers.map((techer) => 
                  <li key={techer.id} className="teacher__item">
                    <img src={techer.img} alt="teacher" width={200} />
                    <hr />
                    <div className="text-start ps-5">
                      <h3 className="text-dark mb-3">
                        {techer.name} {techer.surName}
                      </h3>
                      <p className="text-dark mb-3">
                        {" "}
                        <strong>{Language[lang].teacher.Yoshi} :</strong> {techer.age}
                      </p>
                      <p className="text-dark mb-5">
                        <strong>{Language[lang].teacher.Fani} :</strong> {techer.subject}
                      </p>
                      <a className="teachers__link" href={techer.email}>
                      {Language[lang].teacher.Pochta}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
