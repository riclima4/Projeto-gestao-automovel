import React from 'react'
import './register.css'

import  carImg from '../../assets/imgs/car-img.jpg'
import { Link } from 'react-router-dom'
// import { ReactComponent as SvgName } from '../../assets/imgs/img.svg' --> <SvgName />

export default function Register() {
  return (
    <div className="login-page">
        <div className="login-form">
            <div className="formbg-outer">
            <div className="formbg">
                <span className="loginTitle">Registar</span>
                <form className="loginForm">
                    <div className="field">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="new-password" name="password"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="confpassword">Confirma Password</label>
                        <input type="new-password" name="confpassword"></input>
                    </div>
                    <div className="field padding-bottom--24">
                        <button className='field-btn' type="submit" name="submit" >Registar</button>
                    </div>
                </form>

            </div>
            <div className="footer-link">
                <span>Já tem conta? <Link to={"/login"}>Login aqui!</Link></span>
            </div>
            </div>
        </div>
        <div className="image-right">
            <img src={carImg} alt="carro login" />
        </div>
    </div>
  )
}
