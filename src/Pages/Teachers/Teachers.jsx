import React from "react";
import "./Teachers.scss";
import teacher from "../../Assets/Image/teacher.png";
import teacher2 from "../../Assets/Image/teacher2.png";
import { Link } from "react-router-dom";

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Sanjar",
      surName: "Shopo'latov",
      subject: "Dasturlash",
      img: teacher,
      age: 21,
      isStudent: true,
      email: "https://temp-mail.org",
    },
    {
      id: 3,
      name: "Malika",
      surName: "Akramova",
      subject: "Rus tili",
      img: teacher2,
      age: 28,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 2,
      name: "Biloliddin",
      surName: "Asadov",
      subject: "Ingliz tili",
      img: teacher,
      age: 24,
      isStudent: true,
      email: "https://temp-mail.org",
    },
    {
      id: 4,
      name: "Ibrohim",
      surName: "Nabiyev",
      subject: "Matematika",
      img: teacher,
      age: 19,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 6,
      name: "Nozima",
      surName: "Azizova",
      subject: "Mental arifmetika",
      img: teacher2,
      age: 25,
      isStudent: false,
      email: "https://temp-mail.org",
    },
    {
      id: 5,
      name: "Bahrom",
      surName: "Yo'ldashev",
      subject: "Arab tili",
      img: teacher,
      age: 32,
      isStudent: false,
      email: "https://temp-mail.org",
    },
  ];

  return (
    <>
      <div className="teachers">
        <div className="container">
          <h2 className="teacher__title">Teachers</h2>
        </div>
      </div>
      <div className="teachers__container pt-5">
        <div className="container">
          <Link to="/teachers" className="text-decoration-none">
            {teachers.length > 0 && (
              <ul className="teacher__list">
                {teachers.map((techer) => (
                  <li key={techer.id} className="teacher__item">
                    <img src={techer.img} alt="teacher" width={200} />
                    <hr />
                    <div className="text-start ps-5">
                      <h3 className="text-dark mb-3">
                        {techer.name} {techer.surName}
                      </h3>
                      <p className="text-dark mb-3">
                        {" "}
                        <strong>Yoshi:</strong> {techer.age}
                      </p>
                      <p className="text-dark mb-5">
                        <strong>Fani:</strong> {techer.subject}
                      </p>
                      <a className="teachers__link" href={techer.email}>
                        Elektron pochta
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
