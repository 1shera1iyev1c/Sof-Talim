import React, { useRef, useState } from "react";
import "./Contact.scss";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const localUser = JSON.parse(localStorage.getItem('user')) || []
  const [user, setUser] = useState(localUser);
  const userName = useRef();
  const userNumber = useRef();
  const userCourse = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      id: Math.ceil(Math.random() * 1000),
      Name: userName.current.value,
      Number: userNumber.current.value,
      Course: userCourse.current.value,
      Date: date,
    };
    setUser([...user, newUser]);
    window.localStorage.setItem('user', JSON.stringify([newUser, ...user]))
  };


  return (
    <div className="container contact__container">
      <div className={`content__info--${theme}`}>
        <h2 className="content__title">{Language[lang].contact.name}</h2>
        <p className="content__text">
          
          <span className="warning">! </span>
          {Language[lang].contact.text1}: <br />
          <span className="content__span">"Odilbek Mukhamedov"</span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>
          {Language[lang].contact.text2}: <br />
          <span className="content__span">
            "<strong>+998</strong>909887599"
          </span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>
          {Language[lang].contact.text3}
          <span className="content__span">➡️</span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>{Language[lang].contact.text4}
          😊
        </p>
        <span className="content__admin">{Language[lang].contact.Admin} <a className="content__link" target="_blank" href="https://instagram.com/1sheraliyev1c">Odilbek Mukhamedov 👨🏻‍💻</a>
        </span>
      </div>
      <div className={`contact__${theme}`}>
        <h2 className="contact__title">{Language[lang].header.Kursgayozilish}</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="flex__content">
            <div>
              <label id="label" htmlFor="userName">
              {Language[lang].contact.Ism}
              </label>
              <br />
              <input id="userName" ref={userName} type="text" />
            </div>
            <div>
              <label id="label" htmlFor="userNumber">
                {Language[lang].contact.Tel}
              </label>
              <br />
              <input
                id="userNumber"
                ref={userNumber}
                type="tel"
                defaultValue={"+" + 998}
              />
            </div>
          </div>
          <br />
          <label id="label" htmlFor="userCourse">
          {Language[lang].contact.Kurs}
          </label>
          <br />
          <select ref={userCourse} id="userCourse">
            <option disabled>
            {Language[lang].contact.Kurs}
            </option>
            <option value="Ingliz tili">{Language[lang].home.Eng}</option>
            <option value="IT Dasturlash">{Language[lang].course.Dastur}</option>
            <option value="Rus tili">{Language[lang].home.Rus}</option>
          </select>
          <br />
          <label id="label" htmlFor="massage">
          {Language[lang].contact.comment}
          </label>
          <br />
          <textarea id="massage" cols="63"></textarea>
          <br />
          <button className="contact__btn">{Language[lang].login.Jonat}</button>
        </form>
        <button className="admin__btn">{Language[lang].contact.Admin}</button>
      </div>
    </div>
  );
}
