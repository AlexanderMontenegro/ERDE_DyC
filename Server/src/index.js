const express = require('express');
const app = express();
const sequelize = require('./config/database');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
//const paymentRoutes = require('./routes/paymentRoutes');
const imageRoutes = require('./routes/imageRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const routes = require('./routes/routes');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const PORT = process.env.PORT || 4000;

// Configuración del middleware
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/auth');

// Configuración de rutas
app.use('/api', routes);
app.use('/auth', authRoutes);
//app.use('/payment', paymentRoutes);
app.use('/images', imageRoutes);
app.use('/notifications', notificationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a ERDE D&C API');
});

// Inicialización del servidor y Socket.io
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Sincronización con la base de datos y arranque del servidor
sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('No se pudo conectar con la base de datos:', error);
});
