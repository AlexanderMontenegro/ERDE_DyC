const express = require('express');
const app = express();
const routes = require('./routes/routes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Bienvenido a ERDE D&C API');
});

const PORT = process.env.PORT || 3001;

// Sincronización con la base de datos y arranque del servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('No se pudo conectar con la base de datos:', error);
});
