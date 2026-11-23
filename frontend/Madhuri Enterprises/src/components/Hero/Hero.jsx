import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

// Smoke particle
function SmokeParticle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '8px',
        height: '8px',
        background: 'rgba(255,255,255,0.4)',
        filter: 'blur(4px)',
        ...style,
      }}
    />
  );
}

// Incense stick visual
function IncenseStick({ left, delay = 0 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newP = {
          id: Date.now(),
          x: Math.random() * 20 - 10,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 2 + 2,
        };
        return [...prev.slice(-6), newP];
      });
    }, 400 + delay);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className="absolute bottom-0" style={{ left }}>
      {/* Stick */}
      <div
        className="relative mx-auto"
        style={{ width: '3px', height: '120px', background: 'linear-gradient(to top, #5a3010, #2a1505)', borderRadius: '2px' }}
      >
        {/* Glow tip */}
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2"
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFC928', boxShadow: '0 0 8px #FFC928, 0 0 15px #FF8C00' }}
        />
        {/* Smoke particles */}
        {particles.map((p, i) => (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}px`,
              bottom: '100%',
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.5)',
              filter: 'blur(3px)',
              animation: `smoke ${p.duration}s ease-out forwards`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { addToCart } = useCart();
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgError1, setImgError1] = useState(false);
  const [imgError2, setImgError2] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #B50916 0%, #D43A05 25%, #E8460A 50%, #FF8C00 75%, #FFC928 100%)',
        paddingTop: '64px',
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, #FFC928, transparent)',
            top: '-200px', right: '-100px',
            animation: 'spin-slow 30s linear infinite',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, #fff, transparent)',
            bottom: '-100px', left: '-100px',
          }}
        />
        {/* Mandala pattern */}
        <div
          className="absolute opacity-5"
          style={{
            width: '500px', height: '500px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: `repeating-conic-gradient(from 0deg, transparent 0deg, transparent 25deg, rgba(255,201,40,0.3) 26deg, rgba(255,201,40,0.3) 27deg)`,
            borderRadius: '50%',
            animation: 'spin-slow 60s linear infinite',
          }}
        />
        {/* Floating golden dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: '#FFC928',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
              <span className="text-sm font-medium">⚠️ सुगंध, श्रद्धा और विश्वास का संगम</span>
              <span>⚠️</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 leading-tight drop-shadow-lg">
              Madhuri
              <br />
              <span style={{ color: '#FFC928' }}>Enterprises</span>
            </h1>

            <p className="hindi text-base sm:text-lg mb-2 opacity-95 font-medium">
              अगरबत्ती, पूजा सामग्री एवं दैनिक उपयोग की वस्तुएँ उचित मूल्य पर उपलब्ध हैं।
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 mb-8 mt-4">
              <a
                href="tel:6204898872"
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-white/25 transition-colors border border-white/20"
              >
                <Phone size={14} />
                6204898872
              </a>
              <span className="hidden sm:block opacity-50">|</span>
              <a
                href="mailto:madhurienterprises5544@gmail.com"
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium hover:bg-white/25 transition-colors border border-white/20"
              >
                <Mail size={14} />
                madhurienterprises5544@gmail.com
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start justify-center">
              <button
                onClick={() => scrollTo('products')}
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
              >
                <ShoppingBag size={18} />
                Shop Now
              </button>

              <a
                href="https://wa.me/916204898872?text=Hello! I want to enquire about Jay Baba Ji Agarbatti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-base border-2 border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Product Images */}
          <div className="relative flex items-center justify-center min-h-80">
            {/* Glow behind products */}
            <div
              className="absolute rounded-full"
              style={{
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(255,201,40,0.3) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            />

            {/* Big Box - ₹140 */}
            <div
              className="absolute animate-float"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.3}deg)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 2,
                left: '5%',
                top: '50%',
                marginTop: '-90px',
              }}
            >
              {!imgError2 ? (
                <img
                  src="/aggarbati2.jpeg"
                  alt="Jay Baba Ji Agarbatti Big Box ₹140"
                  onError={() => setImgError2(true)}
                  style={{
                    width: '220px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,201,40,0.3)',
                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
                  }}
                />
              ) : (
                <ProductPlaceholder label="Big Box" price="₹140" size={220} />
              )}
              <div
                className="absolute -top-3 -right-3 rounded-full text-white text-xs font-bold w-12 h-12 flex items-center justify-center shadow-lg"
                style={{ background: '#B50916' }}
              >
                ₹140
              </div>
            </div>

            {/* Small Packet - ₹15 */}
            <div
              className="absolute animate-float-delay"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.2}deg)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 3,
                right: '0%',
                top: '50%',
                marginTop: '-120px',
              }}
            >
              {!imgError1 ? (
                <img
                  src="/aggarbaati.jpeg"
                  alt="Jay Baba Ji Agarbatti Small Packet ₹15"
                  onError={() => setImgError1(true)}
                  style={{
                    width: '110px',
                    borderRadius: '10px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4), 0 0 20px rgba(255,201,40,0.3)',
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))',
                  }}
                />
              ) : (
                <ProductPlaceholder label="Small Packet" price="₹15" size={110} />
              )}
              <div
                className="absolute -top-3 -right-3 rounded-full text-white text-xs font-bold w-10 h-10 flex items-center justify-center shadow-lg"
                style={{ background: '#22c55e' }}
              >
                ₹15
              </div>
            </div>

            {/* Incense sticks */}
            <div
              className="absolute"
              style={{ bottom: '0', left: '55%', height: '130px', width: '80px' }}
            >
              <IncenseStick left="10px" delay={0} />
              <IncenseStick left="35px" delay={200} />
              <IncenseStick left="60px" delay={100} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function ProductPlaceholder({ label, price, size }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size * 1.4}px`,
        background: 'linear-gradient(135deg, #B50916, #FFC928)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '12px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ fontSize: '2rem' }}>🕯️</div>
      <div style={{ fontSize: '0.75rem', marginTop: '8px' }}>Jay Baba Ji</div>
      <div style={{ fontSize: '0.65rem', opacity: 0.9 }}>Agarbatti</div>
      <div style={{ fontSize: '1rem', marginTop: '8px', color: '#FFC928' }}>{price}</div>
      <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>{label}</div>
    </div>
  );
}
