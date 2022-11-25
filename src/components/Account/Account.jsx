import React from "react";
import "./account.css";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Account(props) {
  props.funcNav(true);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("Logout Feito");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className="home section">
      <div className="container">
        <div className="account_img">
          <a href="#" className="editImg">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="img_account"
              alt="Avatar"
            />
            <div class="uil uil-edit edit-btn-icon"></div>
          </a>
        </div>

        <div className="title_info">
          <h1>Minha conta</h1>
          <button className="uil uil-edit-alt btn_edit"></button>
        </div>
        <div className="account_info">
          <div className="user_info">
            <div className="row_input">
              <label>Nome: </label>
              <input
                disabled
                className="inputstyle"
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome do Utilizador"
              />
            </div>
            <div className="row_input">
              <label>Email: </label>
              <input
                disabled
                className="inputstyle"
                type="email"
                name="email"
                id="email"
                placeholder={user && user.email}
              />
            </div>
            <div className="row_input">
              <label>Password: </label>
              <a href="/" className="passwordChange">
                Mudar a password
              </a>
            </div>
            <div className="row_input">
              <label>NIF: </label>
              <input
                disabled
                className="inputstyle"
                type="text"
                name="nome"
                id="nome"
                placeholder="NIF"
              />
            </div>
          </div>
        </div>
        <div className="btn-row">
          <button onClick={handleLogout} className="logout-btn">
            LOGOUT
          </button>
        </div>
      </div>
    </section>
  );
}
