

import React, { useState, useEffect } from "react";
import "../styles/Estampado.css"; 
import "../styles/Carruserl_s.css";
import { Link } from "react-router-dom";

const estampadoImages = [
  "/img/Estampado/E (1).png",
  "/img/Estampado/E (2).png",
  "/img/Estampado/E (3).png",
  "/img/Estampado/E (4).png",
];

function Estampado() {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === estampadoImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

 
  

  return (
    <div className="estampados">
      <h2>Estampado</h2>

      <div className="carousel_s">
      
        <img src={estampadoImages[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel_s-image" />
        
      </div>

      <p>Ofrecemos estampados en serigrafía, sublimación y vinilo para una variedad de artículos.</p>
      <Link  to={"/estampado_c"} >
      <button>Ver Más</button>
      </Link>
    </div>
  );
}

export default Estampado;
