// Client/src/pages/Productos.jsx
import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, deleteProduct } from '../api';
import Articulo from '../components/Articulo'; // Asegúrate de importar el componente

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Articulo
              nombre={product.name}
              imagen={product.image} // Asegúrate de que la propiedad sea correcta
              descripcion={product.description} // Asegúrate de que la propiedad sea correcta
              precio={product.price}
              material={product.material}
              categoria={product.category}
              talles={product.sizes} // Asegúrate de que la propiedad sea correcta
            />
            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
