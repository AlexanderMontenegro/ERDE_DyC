import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nosotros">
        <Link to="/contacto" target="_blank">
          <p>Nosotros</p>
        </Link>

        <Link to="/privacidad" target="_blank">
          <p>Política de Privacidad</p>
        </Link>
      <p> ERDE Diseño & Creacion &copy; 2024</p>
      </div>
      <div className="desarrollador">
      <a
            href="https://portafolio-p9aq.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo_img"
              src="/iconos/AGMDesarrollO.png"
              alt="Facebook"
            />
          </a>
      </div>
      <div className="social-media">
        <Link to="/home">
          <img
            className="logo_img"
            src="/iconos/logo.png"
            alt="Logo"
          />
        </Link>

        

        <li>
          <a
            href="https://www.facebook.com/Erde.dyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo_img"
              src="/iconos/facebook.png"
              alt="Facebook"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/erde.dyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo_img"
              src="/iconos/instagram.png"
              alt="Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+541170504193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo_img"
              src="/iconos/whatsapp.png"
              alt="Whatsapp"
            />
          </a>
        </li>
      </div>
     
    </footer>
  );
};

export default Footer;
