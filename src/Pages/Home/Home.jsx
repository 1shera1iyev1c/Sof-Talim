import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import rasm from '../../Assets/Image/teacher.png'
import rasm2 from '../../Assets/Image/teacher2.png'

export default function Home() {
  return (
    <div className="intro">
      <div className="container">
        <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, molestias!</p>
        <Link to="/teachers">O'qituvchilar</Link>
        </div>
        <ul className="intro__list">
          <li className="intro__item">
            <a href="#">
              <img src={rasm} alt="rasm" width={100} height={150} />
              
            </a>
          </li>
          <li className="intro__item">
            <a href="#">
              <img src={rasm2} alt="rasm" width={100} height={150} />
              
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
