import { features } from '../../data/products';

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff4dc, #fff8ed)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-yellow-200">
            ⭐ Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
            Why{' '}
            <span style={{ color: '#B50916' }}>Jay Baba Ji?</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Our commitment to quality and purity makes us the preferred choice for daily पूजा.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center cursor-default"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: idx % 2 === 0
                    ? 'linear-gradient(135deg, #fff0f0, #ffe8e8)'
                    : 'linear-gradient(135deg, #fff8ed, #fff0d0)',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-1 text-sm leading-tight">{feature.title}</h3>
              <p className="hindi text-xs font-medium mb-3" style={{ color: '#B50916' }}>{feature.titleHindi}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, #B50916, #FFC928)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
