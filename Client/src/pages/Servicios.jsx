
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RightSide from "../components/RightSide";
import Personalizacion from "../components/Personalizacion";
import Estampado from "../components/Estampado";
import Impresion3D from "../components/Impresion3D";
import "../styles/servicios.css";

function Servicios() {
  return (
    <div className="servicios">
      <div className="nav"><Navbar /></div>
      <div className="personalizado"><Personalizacion /></div>
      <div className="estampado"><Estampado /></div>
      <div className="modelado"><Impresion3D /></div>
      <div className="rightside"><RightSide /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default Servicios;
