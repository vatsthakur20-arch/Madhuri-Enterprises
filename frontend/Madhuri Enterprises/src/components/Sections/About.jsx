export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, #B50916 0%, #E8460A 50%, #FFC928 100%)',
              }}
            >
              {/* Mandala decoration */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="relative z-10">
                <div className="text-7xl mb-4 animate-float inline-block">🕯️</div>
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black shadow-xl border-4 border-white/30"
                  style={{ background: 'rgba(0,0,0,0.2)' }}
                >
                  JBJ
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Jay Baba Ji</h3>
                <p className="text-white/90 font-semibold">Agarbatti</p>
                <p className="hindi text-white/80 mt-2 text-sm">सुगंध... जो मन को भावे!</p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { number: '3+', label: 'Fragrances' },
                { number: '100%', label: 'Natural' },
                { number: '₹15', label: 'Starting Price' },
                { number: '10', label: 'Packets / Box' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
                  <div className="text-2xl font-black" style={{ color: '#B50916' }}>{stat.number}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 border border-red-100">
              🏢 About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-2">
              About{' '}
              <span style={{ color: '#B50916' }}>Madhuri Enterprises</span>
            </h2>
            <div className="section-divider" style={{ margin: '0 0 1.5rem 0' }} />

            <p className="text-gray-600 leading-relaxed mb-5">
              Jay Baba Ji Agarbatti brings beautiful fragrance and peaceful moments into your everyday{' '}
              <span className="hindi font-semibold text-gray-800">पूजा</span> experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We at <strong>Madhuri Enterprises</strong> are dedicated to providing pure, natural incense sticks at affordable prices.
              Our agarbatti is made with the finest natural ingredients — no harmful chemicals, safe for your family and home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 hindi">
              अगरबत्ती, पूजा सामग्री एवं दैनिक उपयोग की वस्तुएँ उचित मूल्य पर उपलब्ध हैं।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100 flex-1">
                <span className="text-2xl">🌿</span>
                <div>
                  <div className="font-bold text-sm text-gray-800">Pure & Natural</div>
                  <div className="text-xs text-gray-500">No chemicals used</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-red-50 rounded-xl p-4 border border-red-100 flex-1">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-bold text-sm text-gray-800">Affordable Price</div>
                  <div className="text-xs text-gray-500">Starting ₹15 only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
