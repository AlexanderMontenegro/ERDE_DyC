import React, { useState, useEffect } from 'react';
import '../styles/Righside.css';
import destacados from '../db.json/destacados.json'; 

function RightSide() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destacados.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel_p">
      <div className="carrusel_p1">
        {destacados.map((item, idx) => (
          <div
            key={item.id}
            className={`item_p ${index === idx ? 'active' : ''}`}
            style={{ transform: `translateY(-${index * 100}%)` }}
          >
            <img src={item.url} alt={`Imagen ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;
