import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div class="footer-basic">
        <footer>
            <div class="social">
                <a target="_blank" href="https://www.instagram.com/"><i class="icon uil uil-instagram"></i></a>
                <a target="_blank" href="https://www.facebook.com/"><i class="icon uil uil-linkedin-alt"></i></a>
                <a target="_blank" href="https://www.linkedin.com/"><i class="icon uil uil-facebook-f"></i></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                <li class="list-inline-item"><Link to="/carros">Carros</Link></li>
                <li class="list-inline-item"><Link to="/help">Ajuda</Link></li>
                <li class="list-inline-item"><Link to="/conta">Conta</Link></li>
            </ul>
            <p class="copyright">CarCTRL © 2022</p>
        </footer>
    </div>
  )
}
