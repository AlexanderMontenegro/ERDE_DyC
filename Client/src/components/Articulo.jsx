import React from 'react';
import '../styles/Articulo.css';

const Articulo = ({ nombre, imagen, descripcion, precio, material, categoria, talles }) => {
  return (
    <div className="articulo">
      <img src={imagen} alt={nombre} className="articulo-imagen" />
      <div className="articulo-info">
        <h3 className="articulo-nombre">{nombre}</h3>
        <p className="articulo-descripcion">{descripcion}</p>
        <p className="articulo-precio">Precio: ${precio}</p>
        <p className="articulo-material">Material: {material}</p>
        <p className="articulo-categoria">Categoría: {categoria}</p>
        {talles && (
          <p className="articulo-talles">Talles disponibles: {talles.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default Articulo;
