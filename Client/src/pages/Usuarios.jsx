import React, { useEffect, useState } from 'react';
import "../styles/Usuario.css";
import Navbar from "../components/Navbar";
import RightSide from "../components/RightSide";
import Footer from '../components/Footer';
import { getUsers } from '../api'; // Importa el servicio de API

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className='usuario'>
      <div className="nav"><Navbar/></div>
      <div className="misdatos">
        <h2>Mis Datos</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li> // Ajusta según los campos de tu modelo
          ))}
        </ul>
      </div>
      <div className="miscompras">3</div>
      <div className="rightSide"><RightSide/></div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Usuarios;
