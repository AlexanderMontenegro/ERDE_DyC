import React from 'react';
import "../styles/Home.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Body from "../components/Body"
import RightSide from "../components/RightSide"

function Home() {
  return (
    <section className="layout">
  <div className="header"><Navbar/></div>
  <div className="body"><Body/></div>
  <div className="rightSide"><RightSide/></div>
  <div className="footer"><Footer/></div>
</section>
  )
}

export default Home
