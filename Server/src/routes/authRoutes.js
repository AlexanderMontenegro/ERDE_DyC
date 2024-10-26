// src/routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Ruta de callback de Google
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  
  res.redirect('http://localhost:5173/home'); //Redireccion luego de ingreso
  
});

// Cerrar sesión
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.redirect('/'); 
  });
});


router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
