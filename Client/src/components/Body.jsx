import React, { useEffect, useState } from 'react';
import '../styles/Body.css';
import Articulo from '../components/Articulo';

const Body = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch('/art.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticulos(data))
      .catch(error => console.error('Error al cargar los artículos:', error));
  }, []);

  return (
    <main className="body">
      <ul>
        {articulos.map(articulo => (
          <Articulo 
            key={articulo.id}
            nombre={articulo.nombre}
            imagen={articulo.imagen}
            descripcion={articulo.descripcion}
            precio={articulo.precio}
            material={articulo.material}
            categoria={articulo.categoria}
            talles={articulo.talles}
          />
        ))}
      </ul>
    </main>
  );
};

export default Body;
