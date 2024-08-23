require('dotenv').config();
const { Sequelize } = require('sequelize');

// Determinar las variables de entorno según el entorno
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(
  isProduction ? process.env.DB_NAME_R : process.env.DB_NAME,
  isProduction ? process.env.DB_USER_R : process.env.DB_USER,
  isProduction ? process.env.DB_PASSWORD_R : process.env.DB_PASSWORD,
  {
    host: isProduction ? process.env.DB_HOST_R : process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: isProduction ? {
      ssl: {
        require: true,
        rejectUnauthorized: false // Este es necesario para conexiones SSL en algunos entornos de Render
      }
    } : {},
  }
);

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;
