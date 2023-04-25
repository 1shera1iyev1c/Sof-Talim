import React, { useState } from "react";
import "./Login.scss";
import eye from "../../Assets/Image/eye-fill.svg";
import eyeSlash from "../../Assets/Image/eye-slash-fill.svg";
import person from "../../Assets/Image/person-fill.svg";
import { ThemeContext } from "../../Context/theme-context";
import { LangContext } from "../../Context/lang-context";
import { useContext } from "react";
import { Language } from "../../Assets/Language/Langugage";

export default function Login() {

  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState();
  const [parol, setParol] = useState();

  const togglePassShow = () => {
    setShowPass(!showPass);
  };
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleParol = (e) => {
    setParol(e.target.value);
  };
  const changePage = () => {
    if (login == "admin" && parol == 54321) {
      window.location.replace("/home");
    } else {
      alert("Login yoki parolingiz xato!");
    }
  };

  return (
    <div className={`login__${theme}`}>
      <div className="pt-5 pb-5 container wrapper">
        <div className={`mt-5 login-box login-box__${theme}`}>
          <h2>{Language[lang].login.Royhat}</h2>

          <div className="user-box">
            <input type="text" onChange={handleLogin} />
            <label>{Language[lang].login.Login} *</label>
          </div>
          <div className="user-box">
            <input
              onChange={handleParol}
              type={showPass ? "text" : "password"}
            />
            <label>{Language[lang].login.Parol} *</label>
            <button className="btn" onClick={() => togglePassShow()}>
              {showPass ? (
                <img src={eye} alt="eye" width={30} />
              ) : (
                <img src={eyeSlash} alt="eye" width={30} />
              )}
            </button>
          </div>
          <a onClick={changePage} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {Language[lang].login.Jonat}
          </a>
        </div>
      </div>
    </div>
  );
}
