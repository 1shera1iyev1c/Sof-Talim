import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import rasm from "../../Assets/Image/teacher.png";
import rasm2 from "../../Assets/Image/teacher2.png";
import rasm3 from "../../Assets/Image/parta.jpg";
import rasm4 from "../../Assets/Image/globus.jpg";
import rasm5 from "../../Assets/Image/abc.jpg";

export default function Home() {
  return (
    <>
      <div className="intro">
        <div className="container intro__container">
          <div>
            <h2 className="intro__title">Lorem ipsum dolor sit amet.</h2>
            <p className="intro__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              molestias!
            </p>
            <Link className="intro__link" to="/teachers">
              O'qituvchilar
            </Link>
          </div>
          <ul className="intro__list">
            <li class="list2__item3 list2__item">
              <Link class="list2__item--link" to="/teachers">
                <img class="ackili-opa ms-5" src={rasm} alt="bola" width={140} />
                <div class="div pt-4">
                  <h3 class="title__keepitreal">Biloliddn</h3>
                  <p class="text__total">
                    Fan : <span class="span__number">Ingliz tili</span>
                  </p>
                </div>
              </Link>
            </li>
            <li class="list2__item3 list2__item">
              <Link class="list2__item--link" to="/teachers">
                <img
                  class="ackili-opa ms-5"
                  src={rasm2}
                  alt="qiz"
                  width={140}
                />
                <div class="div">
                  <h3 class="title__keepitreal">Malika</h3>
                  <p class="text__total">
                    Fan : <span class="span__number">Rus tili</span>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <ul className="list">
          <li className="item">
            <div>
              <h3 className="list__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, asperiores.
              </h3>
              <p className="list__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum ad rerum suscipit a aspernatur labore qui explicabo
                praesentium incidunt cumque.
              </p>
            </div>
            <img className="list__img" src={rasm3} alt="rasm" width={300} height={200} />
          </li>
          <li className="item">
            <div>
              <h3 className="list__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, asperiores.
              </h3>
              <p className="list__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum ad rerum suscipit a aspernatur labore qui explicabo
                praesentium incidunt cumque.
              </p>
            </div>
            <img className="list__img" src={rasm4} alt="rasm" width={300} height={200} />
          </li>
          <li className="item">
            <div>
              <h3 className="list__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, asperiores.
              </h3>
              <p className="list__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum ad rerum suscipit a aspernatur labore qui explicabo
                praesentium incidunt cumque.
              </p>
            </div>
            <img className="list__img" src={rasm5} alt="rasm" width={300} height={200} />
          </li>
        </ul>
      </div>
    </>
  );
}
