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

            </div>
          </div>
        </div>    
    </section>
  )
}
