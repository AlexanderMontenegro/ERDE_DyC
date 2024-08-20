const express = require('express');
const mercadopago = require('../config/mercadoPago');
const router = express.Router();
/*
router.post('/create-payment', async (req, res) => {
  const { items } = req.body;

  const preference = {
    items: items.map(item => ({
      title: item.title,
      unit_price: item.price,
      quantity: item.quantity,
    })),
    back_urls: {
      success: 'http://www.your-site.com/success',
      failure: 'http://www.your-site.com/failure',
      pending: 'http://www.your-site.com/pending'
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

*/

module.exports = router;
