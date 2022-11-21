import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
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
                    // placeholder={user && user.email}
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
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        {/* Isto tem de estar aqui pq por algum motivo o footer salta para cima do modal idk how to fix help habibi man  */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel unde
        ad neque, alias debitis, ipsam laboriosam quos quaerat atque, ullam
        consectetur odio aliquam possimus rem consequuntur ab est? Consequuntur.
        Est adipisci quaerat, sapiente amet deleniti consequatur perspiciatis
        placeat culpa, voluptate, explicabo itaque. Optio dolorum error at
        accusamus numquam doloremque, ipsa a, facere veniam corporis nihil
        perferendis ad quasi! Expedita! Itaque, minus amet eaque quo iste soluta
        necessitatibus iure non. Magni debitis cumque aperiam veritatis placeat,
        vitae rerum officiis blanditiis impedit voluptate itaque fugiat
        dignissimos, id cum iste ipsum accusantium. Vitae non eveniet error
        dolorem officiis velit, repellendus adipisci illum quis nihil omnis
        harum est rerum esse saepe. Magni placeat nam doloremque impedit ratione
        facere pariatur deserunt ea debitis doloribus. Sapiente ducimus neque
        eveniet error minus recusandae fugit consequuntur aspernatur quam.
        Asperiores mollitia voluptatibus perspiciatis modi iste molestias
        eligendi expedita repellat. Vitae cumque pariatur ullam perspiciatis
        nostrum, totam asperiores molestiae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Saepe vel unde ad neque, alias debitis,
        ipsam laboriosam quos quaerat atque, ullam consectetur odio aliquam
        possimus rem consequuntur ab est? Consequuntur. Est adipisci quaerat,
        sapiente amet deleniti consequatur perspiciatis placeat culpa,
        voluptate, explicabo itaque. Optio dolorum error at accusamus numquam
        doloremque, ipsa a, facere veniam corporis nihil perferendis ad quasi!
        Expedita! Itaque, minus amet eaque quo iste soluta necessitatibus iure
        non. Magni debitis cumque aperiam veritatis placeat, vitae rerum
        officiis blanditiis impedit voluptate itaque fugiat dignissimos, id cum
        iste ipsum accusantium. Vitae non eveniet error dolorem officiis velit,
        repellendus adipisci illum quis nihil omnis harum est rerum esse saepe.
        Magni placeat nam doloremque impedit ratione facere pariatur deserunt ea
        debitis doloribus. Sapiente ducimus neque eveniet error minus recusandae
        fugit consequuntur aspernatur quam. Asperiores mollitia voluptatibus
        perspiciatis modi iste molestias eligendi expedita repellat. Vitae
        cumque pariatur ullam perspiciatis nostrum, totam asperiores molestiae.
      </p>
    </>
  );
}
