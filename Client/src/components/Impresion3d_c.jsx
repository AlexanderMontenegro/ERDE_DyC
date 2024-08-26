import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Righside from "../components/RightSide";
import "../styles/Impresion3d_c.css"
function Impresion3d_c() {
  return (
    <div className='impresion3d_c' >
     <div className="nav"><Navbar/></div>
  <div className="metodos">Opciones de impresion</div>
  <div className="body">datos para cotizacion</div>
  <div className="rightSide"><Righside/></div>
  <div className="footer"><Footer/></div>
    </div>
  )
}

export default Impresion3d_c
