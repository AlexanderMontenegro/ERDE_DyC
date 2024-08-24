import React from "react";
import "../styles/Favoritos.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Favoritos() {
  return (
    <div className="favoritos">
      <div className="nav"><Navbar/></div>
      <div className="favoritos">2</div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Favoritos;
