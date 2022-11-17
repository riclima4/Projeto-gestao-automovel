import React from "react";
import "./help.css";

import thumbnail1 from "../../assets/imgs/Thumbnail-1.jpg";
import thumbnail2 from "../../assets/imgs/Thumbnail-2.jpg";

export default function Help({ data }) {
  return (
    <>
      {/* ^TOP BANNER*/}
      <section className="helpBanner">
        <div className="helpBannerTitle">
          <h1>Bem vindo a zona de ajuda da CarCRTL</h1>
          <p>
            Aqui podem achar algumas ferramentas de ajuda na reparaçao automovel
          </p>
        </div>
      </section>
      <h1 className="section__title">Forums de Ajuda</h1>
      {/* ^TOP BANNER END */}
      {/* INFO BANNER-1*/}
      <section className="infoBannerR">
        <div className="infoBannerTextR">
          <h1>Dicas e boas praticas a realizar</h1>
          <p>
            Caso precise de ajuda fornecemos aqui o fórum de dicas da AutoDoc
            que contem dicas e boas praticas a realizar para uma maior
            longevidade do seu veículo
          </p>
          <a
            className="link-btn"
            href="https://www.auto-doc.pt/info/category/dicas"
          >
            Visitar
          </a>
        </div>
        <div className="infoBannerImgR"></div>
      </section>
      {/* INFO BANNER-1 END*/}
      {/* VID BANNER-1*/}
      <section className="vidBanner">
        <a
          className="vidBannerIMG"
          href="https://youtube.com/playlist?list=PLq2YjDQLtrfL0wTAaA2r_xuvjLibppY9O"
        >
          <img img src={thumbnail1}></img>
        </a>
      </section>
      {/* VID BANNER-1END*/}
      {/* INFO BANNER-2*/}
      <section className="infoBannerL">
        <div className="infoBannerImgL"></div>
        <div className="infoBannerTextL">
          <h1>Diagnostico do veículo</h1>
          <p>
            Caso pretenda realizar um diagnóstico do seu veículo fornecemos o
            fórum da AutoDoc com informações de ajuda na realização de um
            diagnóstico em casa
          </p>
          <a
            className="link-btn"
            href="https://www.auto-doc.pt/info/category/diagnostico"
          >
            Visitar
          </a>
        </div>
      </section>
      {/* INFO BANNER-1 END*/}
      {/* VID BANNER-2*/}
      <section className="vidBanner">
        <div className="vidBannerIMG">
          <a href="https://youtube.com/playlist?list=PLq2YjDQLtrfJB44FH0yq7qKH9hPBiMwoB">
            <img src={thumbnail2}></img>
          </a>
        </div>
      </section>
      {/* VID BANNER-2END*/}
    </>
  );
}
