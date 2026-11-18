import { useState, useEffect } from 'react';
import { ShoppingCart, Star, Package, Eye, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products as staticProducts } from '../../data/products';
import { productAPI } from '../../services/api';

function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-lg w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="relative" style={{ background: 'linear-gradient(135deg, #B50916, #FF8C00)' }}>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="p-6 flex items-center justify-center min-h-48">
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '200px', objectFit: 'contain', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.variant}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black" style={{ color: '#B50916' }}>₹{product.price}</div>
              <div className="text-sm text-gray-400 line-through">₹{product.originalPrice}</div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#FFC928" stroke="#FFC928" />
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.9/5)</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">{product.description}</p>

          {/* Fragrances */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Available Fragrances</div>
            <div className="flex gap-2">
              {product.fragrances.map(f => (
                <span key={f} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            {product.features.map(f => (
              <div key={f} className="flex items-center gap-2 py-1">
                <span style={{ color: '#B50916' }}>✓</span>
                <span className="text-sm text-gray-600">{f}</span>
              </div>
            ))}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-5">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                <Minus size={14} />
              </button>
              <span className="px-3 font-semibold text-sm">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <span className="text-sm font-bold" style={{ color: '#B50916' }}>= ₹{product.price * qty}</span>
          </div>

          <button
            onClick={() => { for (let i = 0; i < qty; i++) onAdd(product); onClose(); }}
            className="w-full py-3 rounded-full text-white font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #B50916, #E8460A)' }}
          >
            <ShoppingCart size={18} />
            Add {qty} to Cart – ₹{product.price * qty}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [imgError, setImgError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div className="product-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
        {/* Image area */}
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #fff4dc, #fff)',
            minHeight: '240px',
          }}
        >
          {/* Badge */}
          <span
            className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full z-10"
            style={{ background: '#B50916' }}
          >
            {product.badge}
          </span>

          {/* Price badge */}
          <span
            className="absolute top-3 right-3 text-white text-sm font-black px-3 py-1 rounded-full z-10"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          >
            ₹{product.price}
          </span>

          {!imgError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ maxHeight: '220px', maxWidth: '90%', padding: '16px' }}
            />
          ) : (
            <div
              className="flex flex-col items-center justify-center w-full h-52 text-white"
              style={{ background: 'linear-gradient(135deg, #B50916, #FFC928)' }}
            >
              <div style={{ fontSize: '3rem' }}>🕯️</div>
              <div className="font-bold mt-2">Jay Baba Ji Agarbatti</div>
              <div className="text-sm opacity-90">{product.variant}</div>
              <div className="text-xl font-black mt-2">₹{product.price}</div>
              <div className="text-xs opacity-80 mt-1">
                Place product{product.id}.jpg in /public/
              </div>
            </div>
          )}

          {/* Quick view overlay */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm"
          >
            <Eye size={18} /> Quick View
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-1">
            <h3 className="font-bold text-gray-800 text-base">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.variant}</p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FFC928" stroke="#FFC928" />)}
            <span className="text-xs text-gray-400 ml-1">4.9</span>
          </div>

          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>

          {/* Sticks info */}
          <div className="flex items-center gap-1.5 mb-4 text-xs text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full w-fit">
            <Package size={12} />
            {product.sticks}
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-black" style={{ color: '#B50916' }}>₹{product.price}</span>
              <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-2.5 py-2 hover:bg-gray-100 transition-colors">
                <Minus size={12} />
              </button>
              <span className="px-2.5 text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-2.5 py-2 hover:bg-gray-100 transition-colors">
                <Plus size={12} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 py-2.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: added
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'linear-gradient(135deg, #B50916, #E8460A)',
              }}
            >
              <ShoppingCart size={14} />
              {added ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProductModal
          product={product}
          onClose={() => setModalOpen(false)}
          onAdd={addToCart}
        />
      )}
    </>
  );
}

export default function Products() {
  const [products, setProducts] = useState(staticProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productAPI.getAll()
      .then(res => {
        if (res.success && res.data.length > 0) {
          // Merge DB data with static fallbacks for image/badge fields
          const merged = res.data.map(dbP => {
            const staticMatch = staticProducts.find(s => s.variant === dbP.variant) || {};
            return { ...staticMatch, ...dbP, id: dbP._id };
          });
          setProducts(merged);
        }
      })
      .catch(() => { /* use static fallback silently */ })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-red-100">
            🕯️ Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            Jay Baba Ji{' '}
            <span style={{ color: '#B50916' }}>Agarbatti</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Pure & Natural incense sticks in Rose, Mogra and Sandal fragrances. Available in small packets and big boxes.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Features below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🌿', text: 'Pure & Natural' },
            { icon: '🕯️', text: 'Long Lasting' },
            { icon: '🏭', text: 'Quality Assured' },
            { icon: '🚚', text: 'Fast Delivery' },
          ].map(f => (
            <div key={f.text} className="text-center p-4 rounded-xl bg-orange-50 border border-orange-100">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
