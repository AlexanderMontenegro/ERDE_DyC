// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Otras rutas de usuario aquí...

module.exports = router;
