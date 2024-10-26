// src/middleware/productValidator.js
const { body, validationResult } = require('express-validator');

// Validaciones para crear o actualizar productos
const productValidationRules = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('description').isLength({ max: 500 }).withMessage('La descripción es demasiado larga'),
  body('price').isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a 0'),
  body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero no negativo')
];

// Middleware para verificar resultados de validación
const validateProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  productValidationRules,
  validateProduct,
};
