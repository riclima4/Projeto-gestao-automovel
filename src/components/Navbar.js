import React from 'react'
import "../styles/styles.css";

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">CarCTRL</a>
        <ul>
            <li>
                <a href="/cars">Meus carros</a>
            </li>
            <li>
                <a href="/help">Ajuda</a>
            </li>
        </ul>
    </nav>
}