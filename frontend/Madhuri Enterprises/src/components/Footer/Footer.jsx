import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#ccc' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg"
                style={{ background: 'linear-gradient(135deg, #E8460A, #FFC928)' }}
              >
                JBJ
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">Jay Baba Ji</div>
                <div className="text-xs leading-tight" style={{ color: '#FFC928' }}>Agarbatti</div>
              </div>
            </div>
            <p className="hindi text-sm mb-1" style={{ color: '#FFC928' }}>सुगंध... जो मन को भावे!</p>
            <p className="text-xs text-gray-400 mb-4">Pure & Natural Incense Sticks</p>
            <p className="text-xs text-gray-400 mb-5">
              Long Lasting Fragrance • Pure & Natural Ingredients • Calming Atmosphere
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916204898872"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#25D366' }}
                title="WhatsApp"
              >
                <MessageCircle size={16} color="white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                title="Instagram"
              >
                <span className="text-white text-xs font-bold">IG</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#1877f2' }}
                title="Facebook"
              >
                <span className="text-white text-xs font-bold">f</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#FF0000' }}
                title="YouTube"
              >
                <span className="text-white text-xs font-bold">▶</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'All Products', id: 'products' },
                { label: 'Rose Agarbatti', id: 'fragrance' },
                { label: 'Mogra Agarbatti', id: 'fragrance' },
                { label: 'Sandal Agarbatti', id: 'fragrance' },
                { label: 'Contact Us', id: 'contact' },
              ].map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gray-600 group-hover:text-orange-400 transition-colors">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">My Account</h3>
            <ul className="flex flex-col gap-2.5">
              {['Login / Register', 'My Profile', 'My Orders', 'Shopping Cart'].map(item => (
                <li key={item}>
                  <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="text-gray-600 group-hover:text-orange-400 transition-colors">›</span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Best prices */}
            <div className="mt-6 p-4 rounded-xl border border-yellow-800/40 bg-yellow-900/20">
              <div className="font-bold text-yellow-400 text-sm mb-2">Best Prices!</div>
              <div className="text-xs text-gray-300">Packet: ₹15 (12 sticks)</div>
              <div className="text-xs text-gray-300">Box: ₹140 (120 sticks)</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="flex flex-col gap-3 mb-5">
              <li>
                <a href="tel:6204898872" className="flex items-start gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#FFC928' }} />
                  +91 6204898872
                </a>
              </li>
              <li>
                <a href="mailto:madhurienterprises5544@gmail.com" className="flex items-start gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#FFC928' }} />
                  madhurienterprise5544@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#FFC928' }} />
                  <span className="hindi">अगरबत्ती, पूजा सामग्री एवं दैनिक उपयोग की वस्तुएँ – उचित मूल्य पर उपलब्ध हैं।</span>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/916204898872?text=Hello! I want to enquire about Jay Baba Ji Agarbatti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm shadow-lg hover:opacity-90 transition-opacity"
              style={{ background: '#25D366' }}
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Madhuri Enterprises. All rights reserved.
          </p>
          <p className="hindi text-xs text-gray-500 text-center">
            ॥ जय बाबा जी ॥
          </p>
          <p className="text-xs text-gray-500 text-right">
            Jay Baba Ji Agarbatti® – Suganadh, Shraddha aur Vishwas ka Sangam
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/916204898872?text=Hello! I want to enquire about Jay Baba Ji Agarbatti"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl z-30 hover:scale-110 transition-transform duration-300 animate-pulse-gold"
        style={{ background: '#25D366' }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </footer>
  );
}
