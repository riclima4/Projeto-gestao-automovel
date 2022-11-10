import React from "react";
import "./login.css";

import carImg from "../../assets/imgs/car-img.jpg";
import { Link } from "react-router-dom";
// import { ReactComponent as SvgName } from '../../assets/imgs/img.svg' --> <SvgName />

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="formbg-outer">
          <div className="formbg">
            <span className="loginTitle">Entrar</span>
            <form className="loginForm">
              <div className="field padding-bottom--24">
                <label htmlFor="email">Email</label>
                <input type="email" name="email"></input>
              </div>
              <div className="field">
                <div className="grid--50-50">
                  <label htmlFor="password">Password</label>
                  <div className="reset-pass">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
                <input type="password" name="password"></input>
              </div>
              <div className="field field-checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" name="checkbox"></input> Continuar
                  logado!
                </label>
              </div>
              <div className="field padding-bottom--24">
                <button className="field-btn" type="submit" name="submit">
                  Entrar
                </button>
              </div>
            </form>
          </div>
          <div className="footer-link">
            <span>
              Não tem conta? <Link to={"/register"}>Registar aqui!</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="image-right">
        <img src={carImg} alt="carro login" />
      </div>
    </div>
  );
}
