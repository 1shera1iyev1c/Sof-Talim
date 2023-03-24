import React from "react";
import "./Contact.scss";
import teacher from "../../Assets/Image/teacher.png";
import { Link } from "react-router-dom";

export default function Contact() {
  const [user, setUser] = React.useState([]);
  const count = 0;

  function handleUserVal(evt) {
    if (evt.target.value) {
      if (evt.keyCode == 13) {
        const userVal = evt.target.value;

        const newUsers = {
          id: count + 1,
          text: userVal,
          num: +998915185727,
        };
        setUser([newUsers, ...user]);
        console.log(newUsers);
      }
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="mt-5 login-box">
          <h2>Kursga yozilish</h2>
          <form>
            <div className="user-box">
              <input onKeyUp={handleUserVal} type="text" />
              <label>Ism & Familiya *</label>
            </div>
            <div className="user-box">
              <input type="tel" />
              <label>Telefon raqam *</label>
            </div>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Jo'natish
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        {user.length > 0 && (
          <ul className="contact__list">
            {user.map((item) => (
              <li className="contact__item" key={item.id}>
                <img src={teacher} alt="teacher" width={200} />
                <hr />
                <h3 className="contact__title ms-4 h5"><strong>Ism & Familiya :</strong>{item.text}</h3>
                <p className="contact__text ms-4"><strong>Telefon raqam : +</strong>{item.num}</p>
                <Link className="contact__link" to="/teachers">Bog'lanish</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
