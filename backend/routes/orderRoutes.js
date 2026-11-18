const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders, getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/auth');

// Guest or logged-in users can place orders
router.post('/', (req, res, next) => {
  // Try to attach user if token present, but don't block if not
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const jwt = require('jsonwebtoken');
    const User = require('../models/User');
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      User.findById(decoded.id).select('-password').then(user => {
        if (user) req.user = user;
        next();
      }).catch(() => next());
    } catch {
      next();
    }
  } else {
    next();
  }
}, createOrder);

router.get('/my', protect, getMyOrders);
router.get('/', protect, adminOnly, getAllOrders);
router.put('/:id/status', protect, adminOnly, updateOrderStatus);

module.exports = router;
