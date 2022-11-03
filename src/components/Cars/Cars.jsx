import React from "react";
import './cars.css';

export default function Cars() {
  return (
    <section className="section__cars">
      <div className="section__title">Carros</div>
      <div className="carCards">
        <div className="product-card">
          <div className="produck-img-name">
            <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=" alt="carro" />
            <h1>Mercedes</h1>
          </div>
          <div className="product-info">
            <div className="details">
              <p>2.0 turbo</p>
              <p>Vermelho</p>
            </div>
            <div className="pricing-info">
              <p>2021</p>
              <p>120.000 KM</p>
              
            </div>
          </div>
          <button className="card-btn" href="#">Selecionar</button>
        </div>
        <div className="product-card">
          <div className="produck-img-name">
            <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=" alt="carro" />
            <h1>Mercedes</h1>
          </div>
          <div className="product-info">
            <div className="details">
              <p>2.0 turbo</p>
              <p>Vermelho</p>
            </div>
            <div className="pricing-info">
              <p>2021</p>
              <p>120.000 KM</p>
              
            </div>
          </div>
          <button className="card-btn" href="#">Selecionar</button>
        </div>
      </div>

    </section>
  
  )
  
}
