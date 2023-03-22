import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Image/logo.png'
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
      <a href="#">
        <img src={logo} alt="logo" width={200} height={100} />
      </a>
      <ul className='header__list'>
        <li className="header__item">
          <Link className='header__link' to="/">Home</Link>
        </li>
        <li className="header__item">
          <Link className='header__link' to="/courses">Kurslar</Link>
        </li>
        <li className="header__item">
          <Link className='header__link' to="/teachers">Ustozlar</Link>
        </li>
        <li className="header__item">
          <Link className='header__link' to="/contact">Kursga yozilish</Link>
        </li>
      </ul>
      <div>
      <a className='header__link2' target="_blank" href="https://t.me/Sof_talim_admin">Ko'proq ma'lumot uchun</a>
      <Link className='header__link2 ms-4' to="/password">Ro'yhatdan o'tish</Link>
      </div>
    </div>
    </header>
  )
}


