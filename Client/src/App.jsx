import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Carrito from './pages/Carrito';
import Favoritos from './pages/Favoritos';
import Usuarios from './pages/Usuarios';  
import Administracion from './pages/Administracion';
import Servicios from './pages/Servicios';
import Estampado_c from './components/Estampado_c';
import Personalizacion_c from './components/Personalizacion_c';
import Impresion3D_c from './components/Impresion3D_c';


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
        <Route path='/estampado_c' element={<Estampado_c/>} />
        <Route path='/personalizacion_c' element={<Personalizacion_c/>}/>
        <Route path='/impresion3d_c' element={ <Impresion3D_c/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
