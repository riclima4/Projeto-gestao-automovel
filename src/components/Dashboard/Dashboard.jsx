import React from "react";
import "./dashboard.css";
import { useEffect, useState, useRef } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container2">
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <button className="old price">{oldPrice}</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img
            src="../../static/images/216151_right_chevron_icon.png"
            alt="Scroll Left"
          />
        </button>
        <button onClick={handleRightClick}>
          <img
            src="../../static/images/216151_right_chevron_icon.png"
            alt="Scroll Right"
          />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
