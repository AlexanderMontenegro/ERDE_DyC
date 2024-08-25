import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Righside from "../components/RightSide";
import "../styles/Favoritos.css";

function Favoritos() {
  return (
    <div className="favoritos">
      <div className="nav">
        <Navbar />
      </div>
      <div className="Opciones">2</div>
      <div className="body">3</div>
      <div className="rightSide">
        <Righside />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Favoritos;
