import { X, ShoppingCart, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice, cartOpen, setCartOpen, clearCart } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-overlay z-50 flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} style={{ color: '#B50916' }} />
            <h2 className="font-bold text-gray-800 text-lg">My Cart</h2>
            {totalItems > 0 && (
              <span
                className="text-xs font-bold text-white w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: '#B50916' }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear All
              </button>
            )}
            <button
              onClick={() => setCartOpen(false)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="font-bold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-sm text-gray-400 mb-6">Add Jay Baba Ji Agarbatti to get started</p>
              <button
                onClick={() => setCartOpen(false)}
                className="px-6 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #B50916, #E8460A)' }}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 border border-gray-100">
                  {/* Image */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #fff4dc, #fff)' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-full h-full items-center justify-center text-xl hidden"
                    >
                      🕯️
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-gray-700 truncate">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.variant}</div>
                    <div className="font-black text-sm mt-0.5" style={{ color: '#B50916' }}>
                      ₹{item.price * item.quantity}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1 border border-gray-200 rounded-full bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-green-50 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 flex-shrink-0 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
              <div className="text-right">
                <div className="text-xs text-gray-400">Total</div>
                <div className="text-2xl font-black" style={{ color: '#B50916' }}>₹{totalPrice}</div>
              </div>
            </div>

            <a
              href={`https://wa.me/916204898872?text=Hello! I want to order:${cartItems.map(i => `%0A• ${i.name} ${i.variant} x${i.quantity} = ₹${i.price * i.quantity}`).join('')}%0A%0ATotal: ₹${totalPrice}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: '#25D366', display: 'flex' }}
            >
              <MessageCircle size={18} />
              Order via WhatsApp – ₹{totalPrice}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
