const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  name: { type: String, required: true },
  variant: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String },
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // For guest orders (no login)
    guestName: { type: String },
    guestPhone: { type: String },
    guestEmail: { type: String },

    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    totalItems: { type: Number, required: true },

    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },

    paymentMethod: {
      type: String,
      enum: ['cod', 'upi', 'whatsapp'],
      default: 'whatsapp',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },

    shippingAddress: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      phone: String,
    },

    notes: { type: String },
    orderId: { type: String, unique: true }, // human-readable ID like JBJ-2026-0001
  },
  { timestamps: true }
);

// Auto-generate readable order ID
orderSchema.pre('save', async function (next) {
  if (!this.orderId) {
    const count = await mongoose.model('Order').countDocuments();
    const year = new Date().getFullYear();
    this.orderId = `JBJ-${year}-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
