import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Righside from "../components/RightSide";
import "../styles/Personalizacion_c.css";
function Personalizacion_c() {
  return (
    <div className='personalizacion_c' >
      <div className="nav">
        <Navbar />
      </div>
      <div className="metodos">Opciones de personalizacion</div>
      <div className="body">datos para cotizacion</div>
      <div className="rightSide">
        <Righside />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Personalizacion_c
