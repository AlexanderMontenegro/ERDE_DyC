
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ERDE DyC API',
      version: '1.0.0',
      description: 'Documentación de la API de ERDE DyC',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Cambiar esto si tu servidor tiene otra dirección o puerto
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ubicación de las rutas a documentar
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
