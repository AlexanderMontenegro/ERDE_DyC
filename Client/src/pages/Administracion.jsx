import React from "react";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Administracion() {
  return (
    <div className="dashboard">
      <div className="nav">
        <Navbar />
      </div>
      <div className="accesos">2</div>
      <div className="modificables">3</div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Administracion;
