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
    setUserMenuOpen(false);
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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'white',
          boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}>

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E8460A, #FFC928)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '800',
                fontSize: '12px',
                boxShadow: '0 3px 10px rgba(232,70,10,0.4)',
                flexShrink: 0,
              }}>
                JBJ
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '800', fontSize: '16px', color: '#B50916', lineHeight: '1.2' }}>
                  Jay Baba Ji
                </div>
                <div style={{ fontWeight: '500', fontSize: '12px', color: '#FF8C00', lineHeight: '1.2' }}>
                  Agarbatti
                </div>
              </div>
            </button>

            {/* ── Desktop Nav Links ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
              className="desktop-nav"
            >
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#444',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.target.style.background = '#fff0f0'; e.target.style.color = '#B50916'; }}
                  onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#444'; }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* ── Right Side ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid #e5e7eb',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#555',
                  flexShrink: 0,
                }}
                className="hide-mobile"
              >
                <Search size={18} />
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid #e5e7eb',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#555',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#B50916',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white',
                  }}>
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Login / User */}
              {user ? (
                <div style={{ position: 'relative' }} className="hide-mobile">
                  <button
                    onClick={() => setUserMenuOpen(o => !o)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '50px',
                      border: '2px solid #B50916',
                      background: 'white',
                      color: '#B50916',
                      fontSize: '14px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <User size={16} />
                    {user.name.split(' ')[0]}
                    <ChevronDown size={14} />
                  </button>
                  {userMenuOpen && (
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      top: 'calc(100% + 8px)',
                      width: '200px',
                      background: 'white',
                      borderRadius: '16px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      border: '1px solid #f0f0f0',
                      overflow: 'hidden',
                      zIndex: 1000,
                    }}>
                      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f5f5f5' }}>
                        <div style={{ fontWeight: '700', fontSize: '13px', color: '#222' }}>{user.name}</div>
                        <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{user.email}</div>
                      </div>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px 16px',
                          border: 'none',
                          background: 'none',
                          color: '#B50916',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                        }}
                      >
                        <LogOut size={15} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="hide-mobile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 24px',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #B50916, #E8460A)',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(181,9,22,0.35)',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <User size={16} />
                  Login
                </button>
              )}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="show-mobile"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid #e5e7eb',
                  background: 'white',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#555',
                  flexShrink: 0,
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div style={{ paddingBottom: '12px' }}>
              <input
                autoFocus
                type="text"
                placeholder="Search agarbatti, fragrances..."
                onBlur={() => setSearchOpen(false)}
                style={{
                  width: '100%',
                  border: '2px solid #e5e7eb',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid #f0f0f0',
            background: 'white',
            padding: '12px 20px 16px',
          }}>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  marginBottom: '4px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#444',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setAuthModalOpen(true); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                marginTop: '8px',
                padding: '13px',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #B50916, #E8460A)',
                color: 'white',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              <User size={16} />
              {user ? user.name.split(' ')[0] : 'Login / Register'}
            </button>
          </div>
        )}
      </nav>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
    </>
  );
}
