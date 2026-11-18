const Product = require('../models/Product');

// @GET /api/products
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ createdAt: 1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    next(err);
  }
};

// @GET /api/products/:id
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @POST /api/products  (admin only) — seed or add products
const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @PUT /api/products/:id  (admin only)
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @DELETE /api/products/:id  (admin only)
const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, { isActive: false });
    res.json({ success: true, message: 'Product deactivated' });
  } catch (err) {
    next(err);
  }
};

// @POST /api/products/seed  — seeds the two Jay Baba Ji products
const seedProducts = async (req, res, next) => {
  try {
    await Product.deleteMany({});

    const products = await Product.insertMany([
      {
        name: 'Jay Baba Ji Agarbatti',
        nameHindi: 'जय बाबा जी अगरबत्ती',
        variant: 'Small Packet',
        price: 15,
        originalPrice: 20,
        image: '/product1.jpg',
        description: '12 Incense Sticks per Packet. Pure & Natural fragrance for daily पूजा.',
        features: ['Long Lasting Fragrance', 'Pure & Natural', 'Calming Atmosphere'],
        fragrances: ['Rose', 'Mogra', 'Sandal'],
        badge: 'Best Value',
        sticks: '12 Sticks',
        stock: 500,
      },
      {
        name: 'Jay Baba Ji Agarbatti',
        nameHindi: 'जय बाबा जी अगरबत्ती',
        variant: 'Big Box',
        price: 140,
        originalPrice: 200,
        image: '/product2.jpg',
        description: '10 Packets in One Box. 120 incense sticks total. Best price guaranteed.',
        features: ['10 Packets Included', 'Wholesale Rate', 'All Fragrances'],
        fragrances: ['Rose', 'Mogra', 'Sandal'],
        badge: 'Best Deal',
        sticks: '120 Sticks (10 × 12)',
        stock: 200,
      },
    ]);

    res.status(201).json({ success: true, message: 'Products seeded', count: products.length, data: products });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct, seedProducts };
