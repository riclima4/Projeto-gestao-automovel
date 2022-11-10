import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ReactComponent as Logoipsum } from "../../assets/imgs/logoipsum.svg";

export default function Navbar() {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <Logoipsum/>
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="uil uil-home nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/carros" className="nav__link">
                <i className="uil uil-car nav__icon"></i> Carros
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/help" className="nav__link">
                <i className="uil uil-question-circle nav__icon"></i> Ajuda
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/conta" className="nav__link">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  className="img_menu"
                  alt="Avatar"
                />{" "}
                <div className="nav__texto">Conta</div>
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
