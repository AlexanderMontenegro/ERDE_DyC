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
      <div className="menu">2</div>
      <div className="dashboard">3</div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Administracion;
