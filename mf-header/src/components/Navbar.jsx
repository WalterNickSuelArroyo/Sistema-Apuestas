import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li><a href="#" className="nav-link">Apuestas</a></li>
        <li><a href="#" className="nav-link">Partidos</a></li>
        <li><a href="#" className="nav-link">Estadísticas</a></li>
        <li><a href="#" className="nav-link">Perfil</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

