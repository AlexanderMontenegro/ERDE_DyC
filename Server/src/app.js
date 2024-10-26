// src/app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const User = require('./models/User');
const Product = require('./models/Product');
const session = require('express-session');
const passport = require('passport');
require('./passport-setup'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de sesión y Passport antes de las rutas
app.use(session({
  secret: 'tu_secreto', 
  resave: false,
  saveUninitialized: true,
}));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor. Por favor, intenta nuevamente.' });
});

app.use(passport.initialize());
app.use(passport.session());

// Rutas aquí
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/auth', authRoutes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});

