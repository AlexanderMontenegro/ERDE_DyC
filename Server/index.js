const express = require('express');
const app = express();

app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a ERDE D&C API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
