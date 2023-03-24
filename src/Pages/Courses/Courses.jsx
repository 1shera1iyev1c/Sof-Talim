import React from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";

export default function Courses() {
  return (
    <>
      <div className="courses">
        <div className="container">
          <h2 className="courses__title">Kurslar</h2>
        </div>
      </div>
      <div className="container">
        <ul className="courses__list">
          <li className="courses__item">
            <Link className="link" to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">Dasturlash</h4>
                <p className="courses__text">Dush, Chor, Juma 16:00</p>
              </div>
              <h3 className="courses__name2">Front-end</h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Sanjar Shopo'latov{" "}
              </p>
              <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
          <li className="courses__item">
            <Link className="link" to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">Rus tili</h4>
                <p className="courses__text">Se, Pay, Shan 14:00</p>
              </div>
              <h3 className="courses__name2"> Rus tili</h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Malika Akramova
              </p>
              <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
          <li className="courses__item">
            <Link className="link" to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">IELTS Ingliz tili</h4>
                <p className="courses__text">Dush, Chor, Juma 18:00</p>
              </div>
              <h3 className="courses__name2">Ingliz tili</h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Biloliddin Asadov
              </p>
              <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
          <li className="courses__item">
            <Link className="link"to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">Matematika</h4>
                <p className="courses__text">Se, Pay, Shan 18:00</p>
              </div>
              <h3 className="courses__name2">
                Prezident makablariga tayyorlov
              </h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Ibrohim Nabiyev{" "}
              </p>
                <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
          <li className="courses__item">
            <Link className="link" to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">Mental Arifmetika</h4>
                <p className="courses__text">Dush, Chor, Juma 16:00</p>
              </div>
              <h3 className="courses__name2">
                Yosh bolalar uchun mental arifmetikasi
              </h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Nozima Azizova
              </p>
                <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
          <li className="courses__item">
            <Link className="link" to="/courses">
              <div className="courses__content">
                <h4 className="courses__name">Arab tili</h4>
                <p className="courses__text">Se, Pay, Shan 16:00</p>
              </div>
              <h3 className="courses__name2">Tajvid qoidalari</h3>
              <p className="courses__text2">
                <strong>Ustoz :</strong> Bahrom Yo'ldoshev
              </p>
              <Link className="courses__link" href="/contact">Kursga yozilish</Link>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
