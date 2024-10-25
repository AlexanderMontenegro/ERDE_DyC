import React from 'react';
import '../styles/Leftside.css';

const LeftSide = () => {
  return (
    <aside className="leftSide">
      <h2>Filtros</h2>
      <div>
        <label>Categoría:</label>
        <select>
          <option value="all">Todas</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
        </select>
      </div>
      <div>
        <label>Precio:</label>
        <input type="range" min="0" max="1000" />
      </div>
      <div>
        <label>Talle:</label>
        <select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div>
        <label>Material:</label>
        <select>
          <option value="algodon">Algodón</option>
          <option value="poliester">Poliéster</option>
        </select>
      </div>
    </aside>
  );
};

export default LeftSide;
