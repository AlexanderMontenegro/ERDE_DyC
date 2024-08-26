import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Righside from "../components/RightSide";
import "../styles/Estampados_c.css";

function Estampado_c() {
  return (
    <div className="estampado_c">
      <div className="nav">
        <Navbar />
      </div>
      <div className="metodos">Opciones de estampado</div>
      <div className="body">datos para cotizacion</div>
      <div className="rightSide">
        <Righside />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Estampado_c;
