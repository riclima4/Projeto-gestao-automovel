import React from "react";
import "./help.css";

import thumbnail1 from "../../assets/imgs/Thumbnail-1.jpg";
import thumbnail2 from "../../assets/imgs/Thumbnail-2.jpg";
import bgRepair from "../../assets/imgs/BGrepair.jpg";
import bgMecanic from "../../assets/imgs/BGmecanic.jpg";

export default function Help(props) {
  props.funcNav(true);
  return (
    <>
      <section className="helpBanner">
        <div className="helpBannerTitle">
          <h1>Bem vindo a zona de ajuda da CarCRTL</h1>
          <p>
            Aqui podem achar algumas ferramentas de ajuda na reparaçao automovel
          </p>
        </div>
      </section>
      <h1 className="section__title">Forums de Ajuda</h1>
      <section className="infoBannerR">
        <div className="infoBannerTextR">
          <div>
            <h1>Dicas e boas praticas a realizar</h1>
            <p>
              Caso precise de ajuda fornecemos aqui o fórum de dicas da AutoDoc
              que contem dicas e boas praticas a realizar para uma maior
              longevidade do seu veículo
            </p>
          </div>
          <div className="btn-move">
            <a
              className="link-btn"
              href="https://www.auto-doc.pt/info/category/dicas"
            >
              Visitar
            </a>
          </div>
        </div>
        <div className="flex-img1">
          <img src={bgRepair} alt="img1"></img>
          <a
            className="vidBannerIMG"
            href="https://youtube.com/playlist?list=PLq2YjDQLtrfL0wTAaA2r_xuvjLibppY9O"
          >
            <img img src={thumbnail1}></img>
          </a>
        </div>
      </section>
      <section className="vidBanner"></section>
      <section className="infoBannerL">
        <div className="flex-img2">
          <img src={bgMecanic} alt="img1"></img>
          <a
            className="vidBannerIMG"
            href="https://youtube.com/playlist?list=PLq2YjDQLtrfL0wTAaA2r_xuvjLibppY9O"
          >
            <img img src={thumbnail2}></img>
          </a>
        </div>
        <section className="vidBanner"></section>
        <div className="infoBannerTextL">
          <h1>Diagnóstico do veículo</h1>
          <p>
            Caso pertenda realizar um diagnóstico do seu veículo fornecemos o
            fórum da AutoDoc com informaçôes de ajuda na realizaçâo de um
            diagnóstico em casa
          </p>
          <div className="btn-move">
            <a
              className="link-btn"
              href="https://www.auto-doc.pt/info/category/diagnostico"
            >
              Visitar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
