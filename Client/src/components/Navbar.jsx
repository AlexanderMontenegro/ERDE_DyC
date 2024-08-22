
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src="/Client/public/iconos/logo.png" alt="Logo" className="logo" />
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
    <Link to="/productos" className="nav-button">Productos</Link>
  </li>
  <li>
    <Link to="/usuarios" className="nav-button">Usuarios</Link>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
