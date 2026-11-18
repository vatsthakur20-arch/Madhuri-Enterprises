import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function SpecialOffer() {
  const { addToCart } = useCart();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #B50916 0%, #E8460A 50%, #FF8C00 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-10"
          style={{ width: '400px', height: '400px', background: '#FFC928', top: '-150px', right: '-100px' }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{ width: '300px', height: '300px', background: '#fff', bottom: '-100px', left: '-80px' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/25">
          <span className="text-white text-sm font-bold">🔥 Special Offer — Limited Time!</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 drop-shadow-lg">
          सबसे सस्ते रेट में
          <br />
          <span style={{ color: '#FFC928' }}>अगरबत्ती मिलती है!</span>
        </h2>
        <p className="text-white/85 text-base mb-12 max-w-lg mx-auto">
          Best quality agarbatti at the most affordable price. Order now for daily पूजा!
        </p>

        {/* Price cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {products.map(p => (
            <div
              key={p.id}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Animated golden border */}
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #FFC928, #FF8C00)' }}
              >
                🕯️
              </div>
              <h3 className="text-white font-bold text-base mb-1">{p.variant}</h3>
              <div className="text-4xl font-black mb-1" style={{ color: '#FFC928' }}>
                ₹{p.price}
              </div>
              <p className="text-white/70 text-xs mb-4">{p.sticks}</p>
              <button
                onClick={() => addToCart(p)}
                className="w-full py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 group-hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #FFC928, #FF8C00)', color: '#32180C' }}
              >
                <ShoppingCart size={15} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/916204898872?text=Hello! I want to place an order for Jay Baba Ji Agarbatti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          style={{ background: '#25D366' }}
        >
          <MessageCircle size={20} />
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}
