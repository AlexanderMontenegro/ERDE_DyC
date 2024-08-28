// src/components/Impresion3D.js

import React, { useState, useEffect } from "react";
import "../styles/Impresion3d.css";
import "../styles/Carruserl_s.css";
import { Link } from "react-router-dom";

const impresion3dImages = [
  "/img/Impresion3D/I (1).png",
  "/img/Impresion3D/I (2).png",
  "/img/Impresion3D/I (3).png",
  "/img/Impresion3D/I (4).png",
  "/img/Impresion3D/I (5).png",
];

function Impresion3D() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === impresion3dImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  
 

  return (
    <div className="impresion3d">
      <h2>Impresión 3D</h2>

      <div className="carousel_s">
       
        <img src={impresion3dImages[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel_s-image" />
        
      </div>

      <p>Con nuestro servicio de modelado e impresión 3D, llevamos tus ideas al siguiente nivel, creando piezas personalizadas que destacan por su detalle y precisión. Desde llaveros y figuras hasta accesorios únicos, nuestro equipo convierte tus conceptos en realidad, utilizando tecnología avanzada y materiales de alta calidad. Perfecto para regalos personalizados, prototipos, y proyectos creativos, cada creación es diseñada para ser tanto funcional como estéticamente impresionante, adaptándose a tus expectativas.</p>
      <Link to={"/impresion3d_c"} >
      <button>Ver Más</button>
      </Link>
    </div>
  );
}

export default Impresion3D;
