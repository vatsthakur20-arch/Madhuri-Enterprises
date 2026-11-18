import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + 4;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #B50916 0%, #E8460A 50%, #FFC928 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }}
      />

      <div className="relative z-10 text-center px-8">
        {/* Logo circle */}
        <div
          className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-black shadow-2xl border-4 border-white/30 animate-pulse-gold"
          style={{ background: 'rgba(0,0,0,0.2)' }}
        >
          JBJ
        </div>

        {/* Brand name */}
        <h1 className="text-3xl font-black text-white mb-1 drop-shadow-lg">Jay Baba Ji</h1>
        <p className="text-white/90 font-semibold mb-1" style={{ color: '#FFC928' }}>Agarbatti</p>
        <p className="hindi text-white/80 text-sm mb-8">सुगंध... जो मन को भावे!</p>

        {/* Progress bar */}
        <div className="w-56 h-1.5 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #FFC928, #fff)',
            }}
          />
        </div>
        <p className="text-white/60 text-xs mt-3">Loading experience...</p>
      </div>
    </div>
  );
}
