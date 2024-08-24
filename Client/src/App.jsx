import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Carrito from './pages/Carrito';
import Favoritos from './pages/Favoritos';
import Usuarios from './pages/Usuarios';  
import Administracion from './pages/Administracion';
import Servicios from './pages/Servicios';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/administracion' element={<Administracion />} />
        <Route path='/servicios' element={<Servicios />} />
        
      </Routes>
    </Router>
  );
}

export default App;
