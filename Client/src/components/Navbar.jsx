
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src="/iconos/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
  <li>
    <Link to="/" className="nav-button">Inicio</Link>
  </li>
  <li>
    <Link to="/carrito" className="nav-button">Carrito</Link>
  </li>
  <li>
    <Link to="/favoritos" className="nav-button">Favoritos</Link>
  </li>
  <li>
    <Link to="/usuarios" className="nav-button">Usuarios</Link>
  </li>
  <li>
    <Link to="/administracion" className="nav-button">Administracion</Link>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
