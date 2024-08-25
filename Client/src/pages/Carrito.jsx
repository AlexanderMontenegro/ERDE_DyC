import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RightSide from "../components/RightSide"
import "../styles/Carrito.css"

function Carrito() {
  return (
    <div className='carrito'>
        <div className="nav"><Navbar/></div>
  <div className="detalle">2</div>
  <div className="pagar">3</div>
  <div className="rightSide"><RightSide/></div>
  <div className="footer"><Footer/></div>
    </div>
  )
}

export default Carrito
