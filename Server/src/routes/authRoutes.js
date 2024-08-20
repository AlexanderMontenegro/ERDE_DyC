const express = require('express');
const passport = require('passport');
const router = express.Router();

// Ruta para el login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Autenticación exitosa', user: req.user });
});

// Ruta para el logout
router.post('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Desconectado' });
});

module.exports = router;
