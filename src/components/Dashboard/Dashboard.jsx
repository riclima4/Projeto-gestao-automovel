import React from "react";
import "./dashboard.css";
import helpImg from "../../assets/imgs/helpImg.jpg";
import carSectionImg from "../../assets/imgs/carSectionImg.jpg";
import { Link } from "react-router-dom";

function Dashboard(props) {
  props.funcNav(true);
  return (
    <>
      <section className="welcome">
        <div className="welcomeText">
          <h1>Bem-vindos ao CarCTRL</h1>
          <h3>Aplicação para te ajudar com o teu automóvel</h3>
        </div>
        <a className="scrollMouse" href="#carSectionInfo">
          <i className="uil uil-mouse-alt scrolldownIcon"></i>
          <div className="scrolldownText">Scroll Down</div>
        </a>
      </section>
      <section className="carSectionInfo" id="carSectionInfo">
        <div className="carSectionTittle">
          <h1>Adiciona os teus carros</h1>
          <p>Controla as tuas intervençoes de forma fácil</p>
        </div>
        <div className="carSectionContent">
          <img
            src={carSectionImg}
            alt="carSectionImg"
            className="carSectionImg"
          />
          <div className="carInfo">
            <div className="carInfoRow">
              <i class="uil uil-check-square"></i>
              <p>Adiciona todos os teus carros de forma simples e rápida</p>
            </div>
            <div className="carInfoRow">
              <i class="uil uil-check-square"></i>
              <p>Vê o historico de intervenções dos teus veículos</p>
            </div>
            <div className="carInfoRow">
              <i class="uil uil-check-square"></i>
              <p>
                Exporta um documento certificado, com toda a informação de cada
                um dos teus carros
              </p>
            </div>
            <div className="carInfoRowBtn">
              <Link to="/cars" className="sectionBtn">
                Ir para a secção
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="helpSection" id="helpSec">
        <div className="helpSectionTittle">
          <h1>Tutoriais detalhados para reparações automóvel</h1>
          <p>Reparação automóvel nunca foi tão fácil</p>
        </div>
        <div className="helpSectionContent">
          <div className="helpSectionInfo">
            <div className="helpInfoRow">
              <i class="uil uil-check-square"></i>
              <p>
                Veja mais de 3000 tutoriais vídeo e repare o seu automóvel sem
                qualquer ajuda.
              </p>
            </div>
            <div className="helpInfoRow">
              <i class="uil uil-check-square"></i>
              <p>
                Receba dicas em como substituir peças de automóveis e
                consumíveis diretamente dos nossos especialistas.
              </p>
            </div>
            <div className="helpInfoRow">
              <i class="uil uil-check-square"></i>
              <p>
                Receba uma lista com todas as ferramentas, produtos de cuidado e
                acessórios que precisará para determinadas reparações.
              </p>
            </div>
            <div className="helpInfoRowBtn">
              <Link to="/help" className="sectionBtn">
                Ir para a secção
              </Link>
            </div>
          </div>
          <img src={helpImg} alt="helpImg" className="helpImg" />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
