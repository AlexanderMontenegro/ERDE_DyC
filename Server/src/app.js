// src/app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const User = require('./models/User');
const Product = require('./models/Product');

// Importa las rutas aquí
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas aquí
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
