const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Favorite = require('../models/Favorite');
const Review = require('../models/Review');

// Rutas para usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para productos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para órdenes
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/orders', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para items de órdenes
router.get('/orderitems', async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/orderitems', async (req, res) => {
  try {
    const orderItem = await OrderItem.create(req.body);
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para favoritos
router.get('/favorites', async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/favorites', async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body);
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para reseñas
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/reviews', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
