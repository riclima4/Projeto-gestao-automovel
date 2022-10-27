import React from 'react'
import './account.css'

export default function Account() {
  return (
    <section className="home section">
        <div className='container'>
          <div className="account_img">
            <img src="https://www.w3schools.com/howto/img_avatar.png" className='img_account' alt="Avatar"/>  
          </div>
          <div className="title_info">
              <h1>My Account</h1>
              <button className='uil uil-edit-alt btn_edit'>Edit</button>
          </div>
          <div className="account_info">
            <div className="user_info">
              <div className="row_input">
                <label htmlFor='nome'>Nome</label>
                <input className='inputstyle' type="text" name="nome" id="nome" placeholder="Nome do Utilizador"/>
              </div>
              <div className="row_input">
                <label>Email</label>
                <input className='inputstyle' type="email" name="email" id="email" />
              </div>
              
              
            </div>
          </div>
        </div>    
    </section>
  )
}
