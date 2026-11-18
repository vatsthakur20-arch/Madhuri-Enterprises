const Order = require('../models/Order');

// @POST /api/orders  — place order (guest or logged-in)
const createOrder = async (req, res, next) => {
  try {
    const { items, totalAmount, totalItems, guestName, guestPhone, guestEmail, shippingAddress, paymentMethod, notes } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'No items in order' });
    }
    if (!totalAmount || !totalItems) {
      return res.status(400).json({ success: false, message: 'Invalid order total' });
    }

    const orderData = {
      items,
      totalAmount,
      totalItems,
      paymentMethod: paymentMethod || 'whatsapp',
      notes,
      shippingAddress,
    };

    // Attach user if logged in, otherwise use guest fields
    if (req.user) {
      orderData.user = req.user._id;
    } else {
      if (!guestName || !guestPhone) {
        return res.status(400).json({ success: false, message: 'Name and phone are required' });
      }
      orderData.guestName = guestName;
      orderData.guestPhone = guestPhone;
      orderData.guestEmail = guestEmail;
    }

    const order = await Order.create(orderData);

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: {
        orderId: order.orderId,
        _id: order._id,
        totalAmount: order.totalAmount,
        status: order.status,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @GET /api/orders/my  — logged-in user's orders
const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    next(err);
  }
};

// @GET /api/orders  — all orders (admin)
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    next(err);
  }
};

// @PUT /api/orders/:id/status  — update status (admin)
const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getMyOrders, getAllOrders, updateOrderStatus };
