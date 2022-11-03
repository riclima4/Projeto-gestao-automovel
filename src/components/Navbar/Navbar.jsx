import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <svg
            id="logo-39"
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
              fill="#A5B4FC"
              class="ccompli2"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
              fill="#4F46E5"
              class="ccustom"
            ></path>{" "}
            <path
              d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
              fill="#A5B4FC"
              class="ccompli2"
              fill-opacity="0.3"
            ></path>{" "}
          </svg>
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
