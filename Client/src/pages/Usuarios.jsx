import React from 'react'
import "../styles/Usuario.css"
import Navbar from "../components/Navbar"
import RightSide from "../components/RightSide"
import Footer  from '../components/Footer'


function Usuarios() {
  return (
    <div className='usuario' >
      <div className="nav"><Navbar/></div>
  <div className="misdatos">2</div>
  <div className="miscompras">3</div>
  <div className="rightSide"><RightSide/></div>
  <div className="footer"><Footer/></div>
    </div>
  )
}

export default Usuarios
