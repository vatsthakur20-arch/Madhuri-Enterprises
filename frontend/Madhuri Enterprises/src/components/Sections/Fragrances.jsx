import { fragrances } from '../../data/products';

export default function Fragrances() {
  return (
    <section id="fragrance" className="py-20" style={{ background: '#fff4dc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-orange-200">
            🌸 Fragrance Collection
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            Three Divine{' '}
            <span style={{ color: '#B50916' }}>Fragrances</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Each fragrance is carefully crafted to create the perfect atmosphere for your daily पूजा and meditation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fragrances.map((f, idx) => (
            <div
              key={f.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                background: idx === 0
                  ? 'linear-gradient(135deg, #fff0f3, #ffd6e0)'
                  : idx === 1
                  ? 'linear-gradient(135deg, #f8f0ff, #e8d5f5)'
                  : 'linear-gradient(135deg, #fff8ed, #fde8c0)',
              }}
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,201,40,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(181,9,22,0.3) 0%, transparent 50%)',
                }}
              />

              <div className="relative p-8 text-center">
                {/* Big emoji */}
                <div
                  className="text-6xl mb-4 inline-block transition-transform duration-300 group-hover:scale-125"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
                >
                  {f.emoji}
                </div>

                <h3 className="text-2xl font-black text-gray-800 mb-1">{f.name}</h3>
                <p className="hindi text-base font-semibold mb-3" style={{ color: '#B50916' }}>{f.nameHindi}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>

                {/* Tag */}
                <div className="mt-5 inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 border border-white/50">
                  Available in both sizes
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                style={{
                  background: idx === 0
                    ? 'linear-gradient(90deg, #f43f5e, #fb7185)'
                    : idx === 1
                    ? 'linear-gradient(90deg, #a855f7, #c084fc)'
                    : 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
