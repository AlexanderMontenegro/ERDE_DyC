import { useEffect, useState } from "react";
import "../styles/Body.css";
import Articulo from "../components/Articulo";
import Paginado from "../components/Paginado";

const Body = () => {
  const [articulos, setArticulos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("");
  const [filtroMaterial, setFiltroMaterial] = useState("");
  const [filtroTalle, setFiltroTalle] = useState("");
  const [filtroEstampado, setFiltroEstampado] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  useEffect(() => {
    fetch("/art.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setArticulos(data))
      .catch((error) => console.error("Error al cargar los artículos:", error));
  }, []);

  const handleFiltroCategoriaChange = (e) => {
    setFiltroCategoria(e.target.value);
  };

  const handleFiltroPrecioChange = (e) => {
    setFiltroPrecio(e.target.value);
  };

  const handleFiltroMaterialChange = (e) => {
    setFiltroMaterial(e.target.value);
  };

  const handleFiltroTalleChange = (e) => {
    setFiltroTalle(e.target.value);
  };

  const handleFiltroEstampadoChange = (e) => {
    setFiltroEstampado(e.target.value);
  };

  const articulosFiltrados = articulos.filter((articulo) => {
    return (
      (filtroCategoria ? articulo.categoria === filtroCategoria : true) &&
      (filtroPrecio
        ? (filtroPrecio === "low" && articulo.precio < 20) ||
          (filtroPrecio === "medium" &&
            articulo.precio >= 20 &&
            articulo.precio <= 40) ||
          (filtroPrecio === "high" && articulo.precio > 40)
        : true) &&
      (filtroMaterial ? articulo.material === filtroMaterial : true) &&
      (filtroTalle ? articulo.talles?.includes(filtroTalle) : true) &&
      (filtroEstampado
        ? articulo.descripcion
            .toLowerCase()
            .includes(filtroEstampado.toLowerCase())
        : true)
    );
  });

  const totalPages = Math.ceil(articulosFiltrados.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articulosFiltrados.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="body_b">
      <div className="filtros">
        <h2>Filtros</h2>
        <select onChange={handleFiltroCategoriaChange} value={filtroCategoria}>
          <option value="">Todas las categorías</option>
          <option value="Remeras">Remeras</option>
          <option value="Tazas">Tazas</option>
          <option value="Gorras">Gorras</option>
          <option value="Modelos 3D">Modelos 3D</option>
          <option value="Buzos">Buzos</option>
        </select>

        <h3>Precio</h3>
        <select onChange={handleFiltroPrecioChange} value={filtroPrecio}>
          <option value="">Todos los precios</option>
          <option value="low">Menos de $20</option>
          <option value="medium">$20 - $40</option>
          <option value="high">Más de $40</option>
        </select>

        <h3>Material</h3>
        <select onChange={handleFiltroMaterialChange} value={filtroMaterial}>
          <option value="">Todos los materiales</option>
          <option value="Algodón">Algodón</option>
          <option value="Cerámica">Cerámica</option>
          <option value="Poliéster">Poliéster</option>
          <option value="PLA">PLA</option>
        </select>

        <h3>Talle</h3>
        <select onChange={handleFiltroTalleChange} value={filtroTalle}>
          <option value="">Todos los talles</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <h3>Estampado</h3>
        <input
          type="text"
          placeholder="Buscar por estampado"
          value={filtroEstampado}
          onChange={handleFiltroEstampadoChange}
        />
      </div>

      <div className="articulos">
        <ul>
          {currentArticles.map((articulo) => (
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
      </div>
      <div className="paginado">
        <Paginado
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Body;
