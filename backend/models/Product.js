const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    nameHindi: { type: String },
    variant: { type: String, required: true }, // 'Small Packet' | 'Big Box'
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    image: { type: String },
    description: { type: String },
    features: [{ type: String }],
    fragrances: [{ type: String }],
    badge: { type: String },
    sticks: { type: String },
    stock: { type: Number, default: 100 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
