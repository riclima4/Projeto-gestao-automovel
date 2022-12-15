import React, { useState } from "react";
import "./register.css";
import { UserAuth } from "../../context/AuthContext";

import carImg from "../../assets/imgs/car-img.jpg";
import { Link, useNavigate } from "react-router-dom";
// import { ReactComponent as SvgName } from '../../assets/imgs/img.svg' --> <SvgName />

export default function Register(props) {
  props.funcNav(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="formbg-outer">
          <div className="formbg">
            <span className="loginTitle">Registar</span>
            <form onSubmit={handleSubmit} className="loginForm">
              {/* <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                ></input>
              </div> */}
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                ></input>
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                ></input>
              </div>
              {/* <div className="field">
                <label htmlFor="confpassword">Confirma Password</label>
                <input type="new-password" name="confpassword"></input>
              </div> */}
              <div className="field padding-bottom--24">
                <button className="field-btn" type="submit" name="submit">
                  Registar
                </button>
              </div>
            </form>
          </div>
          <div className="footer-link">
            <span>
              Já tem conta? <Link to={"/login"}>Login aqui!</Link>
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
