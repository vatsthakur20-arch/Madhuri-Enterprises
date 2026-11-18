import { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../Auth/AuthModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'white' : 'white',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 1px 8px rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                style={{ background: 'linear-gradient(135deg, #E8460A, #FFC928)' }}
              >
                JBJ
              </div>
              <div className="text-left">
                <div className="font-bold text-base leading-tight" style={{ color: '#B50916' }}>
                  Jay Baba Ji
                </div>
                <div className="text-xs text-orange-500 leading-tight font-medium">Agarbatti</div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Search size={18} />
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    style={{ background: '#B50916' }}
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Login Button / User Menu */}
              {user ? (
                <div className="hidden sm:block relative">
                  <button
                    onClick={() => setUserMenuOpen(o => !o)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:bg-red-50"
                    style={{ color: '#B50916', borderColor: '#B50916' }}
                  >
                    <User size={15} />
                    {user.name.split(' ')[0]}
                    <ChevronDown size={13} />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="text-xs font-bold text-gray-800 truncate">{user.name}</div>
                        <div className="text-xs text-gray-400 truncate">{user.email}</div>
                      </div>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ background: '#B50916' }}
                >
                  <User size={15} />
                  Login
                </button>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3 px-2">
              <input
                autoFocus
                type="text"
                placeholder="Search agarbatti, fragrances..."
                className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-red-400"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: '#B50916' }}
              onClick={() => { setMenuOpen(false); setAuthModalOpen(true); }}
            >
              <User size={15} /> {user ? user.name.split(' ')[0] : 'Login'}
            </button>
          </div>
        )}
      </nav>

      {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
    </>
  );
}
