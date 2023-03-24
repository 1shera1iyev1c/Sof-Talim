import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import logo from '../..//Assets/Image/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className='container footer__container'>
      <div>
      <a href="#">
        <img src={logo} alt="logo" width={250} height={100} />
      </a>
      <p className='footer__text'>Toshkent shahar, Chilonzor tumani, <br /> Algoritm</p>
      </div>
      <ul className='footer__list'>
        <li className="footer__item">
          <Link className='footer__link h6' to="/">Asosiy</Link>
          <Link className='footer__link' to="/">O'quv markaz haqida</Link>
          <Link className='footer__link' to="/">Manzil</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/courses">Kurslar</Link>
          <Link className='footer__link' to="/courses">Kurs vaqtlari</Link>
          <Link className='footer__link' to="/courses">Kurs xonalari</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/teachers">O'qituvchilar</Link>
          <Link className='footer__link' to="/teachers">O'quvchilar</Link>
          <Link className='footer__link' to="/teachers">Adminstratorlar</Link>
        </li>
        <li className="footer__item">
          <Link className='footer__link h6' to="/contact">Kursga yozilish</Link>
          <Link className='footer__link' to="/contact">O'qituvchilar raqamlari</Link>
          <Link className='footer__link' to="/contact">Derektor bilan bog'lanish</Link>
        </li>
      </ul>
      <a className='footer__link2' target="_blank" href="https://t.me/Sof_talim_admin">Ko'proq ma'lumot uchun</a>
    </div>
    </footer>
  )
}
