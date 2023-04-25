import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import logo from '../..//Assets/Image/logo.png'
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Footer() {

  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <footer className={`footer__${theme}`}>
      <div className='container footer__container'>
      <div>
      <a href="#">
        <img src={logo} alt="logo" width={250} height={100} />
      </a>
      <p className='footer__text'>
        {Language[lang].footer.Addres}
      </p>
      </div>
      <ul className='footer__list'>
        <li className="footer__item">
          <Link className='footer__link h6' to="/">{Language[lang].header.Asosiy}</Link>
          <Link className='footer__link' to="/">{Language[lang].footer.Malumot}</Link>
          <Link className='footer__link' to="/">{Language[lang].footer.Manzil}</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/courses">{Language[lang].header.Kurslar}</Link>
          <Link className='footer__link' to="/courses">{Language[lang].footer.Vaqtlar}</Link>
          <Link className='footer__link' to="/courses">{Language[lang].footer.Xonalar}</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/teachers">{Language[lang].header.Ustozlar}</Link>
          <Link className='footer__link' to="/teachers">{Language[lang].footer.Oquvchilar}</Link>
          <Link className='footer__link' to="/teachers">{Language[lang].footer.Adminstratorlar}</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/contact">{Language[lang].header.Kursgayozilish}</Link>
          <Link className='footer__link' to="/contact">{Language[lang].footer.Raqam}</Link>
          <Link className='footer__link' to="/contact">{Language[lang].footer.Derektor}</Link>
        </li>
      </ul>
      <a className='footer__link2' target="_blank" href="https://t.me/Sof_talim_admin">{Language[lang].footer.KopMalumot}</a>
    </div>
    </footer>
  )
}
