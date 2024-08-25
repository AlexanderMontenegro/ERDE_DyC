import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RightSide from "../components/RightSide"
import "../styles/servicios.css"

function Servicios() {
  return (
    <div className="servicios">
      <div className="nav"><Navbar /></div>
      <div className="personalizado">2</div>
      <div className="estampado">3</div>
      <div className="modelado">4</div>
      <div className="rihtside"><RightSide /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}


export default Servicios;
