import React, { useState } from 'react'
import './Login.scss'
import eye from '../../Assets/Image/eye-fill.svg'
import eyeSlash from '../../Assets/Image/eye-slash-fill.svg'
import person from '../../Assets/Image/person-fill.svg'

export default function Login() {

  const [showPass, setShowPass] = useState(false);

  const togglePassShow = () => {
    setShowPass(!showPass);
  };

  return (
    <>
       <div className='pt-5 pb-5 container wrapper'>
      <div className="mt-5 login-box">
        <h2>Ro'yhatdan o'tish</h2>
        
          <div className="user-box">
            <input type="text" />
            <label>Ism & Familiya *</label>
          </div>
          <div className="user-box">
            <input type={showPass ? "text" : "password"} />
            <label>Parol *</label>
            <button className="btn" onClick={() => togglePassShow()}>
            {showPass ? <img src={eye} alt="eye" width={30} /> : <img src={eyeSlash} alt="eye" width={30} />}
          </button>
          </div>  
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Jo'natish
          </a>
          <button type="button" className="btn pt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src={person} width={30} />
          </button>
      </div>
    </div>


    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Admins</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Team Leader : <a className='text-decoration-none' href="https://t.me/Sanjar_57_27">Sanjar</a> <br />
          Super Admin : <a className='text-decoration-none' href="https://t.me/zokirjon_komilov">Zokirjon</a> <br />
          Super Admin : <a className='text-decoration-none' href="https://t.me/1sheraliyev1c">Odilbek</a> <br />
          Super Admin : <a className='text-decoration-none' href="https://t.me/Sof_talim_admin">Sof Ta'lim Admin</a>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
