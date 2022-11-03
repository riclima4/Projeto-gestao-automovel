import React from "react";
import "./help.css";

export default function Help({ data }) {
  return (
    <>
      <section className="section__cars">
        <div className="section__title">Help</div>
        <div className="carCards">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfL0wTAaA2r_xuvjLibppY9O"
              title="playlist1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfJB44FH0yq7qKH9hPBiMwoB"
              title="playlist1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfId1QSUiFIL1l163bIfxt3p"
              title="playlist1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfJfLKViaU7H2GjB7ng4Co56"
              title="playlist1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* ZONA DE LINS */}
      <section className="section__cars">
        <div className="section__title">Forums</div>
        <div className="carCards">
          {/* Link-2 */}
          <div className="product-card">
            <img
              src="https://yt3.ggpht.com/2RDi0Yqnc83dOUNPScKleVtHYjyGW1IY_9fym2pwWwAVYimVjgVUVemmWA3yvaGXJiCKwtSz8A=s900-c-k-c0x00ffffff-no-rj"
              alt="carro"
            />
            <h1>AutoDoc</h1>
            <div className="help-info">
              <div className="details">
                <p>Dicas Gerais</p>
              </div>
            </div>
            <a
              className="link-btn"
              href="https://www.auto-doc.pt/info/category/dicas"
            >
              Visitar
            </a>
          </div>
          {/* Link-2 */}
          <div className="product-card">
            <img
              src="https://yt3.ggpht.com/2RDi0Yqnc83dOUNPScKleVtHYjyGW1IY_9fym2pwWwAVYimVjgVUVemmWA3yvaGXJiCKwtSz8A=s900-c-k-c0x00ffffff-no-rj"
              alt="carro"
            />
            <h1>AutoDoc</h1>
            <div className="help-info">
              <div className="details">
                <p>Diagnostico</p>
              </div>
            </div>
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
