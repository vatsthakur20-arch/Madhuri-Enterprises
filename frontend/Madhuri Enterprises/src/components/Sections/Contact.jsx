import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactAPI } from '../../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await contactAPI.submit(form);
      setSubmitted(true);
      setForm({ name: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to send. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: '#fff4dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-red-100">
            📞 Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            Get In{' '}
            <span style={{ color: '#B50916' }}>Touch</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Madhuri Enterprises</h3>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="tel:6204898872"
                className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #B50916, #E8460A)' }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Phone</div>
                  <div className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">+91 6204898872</div>
                </div>
              </a>

              <a
                href="mailto:madhurienterprises5544@gmail.com"
                className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #E8460A, #FF8C00)' }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email</div>
                  <div className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-sm">
                    madhurienterprises5544@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FF8C00, #FFC928)' }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Address</div>
                  <div className="font-semibold text-gray-800 text-sm hindi">
                    अगरबत्ती, पूजा सामग्री एवं दैनिक उपयोग की वस्तुएँ
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/916204898872?text=Hello! I want to enquire about Jay Baba Ji Agarbatti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: '#25D366' }}
            >
              <MessageCircle size={20} />
              WhatsApp Enquiry
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={56} className="mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Received!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you for contacting Madhuri Enterprises. We will get back to you shortly on WhatsApp or phone.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1.5 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1.5 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your enquiry..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all resize-none"
                    />
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                      <AlertCircle size={15} />
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #B50916, #E8460A)' }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <><Send size={16} />Send Message</>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * This is a frontend demo form. For immediate response, use WhatsApp above.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
