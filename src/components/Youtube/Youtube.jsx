import React, { useEffect, useState } from "react";
import "./youtube.css";

export default function youtube({ data }) {
  return (
    <div>
      <div class="container3">
        <h1>Videos De Apoio</h1>
        <iframe
          className=""
          src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfL0wTAaA2r_xuvjLibppY9O"
          title="playlist1"
          allowFullScreen
        ></iframe>
        <iframe
          className=""
          src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfJB44FH0yq7qKH9hPBiMwoB"
          title="playlist2"
          allowFullScreen
        ></iframe>
        <iframe
          className="cer"
          src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfId1QSUiFIL1l163bIfxt3p"
          title="playlist3"
          allowFullScreen
        ></iframe>
        <iframe
          className=""
          src="https://www.youtube.com/embed/videoseries?list=PLq2YjDQLtrfJfLKViaU7H2GjB7ng4Co56"
          title="playlist4"
          allowFullScreen
        ></iframe>
        <h1>Links De Apoio</h1>

        <a
          href="https://www.auto-doc.pt/info/category/dicas"
          input
          type="button"
          class="button-29"
        >
          Forum de Apoio
        </a>
      </div>
    </div>
  );
}
