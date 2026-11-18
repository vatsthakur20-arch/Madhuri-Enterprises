import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-yellow-200">
            💬 Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            What Our Customers{' '}
            <span style={{ color: '#B50916' }}>Say</span>
          </h2>
          <div className="section-divider" />
          <p className="text-xs text-gray-400 italic">* Sample / demo reviews until real reviews are submitted</p>
        </div>

        {/* Main review card */}
        <div className="max-w-2xl mx-auto">
          <div
            key={current}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center relative overflow-hidden"
          >
            {/* Quote mark */}
            <div
              className="absolute top-4 left-6 text-8xl font-serif leading-none opacity-10"
              style={{ color: '#B50916' }}
            >
              "
            </div>

            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black shadow-lg"
              style={{ background: t.color }}
            >
              {t.avatar}
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#FFC928" stroke="#FFC928" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10 hindi">
              "{t.review}"
            </p>

            {/* Name + location */}
            <div>
              <div className="font-bold text-gray-800">{t.name}</div>
              <div className="text-sm text-gray-400">{t.location}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? '#B50916' : '#d1d5db',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
