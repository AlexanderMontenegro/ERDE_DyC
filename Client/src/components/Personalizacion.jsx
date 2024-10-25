// src/components/Personalizacion.js

import React, { useState, useEffect } from "react";
import "../styles/personalizacion.css";
import "../styles/Carruserl_s.css";
import { Link } from "react-router-dom";


const personalizacionImages = [
  "/img/Personalizable/P (1).png",
  "/img/Personalizable/P (2).png",
  "/img/Personalizable/P (3).png",
  "/img/Personalizable/P (4).png",
];

function Personalizacion() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === personalizacionImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="personalizacion">
      <h2>Personalización</h2>

      <div className="carousel_s">
        
        <img src={personalizacionImages[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel_s-image" />
      
      </div>

      <p>En nuestro servicio de personalización, transformamos objetos cotidianos en piezas únicas y especiales. Desde tazas y cuadros hasta textiles y accesorios, ofrecemos una amplia variedad de opciones para que encuentres el regalo perfecto o el complemento ideal para ti. Utilizamos materiales de alta calidad y técnicas avanzadas para asegurar que cada artículo personalizado sea duradero y hermoso, capturando tus ideas y emociones de manera auténtica y original.</p>
      <Link to={"/personalizacion_c"}>
      <button>Ver Más</button>
      </Link>
    </div>
  );
}

export default Personalizacion;
